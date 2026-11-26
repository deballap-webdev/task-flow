import { useState } from "react";
import { LuX } from "react-icons/lu";

type Priority = "low" | "medium" | "high";

const priorityArray: Priority[] = ["low", "medium", "high"];

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState<Priority>("low");

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
      <LuX className=" hover:text-danger hover:bg-badge-low-bg focus:outline-1 focus:outline-danger " />
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
        Description{" "}
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

            value={prty.toUpperCase()}
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
        className="shadow-sm border-border-default border rounded-[10px] px-3 py-1.5 font-medium text-text-primary cursor-pointer focus:outline-1 focus:outline-primary "
      >
        Cancel
      </button>
      <button
        type="button"
        className="bg-primary text-text-on-primary px-3 py-1.5 rounded-[10px] hover:bg-primary-hover cursor-pointer"
      >
        Create task
      </button>
    </div>
  );

  return (
    <div className=" fixed overflow-y-auto inset-0 items-center justify-center flex z-30 backrop-blur-sm bg-[rgba(15,30,42,0.45)]">
      <form className="bg-bg-surface flex flex-col gap-4 rounded-lg p-4 w-[clamp(250px,50vw,480px)]">
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
