import "./UserCard.css";
import Avatar from "../Avatar/Avatar";

const UserCard = () => {
  return (
    <div className="user-card">
      <Avatar />
      <div className="user-card__info">
        <p className="user-card__name">Naomi Willms</p>
        <div className="user-card__wrapper">
          <p className="user-card__description">Name of the organization</p>
          <p className="user-card__description">9 repositories</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
