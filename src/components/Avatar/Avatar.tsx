import { FC } from "react";
import "./Avatar.css";
//TODO delete later
import avatar from "./../../assets/images/avatar.jpg";
import cn from "classnames";

interface Props {
  imageUrl?: string;
  size?: "small" | "medium" | "large";
}
const Avatar: FC<Props> = ({ imageUrl, size = "medium" }) => {
  const sizesStyles = {
    ["avatar--small"]: size == "small",
    ["avatar--medium"]: size == "medium",
    ["avatar--large"]: size == "large",
  };

  return (
    <div>
      {/* <div
        className={cn("avatar__placeholder", sizesStyles)}
      >
        N
      </div> */}
      <img
        className={cn("avatar", sizesStyles)}
        src={avatar}
        alt="user's avatar"
        height={80}
        width={80}
      />
    </div>
  );
};

export default Avatar;
