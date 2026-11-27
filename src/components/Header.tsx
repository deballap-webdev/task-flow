import { LuSearch, LuPlus } from "react-icons/lu";

type PropsType = {
  setIsCreateTaskOpen: (b: boolean) => void;
  setSearchText: (b: string) => void;
  searchText: string;
};

const Header = ({
  setIsCreateTaskOpen,
  setSearchText,
  searchText,
}: PropsType) => {
  const searchBar = (
    <div className=" bg-bg-card-inner w-2/5 min-w-60 flex items-center rounded-md border-border-default px-3 py-2 border gap-2 focus-within:outline-1 focus-within:outline-border-focus">
      <LuSearch />
      <label htmlFor="searchTasks" className="sr-only">
        Search Tasks
      </label>
      <input
        type="search"
        name="searchText"
        id="searchText"
        placeholder="Search tasks..."
        className="text-[0.8rem] placeholder:text-text-muted w-full focus:outline-none"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );

  const creatTaskBtn = (
    <button
      className="flex items-center gap-1 bg-primary text-text-on-primary px-3 py-1 rounded-[10px] text-[0.8rem] hover:bg-primary-hover hover:cursor-pointer text-nowrap"
      onClick={() => setIsCreateTaskOpen(true)}
    >
      <LuPlus /> Create task
    </button>
  );

  const content = (
    <header className="border-b border-b-border-default py-2 px-4 flex justify-between sticky top-0 z-10 bg-bg-surface flex-wrap gap-2">
      {searchBar}
      {creatTaskBtn}
    </header>
  );

  return content;
};

export default Header;
