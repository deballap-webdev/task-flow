import useTask from "../Hooks/useTask";
import TaskItem from "./TaskItem";
const TaskList = () => {
  const {
    state: { tasks },
  } = useTask();

  return (
    <ul className="flex flex-col gap-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
