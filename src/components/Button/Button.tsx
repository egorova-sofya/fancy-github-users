import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import "./Button.css";
import cn from "classnames";

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  size?: "medium" | "large";
}

const Button: FC<Props> = ({
  className,
  children,
  size = "medium",
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn("button", className, {
        ["button--medium"]: size == "medium",
        ["button--large"]: size == "large",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
