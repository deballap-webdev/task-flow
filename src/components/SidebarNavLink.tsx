import type { ReactElement } from "react";
import type { IconType } from "react-icons";
import { LuCircleCheck, LuCircleDashed, LuListTodo } from "react-icons/lu";
import { NavLink } from "react-router";

type Status = "All tasks" | "Pending" | "Completed";

type PropsType = {
  children: { text: Status; number: number };
};

type Icons = Record<Status, ReactElement<IconType>>;

const SidebarNavLink = ({ children }: PropsType): ReactElement => {
  const to: string =
    children.text === "All tasks" ? "/*" : `/${children.text.toLowerCase()}`;

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
        {icons[children.text]}
        <p className="text-[0.8rem]">{children.text}</p>
      </div>
      <div className="number px-3 rounded-[10px] ">{children.number}</div>
    </NavLink>
  );

  return content;
};

export default SidebarNavLink;
