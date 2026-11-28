import {
  LuCalendarDays,
  LuCheck,
  LuCircleCheck,
  LuCircleDashed,
  LuPencil,
  LuTrash2,
} from "react-icons/lu";
import type { TaskItemType } from "../../context/TaskProvider";
import { format } from "date-fns";
import PriorityBadge from "../ui/PriorityBadge";
import useTask from "../../Hooks/useTask";
import Xbutton from "./Xbutton";

type PropsType = {
  task: TaskItemType;
  setIsEditOpen: (b: boolean) => void;
  setIsFullItemOpen: (b: boolean) => void;
};

const FullTaskItem = ({
  task,
  setIsEditOpen,
  setIsFullItemOpen,
}: PropsType) => {
  const { dispatch, REDUCER_ACTION } = useTask();

  const toggleStatus = () =>
    dispatch({ type: REDUCER_ACTION.TGSTATUS, payload: task });

  const statusBadge =
    task.status === "completed" ? (
      <div className=" items-center text-[0.9rem] gap-2 bg-badge-low-bg w-fit px-3 text-badge-low-text rounded-[15px] h-fit hidden sm:flex py-1">
        <LuCircleCheck /> Completed
      </div>
    ) : (
      <div className="flex items-center text-[0.9rem] gap-2 bg-badge-medium-bg w-fit px-3 text-badge-medium-text  rounded-[15px] py-1">
        <LuCircleDashed /> Pending
      </div>
    );

  const actionButtons = (
    <div className="justify-between  flex flex-wrap gap-2">
      <button
        className="flex items-center gap-2 bg-bg-card-inner px-3 py-2 rounded-[10px] font-medium text-text-secondary cursor-pointer hover:filter hover:brightness-98 focus:outline-1 focus:outline-primary"
        onClick={toggleStatus}
      >
        {task.status === "pending" ? (
          <>
            <LuCheck />
            Mark as Completed
          </>
        ) : (
          <>
            <LuCircleDashed />
            Mark as Pending
          </>
        )}
      </button>
      <div className="flex gap-3">
        <button
          className="bg-bg-surface hover:filter hover:brightness-[97.5%] cursor-pointer flex gap-2 items-center shadow-sm border-border-default border text-text-primary px-3 py-2 rounded-[10px] focus:outline focus:outline-primary"
          onClick={() => {
            setIsEditOpen(true);
            setIsFullItemOpen(false);
          }}
        >
          <LuPencil />
          Edit
        </button>
        <button
          className="bg-danger hover:bg-danger-hover flex gap-2 items-center text-text-on-primary px-3 py-2 rounded-[10px] cursor-pointer"
          onClick={() => {
            dispatch({
              type: REDUCER_ACTION.DELETE,
              payload: { id: task.id },
            });
            setIsFullItemOpen(false);
          }}
        >
          <LuTrash2 />
          Delete
        </button>
      </div>
    </div>
  );

  const taskBody = (
    <div className="grid-rows-2 grid-cols-[1fr,3fr] grid gap-4 border-y py-3 border-border-default">
      <div className="row-span-1 col-span-1">
        <p className="font-medium text-text-muted text-[0.8rem] mb-1">
          PRIORITY
        </p>
        <PriorityBadge priority={task.priority} />
      </div>
      <div className="row-span-1 col-span-1">
        <p className="font-medium text-text-muted text-[0.8rem] mb-1">
          CREATED
        </p>
        <div className=" flex  gap-2">
          <LuCalendarDays className="text-text-muted" />
          <p className="text-[0.8rem] text-text-primary">
            {format(task.timeStamp, "EEEE, MMMM d, yyyy 'at' hh:mm aaa ")}
          </p>
        </div>
      </div>
      <div className="row-span-1 col-span-2">
        <p className="font-medium text-text-muted text-[0.8rem] mb-1">
          DESCRIPTION
        </p>
        {task.description ? (
          <p className="text-[0.9rem">{task.description}</p>
        ) : (
          <p className="text-[1.5rem]">--</p>
        )}
      </div>
    </div>
  );

  const taskHeader = (
    <div className="flex justify-between gap-3">
      <h2 className="text-[1.5rem] font-bold text-text-primary">
        {task.title}
      </h2>
      <div className="flex gap-2">
        {statusBadge}
        <Xbutton onClick={() => setIsFullItemOpen(false)} />
      </div>
    </div>
  );

  return (
    <div className="fixed overflow-y-auto  inset-0 items-start justify-center flex z-30 backrop-blur-sm bg-bg-overlay  ">
      <div className="bg-bg-surface my-auto w-[clamp(280px,70vw,600px)] rounded-xl p-3 flex flex-col gap-4">
        {taskHeader}
        {taskBody}
        {actionButtons}
      </div>
    </div>
  );
};

export default FullTaskItem;
