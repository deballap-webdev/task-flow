import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router";

type PropsType = {
  setIsCreateTaskOpen: (b: boolean) => void;
};

const Layout = ({ setIsCreateTaskOpen }: PropsType) => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full flex-col">
        <Header setIsCreateTaskOpen={setIsCreateTaskOpen} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
