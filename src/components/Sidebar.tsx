import { LuCheck, LuNotepadText } from "react-icons/lu";
import useTask from "../Hooks/useTask";
import SidebarNavLink from "./SidebarNavLink";

const NavBar = () => {
  const { pendingTasks, completedTasks, totalTasks } = useTask();

  const header = (
    <header className={" flex items-center gap-2"}>
      <LuNotepadText
        className={
          "text-2xl rounded-2xl w-10 h-10 px-2 py-1 bg-primary text-text-on-primary"
        }
      />
      <div>
        <p className={"text-text-primary font-medium"}>TaskFlow</p>
        <p className={"text-[0.8rem] text-text-secondary"}>
          Personal workspace
        </p>
      </div>
    </header>
  );

  const nav = (
    <nav className="flex flex-col gap-1">
      <p className="text-[0.8rem] text-text-muted font-medium mb-2">
        WORKSPACE
      </p>
      <SidebarNavLink>
        {{ text: "All tasks", number: totalTasks }}
      </SidebarNavLink>
      <SidebarNavLink>
        {{ text: "Pending", number: pendingTasks }}
      </SidebarNavLink>
      <SidebarNavLink>
        {{ text: "Completed", number: completedTasks }}
      </SidebarNavLink>
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

  return (
    <aside className="flex flex-col justify-between min-h-screen p-4 border-r border-border-default w-fit gap-5">
      <div className="flex flex-col gap-10">
        {header}
        {nav}
      </div>
      {footer}
    </aside>
  );
};

export default NavBar;
