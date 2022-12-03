import { Outlet } from "react-router-dom";
import { Header } from "./components/page/Header";

export const PageFrame = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
