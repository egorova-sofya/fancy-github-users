import "./UserCard.css";
import Avatar from "../Avatar/Avatar";
import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { IUser } from "../../app/types";
import { getPlural } from "../../utils/getPlural";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  user: IUser;
}

const UserCard: FC<Props> = ({ user, className, ...props }) => {
  const [currentBGColor, setCurrentBGColor] = useState("");
  const repositoryQuantity = getPlural(user.public_repos);
  const repositoryText =
    repositoryQuantity == "one" ? "repository" : "repositories";

  const myElementRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (myElementRef.current) {
      const computedStyle = window.getComputedStyle(myElementRef.current);
      setCurrentBGColor(computedStyle.getPropertyValue("--background-color"));
    }
  }, []);

  return (
    <div ref={myElementRef} {...props} className={cn("user-card", className)}>
      <Link
        to={`/users/${user.login}`}
        state={{ data: currentBGColor }}
        className="user-card__link"
      >
        <Avatar userName={user.login} imageUrl={user.avatar_url} />
        <div className="user-card__info">
          <p className="user-card__name crop-line">{user.login}</p>
          <div className="user-card__wrapper">
            <p className="user-card__description crop-line">{user.company}</p>
            <p className="user-card__description crop-line">
              {user.public_repos} {repositoryText}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserCard;
