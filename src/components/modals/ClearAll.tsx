import useTask from "../../Hooks/useTask";
import Xbutton from "./Xbutton";

type PropsType = {
  setIsClearAllOpen: (b: boolean) => void;
};

const ClearAll = ({ setIsClearAllOpen }: PropsType) => {
  const { dispatch, REDUCER_ACTION } = useTask();
  const onClear = () => {
    dispatch({ type: REDUCER_ACTION.CLEAR });
    setIsClearAllOpen(false);
  };
  return (
    <div className="fixed overflow-y-auto inset-0 items-center justify-center flex z-30 backrop-blur-sm bg-bg-overlay">
      <div className="bg-bg-surface p-6 w-[clamp(250px,50vw,480px)] rounded-xl flex flex-col gap-5">
        <div className="flex justify-between">
          <div>
            <h3 className="text-[1.2rem] font-bold">Clear all tasks?</h3>
            <p className="text-text-muted ">This action cannot be undone</p>
          </div>
          <Xbutton onClick={() => setIsClearAllOpen(false)} />
        </div>
        <hr className="text-text-muted shadow-md border-border-default" />
        <div className="flex gap-2 self-end w-fit">
          <button
            className="focus:outline focus:outline-primary border border-border-default px-3 py-1.5 rounded-[10px] shadow-sm bg-bg-surface hover:brightness-96 hover:filter cursor-pointer"
            onClick={() => setIsClearAllOpen(false)}
          >
            Cancel
          </button>
          <button
            className="text-text-on-primary bg-danger hover:bg-danger-hover px-3 py-1.5 rounded-[10px] focus:outline-1 focus:outline-primary cursor-pointer"
            onClick={onClear}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClearAll;
