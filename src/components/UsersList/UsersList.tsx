import { FC } from "react";
import { IUser } from "../../app/types";
import UserCard from "../UserCard/UserCard";
import "./UsersList.css";

interface Props {
  users: Array<IUser>;
}

const UsersList: FC<Props> = ({ users }) => {
  return (
    <div className="users-list">
      {users.map((user) => {
        return (
          <UserCard
            key={user.id}
            className="users-list__user-card"
            user={user}
          />
        );
      })}
    </div>
  );
};

export default UsersList;
