import UserCard from "../UserCard/UserCard";
import "./UsersList.css";

const UsersList = () => {
  return (
    <div className="users-list">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item) => {
        return <UserCard key={item} className="users-list__user-card" />;
      })}
    </div>
  );
};

export default UsersList;
