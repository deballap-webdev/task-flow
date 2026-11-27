import { LuX } from "react-icons/lu";
type PropsType = {
  onClick: () => void;
};

const Xbutton = ({ onClick }: PropsType) => {
  return (
    <button
      className=" hover:text-primary hover:bg-primary-subtle  focus:outline-1 focus:outline-primary p-2 rounded-md h-8 w-8"
      onClick={onClick}
      title="Close Modal"
    >
      <LuX />
    </button>
  );
};

export default Xbutton;
