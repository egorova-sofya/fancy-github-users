import { useParams } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import RepositoriesList from "../RepositoriesList/RepositoriesList";
import "./UsersProfileComponent.css";
import { getPlural } from "../../utils/getPlural";
import { useLocation } from "react-router-dom";
import { CSSProperties } from "react";
import { LightenDarkenColor } from "../../utils/lightenDarkenColor";
import { API } from "../../app/services/ApiService";
import Loader from "../Loader/Loader";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const UsersProfileComponent = () => {
  const { login } = useParams();

  const {
    data: user,
    isLoading: isUsersLoading,
    isError: isUsersError,
  } = API.useGetGithubUserQuery({ userLogin: login || "" });
  const {
    data: repos,
    isLoading: isReposLoading,
    isError: isReposError,
  } = API.useGetRepositoriesQuery({ userLogin: login || "" });

  const location = useLocation();
  const currentColor = location.state?.data;
  const lightBG = LightenDarkenColor(currentColor, 50);

  if (isUsersLoading) {
    return <Loader />;
  }

  if (isUsersError || !user) {
    return <ErrorComponent />;
  }

  const followersQuantity = getPlural(user.followers);
  const followersText = followersQuantity == "one" ? "follower" : "followers";

  const subscribersQuantity = getPlural(user.following);
  const subscribersText =
    subscribersQuantity == "one" ? "subscriber" : "subscribers";

  return (
    <div
      className="user-profile"
      style={{ "--background-color": currentColor } as CSSProperties}
    >
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
            {user.blog && (
              <small className="user-profile__data">
                <a
                  href={user.blog}
                  target="_blank"
                  rel="noreferrer"
                  className="user-profile__data--link crop-line"
                >
                  {user.blog}
                </a>
              </small>
            )}
          </div>
        </div>
      </div>

      <div
        className="user-profile__repositories"
        style={{ backgroundColor: lightBG }}
      >
        {isReposLoading && <Loader />}
        {isReposError && <ErrorComponent />}
        {repos && (
          <RepositoriesList
            repositories={repos}
            repositoriesUrl={user.html_url}
          />
        )}
      </div>
    </div>
  );
};

export default UsersProfileComponent;
