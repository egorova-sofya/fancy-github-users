import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import "./Avatar.css";
import cn from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imageUrl: string;
  size?: "medium" | "large";
  userName: string;
}
const Avatar: FC<Props> = ({
  imageUrl,
  size = "medium",
  userName,
  className,
}) => {
  const sizesStyles = {
    ["avatar--medium"]: size == "medium",
    ["avatar--large"]: size == "large",
  };

  return (
    <>
      <div>
        <LazyLoadImage
          className={cn("avatar", sizesStyles, className)}
          src={imageUrl}
          alt={`${userName}'s avatar`}
          effect="opacity"
          placeholder={
            <div className={cn("avatar__placeholder", sizesStyles, className)}>
              {userName[0]}
            </div>
          }
        />
      </div>
    </>
  );
};

export default Avatar;
