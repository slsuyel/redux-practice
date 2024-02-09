import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");

  // const { todos } = useAppSelector((state) => state.todos);

  const { data: todos, isLoading, isError } = useGetTodosQuery(priority);

  if (isLoading) {
    return <p>Loading . . .</p>;
  }

  return (
    <div>
      <div className=" flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>

      <div className="bg-purple-400 w-full h-full rounded-xl p-1">
        <div className="space-y-3 p-5 bg-white rounded-md">
          {todos.data.map((todo) => (
            <TodoCard {...todo} />
          ))}
        </div>

        {/* <div className="bg-white p-5 text-2xl font-semibold rounded-md flex justify-center ">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
