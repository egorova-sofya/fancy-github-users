import { useDispatch, useSelector } from "react-redux";
import { API } from "../app/services/ApiService";
import Button from "../components/Button/Button";
import UsersList from "../components/UsersList/UsersList";
import { updateUsers } from "../app/commonSlice";
import { useEffect, useState } from "react";
import { RootState } from "../app/store";
// import users from "./../utils/usersV2.json";

export default function Users() {
  const [usersQuantity, setUsersQuantity] = useState(1);

  // const { data: users } = API.useGetGithubUsersQuery({ since: 1 });
  const [getUsers] = API.useLazyGetGithubUsersQuery();

  const [getUser, { data }] = API.useLazyGetGithubUserQuery();
  const finalUsers = useSelector((state: RootState) => state.commonSlice.users);

  const dispatch = useDispatch();

  // const getFullUsersFullInfo = () => {
  //   getUsers({ since: usersQuantity })
  //     .unwrap()
  //     .then((res) => {
  //       res.map((user) => {
  //         getUser({ userLogin: user.login })
  //           .unwrap()
  //           .then((finalUser) => dispatch(updateUsers(finalUser)));
  //       });
  //     });
  // };

  // useEffect(() => {
  //   getFullUsersFullInfo();
  // }, []);

  const loadMoreUsers = () => {
    setUsersQuantity(usersQuantity + 10);
    getUsers({ since: usersQuantity });
  };

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
