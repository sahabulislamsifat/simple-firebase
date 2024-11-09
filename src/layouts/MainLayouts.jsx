import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayouts = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayouts;
