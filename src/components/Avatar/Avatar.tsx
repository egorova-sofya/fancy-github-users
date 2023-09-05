import { FC } from "react";
import "./Avatar.css";
//TODO delete later
import avatar from "./../../assets/images/avatar.jpg";

interface Props {
  imageUrl?: string;
  size?: "small" | "medium" | "large";
}
const Avatar: FC<Props> = ({ imageUrl, size }) => {
  return (
    <div>
      <img
        className="avatar"
        src={avatar}
        alt="user's avatar"
        height={80}
        width={80}
      />
    </div>
  );
};

export default Avatar;
