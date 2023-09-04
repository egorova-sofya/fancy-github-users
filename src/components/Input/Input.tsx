import React, { FC, SVGProps } from 'react';
import './Input.css';

interface Props {
  icon?: SVGProps<SVGElement>;
  name: string;
}

const Input: FC<Props> = ({ icon, name }) => {
  return (
    <div className="input__wrapper">
      {icon ?? icon}
      <input
        type="text"
        className="input"
        placeholder="Search"
        name={name}
        //   value={searchValue}
        //   onChange={(event) => setSearchValue(event.currentTarget.value)}
      />
    </div>
  );
};

export default Input;
