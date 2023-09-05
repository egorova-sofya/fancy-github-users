import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-page__header">
        <h1 className="welcome-page__title">Find GitHub users</h1>
        <Button
          as={Link}
          to={"/users"}
          className="welcome-page__button"
          size="large"
        >
          Get started
        </Button>
      </div>
    </div>
  );
};

export default WelcomePage;
