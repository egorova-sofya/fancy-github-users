import Button from "../Button/Button";
import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-page__header">
        <h1 className="welcome-page__title">Find GitHub users</h1>
        <Button className="welcome-page__button" size="large">
          Get started
        </Button>
      </div>
    </div>
  );
};

export default WelcomePage;
