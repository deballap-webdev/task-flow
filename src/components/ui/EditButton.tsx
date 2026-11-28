import { LuPencil } from "react-icons/lu";

type PropsType = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const EditButton = ({ onClick }: PropsType) => {
  return (
    <button
      className="text-text-secondary focus:outline-1 focus:outline-primary  hover:text-badge-low-text p-2 rounded-md cursor-pointer hover:bg-badge-low-bg h-fit"
      title="Edit task"
      onClick={onClick}
    >
      <LuPencil />
    </button>
  );
};

export default EditButton;
