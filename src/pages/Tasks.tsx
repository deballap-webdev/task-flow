import TaskStat from "../components/TaskStat";
import useTask from "../Hooks/useTask";

const Tasks = ({ tasks }) => {
  const { pendingTasks, completedTasks, totalTasks } = useTask();

  const header = (
    <div className="flex justify-between items-end">
      <div>
        <p className="text-primary text-[0.8rem] font-bold">Workspace</p>
        <h2 className="text-text-primary font-medium text-[1.2rem]">
          My tasks
        </h2>
        <p className="text-text-muted text-[0.8rem]">
          A little Progress goes a long way
        </p>
      </div>
      {pendingTasks === 0 && (
        <p className="text-[0.8rem] text-text-muted">
          <span className="rounded-[50%] w-2 h-2 bg-primary inline-block mr-1"></span>
          {pendingTasks} task(s) in progress
        </p>
      )}
    </div>
  );

  const taskSatistics = (
    <div className="flex-row flex flex-wrap gap-3">
      <TaskStat
        status="All"
        count={totalTasks}
        styles="bg-primary-subtle text-primary"
      />
      <TaskStat
        status="Pending"
        count={pendingTasks}
        styles="bg-primary-subtle text-primary"
      />
      <TaskStat
        status="Completed"
        count={completedTasks}
        styles="bg- text-primary"
      />
    </div>
  );

  const listHeader = (
    <div>
      <h2>Your List</h2>
      <p>6 tasks</p>
    </div>
  );

  const content = (
    <div className="bg-bg-app">
      <main className=" min-h-screen flex  mx-auto max-w-250 p-6 flex-col gap-4">
        {header}
        {taskSatistics}
        {listHeader}
      </main>
    </div>
  );
  return content;
};

export default Tasks;
