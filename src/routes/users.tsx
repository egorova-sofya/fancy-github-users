import { useDispatch } from "react-redux";
import { API } from "../app/services/ApiService";
import Button from "../components/Button/Button";
import UsersList from "../components/UsersList/UsersList";
import { updateUsers } from "../app/commonSlice";
import { useState } from "react";
// import users from "./../utils/usersV2.json";

export default function Users() {
  const [usersQuantity, setUsersQuantity] = useState(1);

  const { data: users } = API.useGetGithubUsersQuery({ since: 1 });
  const [getUsers] = API.useLazyGetGithubUsersQuery();

  const [getUser, { data }] = API.useLazyGetGithubUserQuery();

  const dispatch = useDispatch();

  // console.log("data", data);

  const getFullUsersFullInfo = () => {
    if (users)
      users.map((item) => {
        getUser({ userLogin: item.login })
          .unwrap()
          .then(() => console.log());
        // dispatch(updateUsers(item))
      });
  };

  //получаем список с урезанной инфой пользователей от 1 до 10
  //итерируемся по этому массиву и каждый раз  запрашиваем  полную инфу о пользователе и сохраняем в state

  const loadMoreUsers = () => {
    setUsersQuantity(usersQuantity + 10);
    getUsers({ since: usersQuantity });
  };

  return (
    <>
      <div style={{ padding: "12px var(--padding-left-right)" }}>
        <UsersList users={users} />
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
