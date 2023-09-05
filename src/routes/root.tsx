import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import WelcomePage from "../components/WelcomePage/WelcomePage";

export default function Root() {
  return (
    <>
      {/* <Header />
      <Outlet /> */}
      <WelcomePage />
    </>
  );
}
