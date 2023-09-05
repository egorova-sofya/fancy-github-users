import Button from "../Button/Button";
import "./ErrorPage.css";
import oopsImage from "./../../assets/images/Oops!.svg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className=" error-page__container">
        <img src={oopsImage} width={307} height={125} />
        <p className="error-page__description">
          Sorry, an unexpected error has occurred.
        </p>
      </div>
      <Button as={Link} to={"/users"}>
        Back to homepage
      </Button>
    </div>
  );
};

export default ErrorPage;
