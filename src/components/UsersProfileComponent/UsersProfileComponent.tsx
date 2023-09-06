import { useParams } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import RepositoriesList from "../RepositoriesList/RepositoriesList";
import "./UsersProfileComponent.css";
import usersV2 from "./../../utils/usersV2.json";
import { getPlural } from "../../utils/getPlural";
import repos from "./../../utils/repos.json";

const UsersProfileComponent = () => {
  const { id } = useParams();

  const user = usersV2[0];

  const followersQuantity = getPlural(user.followers);
  const followersText = followersQuantity == "one" ? "follower" : "followers";

  const subscribersQuantity = getPlural(user.following);
  const subscribersText =
    subscribersQuantity == "one" ? "subscriber" : "subscribers";

  return (
    <div className="user-profile">
      <div className="user-profile__user">
        <Avatar
          imageUrl={user.avatar_url}
          size="large"
          className="user-profile__avatar"
        />
        <div className="user-profile__info">
          <p className="user-profile__name">{user.login}</p>

          <div className="user-profile__data-wrapper">
            <small className="user-profile__data">
              {user.followers} {followersText}
            </small>
            <small className="user-profile__data">
              {user.following} {subscribersText}
            </small>
            <small className="user-profile__data">
              <a className="user-profile__data--link">{user.blog}</a>
            </small>
          </div>
        </div>
      </div>

      <div className="user-profile__repositories">
        <RepositoriesList
          repositories={repos}
          repositoriesUrl={user.html_url}
        />
      </div>
    </div>
  );
};

export default UsersProfileComponent;
