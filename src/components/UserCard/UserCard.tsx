import "./UserCard.css";
import Avatar from "../Avatar/Avatar";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { IUser } from "../../app/types";
import { getPlural } from "../../utils/getPlural";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  user: IUser;
}

const UserCard: FC<Props> = ({ user, className, ...props }) => {
  const repositoryQuantity = getPlural(user.public_repos);
  const repositoryText =
    repositoryQuantity == "one" ? "repository" : "repositories";

  return (
    <div {...props} className={cn("user-card", className)}>
      <Link to={`/users/${user.id}`} className="user-card__link">
        <Avatar imageUrl={user.avatar_url} />
        <div className="user-card__info">
          <p className="user-card__name">{user.login}</p>
          <div className="user-card__wrapper">
            <p className="user-card__description">{user.company}</p>
            <p className="user-card__description">
              {repositoryQuantity} {repositoryText}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserCard;
