import { LuTrash2 } from "react-icons/lu";
import SecondaryNavLink from "../components/SecondaryNavLink";
import TaskStat from "../components/TaskStat";
import useTask from "../Hooks/useTask";
import CreateTask from "../components/modals/CreateTask";
import TaskList from "../components/TaskList";
import ClearAll from "../components/modals/ClearAll";
import { useState } from "react";
import useFilteredTasks from "../Hooks/useFilteredTasks";

type PropsType = {
  isCreateTaskOpen: boolean;
  setIsCreateTaskOpen: (b: boolean) => void;
  searchText: string;
};

type Status = "high" | "medium" | "low";

const Tasks = ({
  isCreateTaskOpen,
  setIsCreateTaskOpen,
  searchText,
}: PropsType) => {
  const {
    pendingTasks,
    completedTasks,
    totalTasks,
    state: { tasks },
  } = useTask();

  const [isClearAllOpen, setIsClearAllOpen] = useState(false);

  const statusArray: Status[] = ["high", "low", "medium"];

  const { handlePriorityChange, filteredTasks } = useFilteredTasks(
    tasks,
    searchText,
  );

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
      {pendingTasks > 0 && (
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
    <header className="flex justify-between items-end mb-4 flex-wrap gap-2">
      <div>
        <h2 className="text-text-primary font-medium">Your List</h2>
        <p className="text-[0.8rem] text-text-secondary">
          {filteredTasks.length} tasks {searchText.length > 0 && "found"}
        </p>
      </div>
      <div className="flex gap-2 flex-wrap">
        <nav
          className="border border-border-default bg-bg-card-inner rounded-xl p-1 flex gap-3  items-center justify-center "
          aria-label="secondary navigation"
        >
          <SecondaryNavLink to="/" status="All tasks" count={totalTasks} />
          <SecondaryNavLink
            to="/pending"
            status="Pending"
            count={pendingTasks}
          />
          <SecondaryNavLink
            to="/completed"
            status="Completed"
            count={completedTasks}
          />
        </nav>
        <div className="flex gap-2 sm:w-fit">
          <label htmlFor="filterPriority" className="sr-only">
            Filter tasks by priority
          </label>
          <select
            name="filterPriority"
            id="filterPriority"
            className="text-[0.8rem] border border-border-default  p-3 shadow-sm rounded-[10px]"
            onChange={handlePriorityChange}
          >
            <option value="all">All priorities</option>
            {statusArray.map((stat) => (
              <option value={stat} key={`stautu${stat}`}>
                {stat[0].toUpperCase() + stat.slice(1)}
              </option>
            ))}
          </select>
          {filteredTasks.length > 0 && (
            <button
              className="text-danger hover:bg-bg-danger p-2 rounded-[10px] text-nowrap flex items-center gap-2 text-[0.8rem] cursor-pointer"
              onClick={() => setIsClearAllOpen(true)}
            >
              <LuTrash2 /> Clear All
            </button>
          )}
        </div>
      </div>
    </header>
  );

  const mainList = (
    <TaskList tasks={filteredTasks} setIsCreateTaskOpen={setIsCreateTaskOpen} />
  );

  const content = (
    <div className="bg-bg-app min-h-[calc(100%-57px)]">
      <main className="  flex  mx-auto max-w-250 p-6 flex-col gap-8 ">
        {header}
        {taskSatistics}
        <section>
          {listHeader}
          {mainList}
        </section>
      </main>
      {isCreateTaskOpen && (
        <CreateTask setIsCreateTaskOpen={setIsCreateTaskOpen} />
      )}
      {isClearAllOpen && (
        <ClearAll
          setIsClearAllOpen={setIsClearAllOpen}
          filteredTasks={filteredTasks}
        />
      )}
    </div>
  );

  return content;
};

export default Tasks;
