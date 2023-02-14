import { TodoStructure } from "../../types";

interface TaskProps {
  todo: TodoStructure;
}

const Task = ({ todo: { name } }: TaskProps): JSX.Element => {
  return (
    <article>
      <h3>{name}</h3>
      <button>delete</button>
    </article>
  );
};

export default Task;
