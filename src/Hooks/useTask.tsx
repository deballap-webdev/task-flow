import { useContext } from "react";
import TaskContext from "../context/TaskProvider";
import { type UseTaskContextType } from "../context/TaskProvider";
const useTask = (): UseTaskContextType => {
  return useContext(TaskContext);
};

export default useTask;
