import Layout from "./components/Layout";
import { Route, Routes } from "react-router";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Tasks tasks={""} />} />
          <Route path="pending" element={<Tasks tasks={""} />} />
          <Route path="completed" element={<Tasks tasks={""} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
