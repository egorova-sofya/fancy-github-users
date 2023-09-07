import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";
import "./Avatar.css";
import cn from "classnames";
interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imageUrl: string;
  size?: "medium" | "large";
}
const Avatar: FC<Props> = ({ imageUrl, size = "medium", className }) => {
  const [isImageExist, setIsImageExist] = useState(false);

  const img = new Image();
  img.src = imageUrl;
  img.onload = function () {
    setIsImageExist(true);
  };
  img.onerror = function () {
    setIsImageExist(false);
  };

  const sizesStyles = {
    ["avatar--medium"]: size == "medium",
    ["avatar--large"]: size == "large",
  };

  return (
    <>
      {isImageExist ? (
        <img
          className={cn("avatar", sizesStyles, className)}
          src={imageUrl}
          alt="user's avatar"
          height={80}
          width={80}
        />
      ) : (
        <div className={cn("avatar__placeholder", sizesStyles, className)}>
          N
        </div>
      )}
    </>
  );
};

export default Avatar;
