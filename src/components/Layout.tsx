import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router";

type PropsType = {
  setIsCreateTaskOpen: (b: boolean) => void;
  setSearchText: (b: string) => void;
  searchText: string;
};

const Layout = ({
  setIsCreateTaskOpen,
  setSearchText,
  searchText,
}: PropsType) => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full flex-col">
        <Header
          searchText={searchText}
          setIsCreateTaskOpen={setIsCreateTaskOpen}
          setSearchText={setSearchText}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
