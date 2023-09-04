import { FC, FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

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
              location.pathname === "/" && event.preventDefault()
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
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="angle-left"
                >
                  <path
                    fill="#6563FF"
                    d="M11.29,12l3.54-3.54a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L9.17,11.29a1,1,0,0,0,0,1.42L13.41,17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41Z"
                  ></path>
                </svg>
              }
            />

            <Button>Find</Button>
          </form>
        </div>
      </div>
    </header>
  );
};
