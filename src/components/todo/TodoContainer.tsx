import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <h1>This is TodoContainer page</h1>

      <div className=" flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>

      <div className="bg-purple-400 w-full h-full rounded-xl p-1">
        <div className="space-y-3 p-5 bg-white rounded-md">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>

        {/* <div className="bg-white p-5 text-2xl font-semibold rounded-md flex justify-center ">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
