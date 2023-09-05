import { FC, SVGProps } from "react";
import "./Input.css";

interface Props {
  icon?: SVGProps<SVGElement>;
  name: string;
}

const Input: FC<Props> = ({ icon, name }) => {
  return (
    <div className="input__wrapper">
      {icon && (
        <div className="input__icon">
          <>{icon}</>
        </div>
      )}
      <input
        type="text"
        className="input"
        placeholder="Search"
        name={name}
        style={icon ? { paddingLeft: "56px" } : {}}
        //   value={searchValue}
        //   onChange={(event) => setSearchValue(event.currentTarget.value)}
      />
    </div>
  );
};

export default Input;
