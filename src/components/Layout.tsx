import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router";
import { useState } from "react";

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
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex flex-row">
      <Sidebar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <div className="w-full flex-col">
        <Header
          searchText={searchText}
          setIsCreateTaskOpen={setIsCreateTaskOpen}
          setSearchText={setSearchText}
          setIsNavOpen={setIsNavOpen}
          isNavOpen={isNavOpen}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
