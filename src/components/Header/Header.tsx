import { FC, FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import searchIcon from "./../../assets/images/search-icon.svg";

export const Header: FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const location = useLocation() as unknown as LocationProps;
  const navigate = useNavigate();

  type LocationProps = {
    pathname: string;
    state: string;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!searchValue.trim().length) {
      return;
    }
    navigate(`../search?query=${searchValue}`, { state: searchValue });
  };

  return (
    <header className="header">
      <div className="container header__container">
        <nav className="header__navigation">
          <a
            href="/"
            onClick={(event) =>
              location.pathname === "/users" && event.preventDefault()
            }
            className="header__logo"
          >
            Github users
          </a>
        </nav>

        <div className="header__search">
          <form className="header__search-form" onSubmit={onSubmit}>
            <Input
              name="search"
              icon={<img src={searchIcon} alt="Search Icon" />}
            />

            <Button>Find</Button>
          </form>
        </div>
      </div>
    </header>
  );
};
