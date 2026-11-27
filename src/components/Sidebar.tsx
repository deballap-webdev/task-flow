import { LuCheck, LuNotepadText } from "react-icons/lu";
import useTask from "../Hooks/useTask";
import SidebarNavLink from "./SidebarNavLink";
import Xbutton from "./modals/Xbutton";

type PropsType = {
  isNavOpen: boolean;
  setIsNavOpen: (b: boolean) => void;
};

const Sidebar = ({ isNavOpen, setIsNavOpen }: PropsType) => {
  const { pendingTasks, completedTasks, totalTasks } = useTask();

  const header = (
    <header className={"flex justify-between gap-4 items-start"}>
      <div className="flex items-center gap-2">
        <LuNotepadText
          className={
            "text-2xl rounded-2xl w-10 h-10 px-2 py-1 bg-primary text-text-on-primary"
          }
        />
        <div>
          <p className={"text-text-primary font-medium"}>TaskFlow</p>
          <p className={"text-[0.8rem] text-text-secondary text-nowrap"}>
            Personal workspace
          </p>
        </div>
      </div>
      <div className="sm:hidden">
        <Xbutton onClick={() => setIsNavOpen(false)} />
      </div>
    </header>
  );

  const nav = (
    <nav className="flex flex-col gap-1">
      <p className="text-[0.8rem] text-text-muted font-medium mb-2">
        WORKSPACE
      </p>
      <SidebarNavLink status="All tasks" count={totalTasks} to="/" />
      <SidebarNavLink status="Pending" count={pendingTasks} to="/pending" />
      <SidebarNavLink
        status="Completed"
        count={completedTasks}
        to="/completed"
      />
    </nav>
  );

  const footer = (
    <footer className="w-45 bg-bg-card-inner flex flex-col gap-1 rounded-xl p-3 border border-border-default">
      <LuCheck className="text-primary bg-primary-subtle  h-8 w-8 p-2 rounded-md " />
      <p className="font-bold text-[0.8rem]">One thing at a time.</p>
      <p className="text-[0.7rem] text-text-secondary">
        keep your priorities close and make room for good work.
      </p>
    </footer>
  );

  const content = (
    <>
      {isNavOpen && (
        <div className="fixed top-0 inset-0 backdrop-blur-sm z-20 bg-bg-overlay w-screen min-h-screen" />
      )}
      <aside
        aria-label="Sidebar Navigation"
        className={`sm:flex sm:sticky ${isNavOpen ? "flex" : "hidden"} flex-col  justify-between min-h-fit h-screen fixed left-0 top-0 p-4 border-r  bg-bg-surface border-border-default w-fit gap-5 z-25`}
      >
        <div className="flex flex-col  gap-10">
          {header}
          {nav}
        </div>
        {footer}
      </aside>
    </>
  );

  return content;
};

export default Sidebar;
