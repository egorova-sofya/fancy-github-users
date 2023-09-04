import React, { FC, ReactNode } from 'react';
import './Button.css';

interface Props {
  children: ReactNode;
}

const Button: FC<Props> = ({ children }) => {
  return <div className="button">{children}</div>;
};

export default Button;
