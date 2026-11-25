import type { ReactElement } from "react";
import { LuCircleCheck, LuCircleDashed, LuLayers } from "react-icons/lu";

type Status = "All" | "Pending" | "Completed";

type PropsType = {
  status: Status;
  count: number;
  styles: string;
};

type IconLookUpType = Record<Status, ReactElement>;

const TaskStat = ({ status, count, styles }: PropsType) => {
  const staticStyles = "h-10 w-10 p-2 rounded-xl";

  const iconLookup: IconLookUpType = {
    All: <LuLayers className={`${staticStyles} ${styles}`} />,
    Pending: <LuCircleDashed className={`${staticStyles} ${styles}`} />,
    Completed: <LuCircleCheck className={`${staticStyles} ${styles}`} />,
  };

  return (
    <div className="bg-bg-surface border border-border-default rounded-xl px-6 py-4 shadow-md  flex justify-between items-center min-w-50 grow">
      <div className="flex flex-col gap-3">
        <p className="text-text-secondary">{`${status} tasks`}</p>
        <p className="text-text-primary font-bold text-3xl">{count}</p>
      </div>
      {iconLookup[status]}
    </div>
  );
};

export default TaskStat;
