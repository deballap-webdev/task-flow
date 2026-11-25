const CreateTask = () => {
  return (
    <form>
      <h2>Create a task</h2>
      <p>Add a new task to your list.</p>

      <label htmlFor="taskTitle">Title</label>
      <input
        type="text"
        id="taskTitle"
        placeholder="What needs to get done?"
        className="placeholder:text-text-muted"
      />

      <label htmlFor="taskDesc">
        Description <span>Optional</span>
      </label>
      <input type="text" id="taskDesc" />

      <label htmlFor=""></label>
    </form>
  );
};

export default CreateTask;
