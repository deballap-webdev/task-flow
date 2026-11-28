import { LuTrash2 } from "react-icons/lu";

type PropsType = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const DeleteButton = ({ onClick }: PropsType) => {
  return (
    <button
      className="text-text-secondary hover:text-danger focus:outline-1 focus:outline-danger p-2 h-fit rounded-md cursor-pointer hover:bg-bg-danger"
      title="Delete task"
      onClick={onClick}
    >
      <LuTrash2 />
    </button>
  );
};

export default DeleteButton;
