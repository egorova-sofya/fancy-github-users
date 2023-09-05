import "./UserCard.css";
import Avatar from "../Avatar/Avatar";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const UserCard: FC<Props> = ({ className, ...props }) => {
  return (
    <div {...props} className={cn("user-card", className)}>
      <Link to="/users/1" className="user-card__link">
        <Avatar />
        <div className="user-card__info">
          <p className="user-card__name">Naomi Willms</p>
          <div className="user-card__wrapper">
            <p className="user-card__description">Name of the organization</p>
            <p className="user-card__description">9 repositories</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserCard;
