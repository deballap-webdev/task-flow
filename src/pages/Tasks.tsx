import { LuNotepadText } from "react-icons/lu";
import SecondaryNavLink from "../components/SecondaryNavLink";
import TaskItem from "../components/TaskItem";
import TaskStat from "../components/TaskStat";
import useTask from "../Hooks/useTask";
import CreateTask from "../modals/CreateTask";

const Tasks = ({ tasks }) => {
  const { pendingTasks, completedTasks, totalTasks } = useTask();

  const header = (
    <div className="flex justify-between items-end">
      <div>
        <p className="text-primary text-[0.8rem] font-bold">Workspace</p>
        <h2 className="text-text-primary font-medium text-[1.5rem]">
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
        styles="bg-badge-medium-bg text-badge-medium-text"
      />
      <TaskStat
        status="Completed"
        count={completedTasks}
        styles="bg-badge-low-bg text-text-primary"
      />
    </div>
  );

  const listHeader = (
    <header className="flex justify-between items-end">
      <div>
        <h2 className="text-text-primary font-medium">Your List</h2>
        <p className="text-[0.8rem] text-text-secondary">6 tasks</p>
      </div>
      <nav
        className="border border-border-default bg-bg-card-inner rounded-xl p-1 flex gap-3  "
        aria-label="secondary navigation"
      >
        <SecondaryNavLink to="/" status="All tasks" count={totalTasks} />
        <SecondaryNavLink to="/pending" status="Pending" count={pendingTasks} />
        <SecondaryNavLink
          to="/completed"
          status="All tasks"
          count={completedTasks}
        />
      </nav>
    </header>
  );

  const mainList = (
    <ul>
      <TaskItem
        key={21}
        task={{
          title: "Giraffes",
          description:
            "This is a very long title or description that will automatically wrap to a second line and then gracefully cut off with an ellipsis if it exceeds that limit",
          id: "21",
          timeStamp: 390304040,
          status: "pending",
          priority: "medium",
        }}
      />
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
      <button className="bg-primary text-text-on-primary hover:bg-primary-hover cursor-pointer px-3 py-1.5 rounded-[10px]">
        + Create Task
      </button>
    </div>
  );

  const content = (
    <div className="bg-bg-app min-h-[calc(100%-54px)]">
      <main className="  flex  mx-auto max-w-250 p-6 flex-col gap-6">
        {header}
        {taskSatistics}
        {listHeader}
        {emptyPlaceholder}
      </main>
      {/* <CreateTask /> */}
    </div>
  );

  return content;
};

export default Tasks;
