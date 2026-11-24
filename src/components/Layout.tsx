import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full flex-col">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
