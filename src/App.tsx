import { useState } from "react";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router";
import Tasks from "./pages/Tasks";
import { TaskProvider } from "./context/TaskProvider";
function App() {
  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const tasks = (
    <Tasks
      setIsCreateTaskOpen={setIsCreateTaskOpen}
      isCreateTaskOpen={isCreateTaskOpen}
      searchText={searchText}
    />
  );
  return (
    <>
      <TaskProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                searchText={searchText}
                setIsCreateTaskOpen={setIsCreateTaskOpen}
                setSearchText={setSearchText}
              />
            }
          >
            <Route index element={tasks} />
            <Route path="pending" element={tasks} />
            <Route path="completed" element={tasks} />
          </Route>
        </Routes>
      </TaskProvider>
    </>
  );
}

export default App;
