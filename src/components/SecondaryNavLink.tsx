import { NavLink } from "react-router";

type Status = "All tasks" | "Pending" | "Completed";

type PropsType = {
  status: Status;
  count: number;
  to: string;
};

const SecondaryNavLink = ({ status, count, to }: PropsType) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-[0.8rem] font-medium p-2 rounded-[10px] ${isActive ? "bg-text-on-primary text-primary" : "text-text-secondary hover:bg-bg-subtle"} focus:outline-1 focus:outline-primary `
      }
    >{`${status} ${count}`}</NavLink>
  );
};

export default SecondaryNavLink;
