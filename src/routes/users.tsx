import { useDispatch, useSelector } from "react-redux";
import { API } from "../app/services/ApiService";
import Button from "../components/Button/Button";
import UsersList from "../components/UsersList/UsersList";
import { updateUsers } from "../app/commonSlice";
import { useEffect } from "react";
import { RootState } from "../app/store";
import Loader from "../components/Loader/Loader";

export default function Users() {
  const [getUsers, { isLoading, isError }] = API.useLazyGetGithubUsersQuery();

  const finalUsers = useSelector((state: RootState) => state.commonSlice.users);

  const dispatch = useDispatch();

  const getFullUsersFullInfo = (since: number) => {
    getUsers({ since: since })
      .unwrap()
      .then((finalUser) => dispatch(updateUsers(finalUser)));
  };

  useEffect(() => {
    getFullUsersFullInfo(1);
  }, []);

  const loadMoreUsers = () => {
    //without 1 loaded with duplicates
    getFullUsersFullInfo(finalUsers.length + 1);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <h1 style={{ padding: "12px var(--padding-left-right)" }}>
        Something went wrong. Try reloading the page
      </h1>
    );
  }

  return (
    <>
      <div style={{ padding: "12px var(--padding-left-right)" }}>
        <UsersList users={finalUsers} />
      </div>
      <div style={{ textAlign: "center" }}>
        <Button
          onClick={loadMoreUsers}
          style={{ margin: "52px 0" }}
          appearance="secondary"
        >
          Load more
        </Button>
      </div>
    </>
  );
}
