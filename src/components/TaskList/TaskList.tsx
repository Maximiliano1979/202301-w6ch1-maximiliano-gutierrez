import Task from "../Task/Task";

const TaskList = (): JSX.Element => {
  const tasks = [
    {
      id: 1,
      name: "Doctor",
      isDone: false,
    },
    {
      id: 2,
      name: "Mechanic",
      isDone: false,
    },
    {
      id: 3,
      name: "Pubs",
      isDone: false,
    },
  ];
  return (
    <ul>
      {tasks.map((task) => (
        <li>
          <Task todo={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
