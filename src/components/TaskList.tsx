import type { TaskItemType } from "../context/TaskProvider";
import TaskItem from "./TaskItem";
import { LuNotepadText } from "react-icons/lu";

type PropsType = {
  tasks: TaskItemType[];
  setIsCreateTaskOpen: (b: boolean) => void;
};

const TaskList = ({ tasks, setIsCreateTaskOpen }: PropsType) => {
  const taskList = (
    <ul className="flex flex-col gap-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );

  const emptyPlaceholder = (
    <div className="bg-bg-surface flex flex-col items-center py-8 gap-4 rounded-xl border border-border-default border-dashed">
      <LuNotepadText className="bg-badge-low-bg text-badge-low-text h-10 w-10 p-2 rounded-xl" />
      <div className="flex flex-col items-center">
        <p className="font-bold">Nothing here yet</p>
        <p className="text-text-muted text-[0.9rem]">
          A fresh start. Add a task whenever your'e ready
        </p>
      </div>
      <button
        className="bg-primary text-text-on-primary hover:bg-primary-hover cursor-pointer px-3 py-1.5 rounded-[10px]"
        onClick={() => setIsCreateTaskOpen(true)}
      >
        + Create Task
      </button>
    </div>
  );

  return tasks.length > 0 ? taskList : emptyPlaceholder;
};

export default TaskList;
