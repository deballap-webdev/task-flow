import { LuCalendarDays } from "react-icons/lu";
import { type TaskItemType } from "../context/TaskProvider";
import { format } from "date-fns";
import PriorityBadge from "./ui/PriorityBadge";
import EditButton from "./ui/EditButton";
import DeleteButton from "./ui/DeleteButton";
import EditTask from "../modals/EditTask";
import useTask from "../Hooks/useTask";
import { useState } from "react";

type PropsType = {
  task: TaskItemType;
};

const TaskItem = ({ task }: PropsType) => {
  const { dispatch, REDUCER_ACTION } = useTask();

  const onDelete = () =>
    dispatch({ type: REDUCER_ACTION.DELETE, payload: { id: task.id } });

  const onToggle = () =>
    dispatch({ type: REDUCER_ACTION.TGSTATUS, payload: { id: task.id } });

  const isChecked = task.status === "pending" ? false : true;

  const date: string = format(task.timeStamp, "MMM d, yyyy");

  const [isEditTaskOpen, setIsEditTaskOpen] = useState(false);

  const titleAndDesc = (
    <>
      <h3
        className={` font-bold ${isChecked ? "text-text-secondary decoration-1 line-through" : "text-text-primary"} line-clamp-2 `}
      >
        {task.title}
      </h3>
      {task.description?.length !== 0 && (
        <p className="text-text-secondary text-[0.9rem]  line-clamp-2">
          {task.description}
        </p>
      )}
    </>
  );

  const dateAndPriority = (
    <div className="flex gap-3 mt-3">
      <PriorityBadge priority={task.priority} />
      <div className="flex items-center gap-1 text-text-muted text-[0.8rem]">
        <LuCalendarDays />
        <p>{date}</p>
      </div>
    </div>
  );

  const taskActions = (
    <div className="flex gap-0.5">
      <EditButton onClick={() => setIsEditTaskOpen(true)} />
      <DeleteButton onClick={onDelete} />
    </div>
  );

  return (
    <>
      <li
        className="flex gap-3 justify-between bg-bg-surface shadow-sm border border-border-default rounded-xl hover:shadow-md hover:cursor-pointer hover:brightness-[97.5%] index p-6 focus:outline-1 focus:outline-primary"
        tabIndex={0}
      >
        <div className="flex gap-3">
          <input
            type="checkbox"
            checked={isChecked}
            className="border-none w-8 h-8"
            onChange={onToggle}
          />
          <div>
            {titleAndDesc}
            {dateAndPriority}
          </div>
        </div>
        {taskActions}
      </li>
      {isEditTaskOpen && (
        <EditTask task={task} setIsEditTaskOpen={setIsEditTaskOpen} />
      )}
    </>
  );
};

export default TaskItem;
