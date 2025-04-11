import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ todos, user }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo todo={todo} user={user} />
    ))}
  </section>
);
