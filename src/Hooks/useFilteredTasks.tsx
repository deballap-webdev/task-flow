import { useLocation, useSearchParams } from "react-router";
import type { TaskItemType } from "../context/TaskProvider";

const useFilteredTasks = (tasks: TaskItemType[], searchText: string = "") => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const priorityQuery = searchParams.get("priority") || "all";

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSearchParams((prev) => {
      if (value === "all") {
        prev.delete("priority");
      } else {
        prev.set("priority", value);
      }
      return prev;
    });
  };

  const filteredTasks = tasks.filter((task) => {
    const statusLookUp = {
      "/pending": task.status === "pending",
      "/completed": task.status === "completed",
      "/": true,
    };

    const matchesStatus =
      statusLookUp[location.pathname as keyof typeof statusLookUp];

    const matchesPriority =
      priorityQuery === "all" ? true : task.priority === priorityQuery;

    const matchesSearchText =
      task.description?.toLowerCase().includes(searchText.toLowerCase()) ||
      task.title.toLowerCase().includes(searchText.toLowerCase());

    return matchesStatus && matchesPriority && matchesSearchText;
  });

  return {
    searchParams,
    handlePriorityChange,
    filteredTasks,
  };
};

export default useFilteredTasks;
