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
  appearance?: "primary" | "secondary";
}

//сделать link
const Button: FC<Props> = ({
  className,
  children,
  size = "medium",
  appearance = "primary",
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn("button", className, {
        ["button--medium"]: size == "medium",
        ["button--large"]: size == "large",
        ["button--primary"]: appearance == "primary",
        ["button--secondary"]: appearance == "secondary",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
