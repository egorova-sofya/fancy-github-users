import { DetailedHTMLProps, FC, HTMLAttributes, SVGProps } from "react";
import cn from "classnames";
import "./Input.css";

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: SVGProps<SVGElement>;
  name: string;
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const Input: FC<Props> = ({
  icon,
  name,
  searchValue,
  setSearchValue,
  className,
  ...props
}) => {
  return (
    <div className={cn("input__wrapper", className)}>
      {icon && (
        <div className="input__icon">
          <>{icon}</>
        </div>
      )}
      <input
        {...props}
        type="text"
        className="input"
        placeholder="Search"
        name={name}
        style={icon ? { paddingLeft: "56px" } : {}}
        value={searchValue}
        onChange={(event) => setSearchValue(event.currentTarget.value)}
      />
    </div>
  );
};

export default Input;
