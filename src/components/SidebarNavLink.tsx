import type { ReactElement } from "react";
import { LuCircleCheck, LuCircleDashed, LuListTodo } from "react-icons/lu";
import { NavLink } from "react-router";

type Status = "All tasks" | "Pending" | "Completed";

type PropsType = {
  status: Status;
  count: number;
  to: string;
};

type Icons = Record<Status, ReactElement>;

const SidebarNavLink = ({ status, count, to }: PropsType): ReactElement => {
  const icons: Icons = {
    "All tasks": <LuListTodo />,
    Completed: <LuCircleCheck />,
    Pending: <LuCircleDashed />,
  };

  const content = (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center w-45 gap-2 justify-between ${isActive ? "active" : "inactive"} px-2 py-3 rounded-xl `
      }
    >
      <div className="flex items-center gap-2">
        {icons[status]}
        <p className="text-[0.8rem]">{status}</p>
      </div>
      <div className="number px-3 rounded-[10px] ">{count}</div>
    </NavLink>
  );

  return content;
};

export default SidebarNavLink;
