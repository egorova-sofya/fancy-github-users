import Avatar from "../Avatar/Avatar";
import RepositoriesList from "../RepositoriesList/RepositoriesList";
import "./UsersProfileComponent.css";

const UsersProfileComponent = () => {
  return (
    <div className="user-profile">
      <div className="user-profile__user">
        <Avatar size="large" className="user-profile__avatar" />
        <div className="user-profile__info">
          <p className="user-profile__name">Naomi Willms</p>

          <div className="user-profile__data-wrapper">
            <small className="user-profile__data">21 followers</small>
            <small className="user-profile__data">210 followers</small>
            <small className="user-profile__data">
              <a className="user-profile__data--link">
                https://mypersonalsite.com/
              </a>
            </small>
          </div>
        </div>
      </div>

      <div className="user-profile__repositories">
        <RepositoriesList />
      </div>
    </div>
  );
};

export default UsersProfileComponent;
