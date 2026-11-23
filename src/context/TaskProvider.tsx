import { createContext, type ReactElement, useMemo, useReducer } from "react";

export type TaskItemType = {
  title: string;
  description?: string;
  timeStamp: number;
  id: string;
  status: "pending" | "completed";
  priority: "low" | "medium" | "high";
};

export type TaskStateType = {
  tasks: TaskItemType[];
};

/* const initTaskItem: TaskItemType = {
  title: "",
  description: "",
  timeStamp: 0,
  id: "",
  status: "pending",
  priority: "medium",
};
 */
const initTaskState: TaskStateType = {
  tasks: [],
};

const REDUCER_ACTION_TYPE = {
  EDIT: "EDIT",
  DELETE: "DELETE",
  TGCHECK: "TGCHECK",
  CREATE: "CREATE",
};

type ReducerActionType = typeof REDUCER_ACTION_TYPE;

type ReducerAction = {
  type: keyof ReducerActionType;
  payload?: TaskItemType;
};

const reducer = (
  state: TaskStateType,
  action: ReducerAction,
): TaskStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.DELETE: {
      if (!action.payload)
        throw new Error("No action.payload at DELETE action");
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload?.id),
      };
    }

    case REDUCER_ACTION_TYPE.CREATE: {
      if (!action.payload)
        throw new Error("No action.payload at CREATE action");
      return { ...state, tasks: [...state.tasks, action.payload] };
    }

    case REDUCER_ACTION_TYPE.EDIT: {
      if (!action.payload) throw new Error("No action.payload at EDIT action");
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload?.id ? action.payload : task,
        ),
      };
    }

    case REDUCER_ACTION_TYPE.TGCHECK: {
      if (!action.payload)
        throw new Error("No action.payload at TGCHECK action");
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload?.id) {
            const newStatus =
              task.status === "pending" ? "completed" : "pending";
            return { ...task, status: newStatus };
          }
          return task;
        }),
      };
    }

    default:
      throw new Error("action does not exist in ReducerActionType");
  }
};

const useTaskContext = (initTaskState: TaskStateType) => {
  const [state, dispatch] = useReducer(reducer, initTaskState);
  const pendingTasks: number = state.tasks.reduce(
    (accum, task) => (task.status === "pending" ? accum + 1 : accum),
    0,
  );

  const completedTasks: number = state.tasks.reduce(
    (accum, task) => (task.status === "completed" ? accum + 1 : accum),
    0,
  );

  const REDUCER_ACTION = useMemo(() => REDUCER_ACTION_TYPE, []);

  const totalTasks: number = pendingTasks + completedTasks;

  return {
    state,
    dispatch,
    pendingTasks,
    completedTasks,
    totalTasks,
    REDUCER_ACTION,
  };
};

export type UseTaskContextType = ReturnType<typeof useTaskContext>;

const initTaskContext: UseTaskContextType = {
  dispatch: () => {},
  state: initTaskState,
  pendingTasks: 0,
  completedTasks: 0,
  totalTasks: 0,
  REDUCER_ACTION: REDUCER_ACTION_TYPE,
};
const TaskContext = createContext<UseTaskContextType>(initTaskContext);

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const TaskProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <TaskContext value={useTaskContext(initTaskState)}>{children}</TaskContext>
  );
};

export default TaskContext;
