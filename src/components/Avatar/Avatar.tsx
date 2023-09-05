import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import "./Avatar.css";
//TODO delete later
import avatar from "./../../assets/images/avatar.jpg";
import cn from "classnames";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imageUrl?: string;
  size?: "medium" | "large";
}
const Avatar: FC<Props> = ({ imageUrl, size = "medium", className }) => {
  const sizesStyles = {
    ["avatar--medium"]: size == "medium",
    ["avatar--large"]: size == "large",
  };

  return (
    <>
      {/* <div
        className={cn("avatar__placeholder", sizesStyles, className)}
      >
        N
      </div> */}
      <img
        className={cn("avatar", sizesStyles, className)}
        src={avatar}
        alt="user's avatar"
        height={80}
        width={80}
      />
    </>
  );
};

export default Avatar;
