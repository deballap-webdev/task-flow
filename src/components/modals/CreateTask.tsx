import { useState } from "react";
import { type TaskItemType } from "../../context/TaskProvider";
import useTask from "../../Hooks/useTask";
import Xbutton from "./Xbutton";

type Priority = "low" | "medium" | "high";

const priorityArray: Priority[] = ["low", "medium", "high"];

type PropsType = {
  setIsCreateTaskOpen: (b: boolean) => void;
};

const CreateTask = ({ setIsCreateTaskOpen }: PropsType) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState<Priority>("low");
  const { dispatch, REDUCER_ACTION } = useTask();

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim().length > 80) return;
    const taskItem: TaskItemType = {
      description: desc,
      title: title.trim(),
      priority,
      id: crypto.randomUUID(),
      timeStamp: Date.now(),
      status: "pending",
    };
    dispatch({ type: REDUCER_ACTION.CREATE, payload: taskItem });
    setTitle("");
    setDesc("");
    setIsCreateTaskOpen(false);
  };

  const header = (
    <header className="flex justify-between">
      <div>
        <h2 className="font-bold text-text-primary text-[1.2rem]">
          Create a task
        </h2>
        <p className="text-[0.8rem] text-text-secondary">
          Add a new task to your list.
        </p>
      </div>
      <Xbutton onClick={() => setIsCreateTaskOpen(false)} />
    </header>
  );

  const titleField = (
    <div className="flex flex-col">
      <label htmlFor="taskTitle" className="font-bold text-[0.9rem]">
        Title
      </label>
      <div className="flex flex-col items-end">
        <input
          type="text"
          id="taskTitle"
          placeholder="What needs to get done?"
          className={`${title.length > 80 ? "text-danger" : "text-text-secondary"} input`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <p
          className={` text-[0.8rem] font-medium ${title.length > 80 ? "text-danger" : "text-text-secondary"}`}
        >
          {title.length}/80 {title.length > 80 && <>Max Limit Exceeded!</>}
        </p>
      </div>
    </div>
  );

  const descField = (
    <div>
      <label htmlFor="taskDesc" className="font-bold text-[0.9rem]">
        Description
        <span className="font-normal text-text-muted">{"(optional)"}</span>
      </label>
      <textarea
        id="taskDesc"
        placeholder="Add a few details..."
        className="input"
        rows={4}
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>
    </div>
  );

  const priorityField = (
    <div className="flex flex-col">
      <label htmlFor="taskPriority">Priority</label>
      <select
        name="taskPriority"
        id="taskPriority"
        className="border border-border-default rounded-md px-3 py-2 text-[0.8rem] font-medium text-text-primary focus:outline-1 focus:outline-primary shadow-sm"
        onChange={(e) => setPriority(e.target.value as Priority)}
        value={priority}
      >
        {priorityArray.map((prty: Priority) => (
          <option
            key={prty}

            value={prty}
          >
            {prty[0].toUpperCase() + prty.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );

  const actionBtns = (
    <div className="flex justify-end gap-2">
      <button
        type="button"
        className="shadow-sm border-border-default border rounded-[10px] px-3 py-1.5 font-medium text-text-primary cursor-pointer focus:outline-1 focus:outline-primary bg-bg-surface hover:filter hover:brightness-[97.5%]"
        onClick={() => setIsCreateTaskOpen(false)}
      >
        Cancel
      </button>
      <button
        type="submit"
        className="bg-primary text-text-on-primary px-3 py-1.5 rounded-[10px] hover:bg-primary-hover cursor-pointer"
      >
        Create task
      </button>
    </div>
  );

  return (
    <div className=" fixed overflow-y-auto inset-0 items-start justify-center flex z-30 backrop-blur-sm bg-bg-overlay">
      <form
        className="bg-bg-surface my-auto flex flex-col gap-4 rounded-lg p-4 w-[clamp(250px,50vw,480px)]"
        onSubmit={handleSubmit}
      >
        {header}
        {titleField}
        {descField}
        {priorityField}
        <hr className="text-border-default shadow-md font-medium" />
        {actionBtns}
      </form>
    </div>
  );
};

export default CreateTask;
