import { LuNotepadText } from "react-icons/lu";
import SecondaryNavLink from "../components/SecondaryNavLink";
import TaskStat from "../components/TaskStat";
import useTask from "../Hooks/useTask";
import CreateTask from "../modals/CreateTask";
import TaskList from "../components/TaskList";

type PropsType = {
  isCreateTaskOpen: boolean;
  setIsCreateTaskOpen: (b: boolean) => void;
};

const Tasks = ({ isCreateTaskOpen, setIsCreateTaskOpen }: PropsType) => {
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
    <header className="flex justify-between items-end mb-4">
      <div>
        <h2 className="text-text-primary font-medium">Your List</h2>
        <p className="text-[0.8rem] text-text-secondary">{totalTasks} tasks</p>
      </div>
      <nav
        className="border border-border-default bg-bg-card-inner rounded-xl p-1 flex gap-3  "
        aria-label="secondary navigation"
      >
        <SecondaryNavLink to="/" status="All tasks" count={totalTasks} />
        <SecondaryNavLink to="/pending" status="Pending" count={pendingTasks} />
        <SecondaryNavLink
          to="/completed"
          status="Completed"
          count={completedTasks}
        />
      </nav>
      <select name="" id="">
        <option value="all priorities">All priorities</option>
        {}
      </select>
    </header>
  );

  const mainList = <TaskList />;

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

  const content = (
    <div className="bg-bg-app min-h-[calc(100%-54px)]">
      <main className="  flex  mx-auto max-w-250 p-6 flex-col gap-8">
        {header}
        {taskSatistics}
        <section>
          {listHeader}
          {totalTasks > 0 ? mainList : emptyPlaceholder}
        </section>
      </main>
      {isCreateTaskOpen && (
        <CreateTask setIsCreateTaskOpen={setIsCreateTaskOpen} />
      )}
    </div>
  );

  return content;
};

export default Tasks;
