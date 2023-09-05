import { ComponentProps, ElementType, ReactNode } from "react";
import "./Button.css";
import cn from "classnames";

type Props<E extends ElementType = ElementType> = {
  children: ReactNode;
  appearance?: "primary" | "secondary";
  size?: "medium" | "large";
  as?: E;
};

type ButtonProps<E extends ElementType> = Props<E> &
  Omit<ComponentProps<E>, keyof Props>;

const defaultElement = "button";

function Button<E extends ElementType = typeof defaultElement>({
  className,
  children,
  size = "medium",
  appearance = "primary",
  as,
  ...props
}: ButtonProps<E>) {
  const TagName = as || defaultElement;
  return (
    <TagName
      className={cn("button", className, {
        ["button--medium"]: size == "medium",
        ["button--large"]: size == "large",
        ["button--primary"]: appearance == "primary",
        ["button--secondary"]: appearance == "secondary",
      })}
      {...props}
    >
      {children}
    </TagName>
  );
}

export default Button;
