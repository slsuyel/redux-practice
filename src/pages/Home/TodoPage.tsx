import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const TodoPage = () => {
  return (
    <Container>
      <h1 className="text-center font-semibold text-3xl my-10">My Todos</h1>
      <TodoContainer />
    </Container>
  );
};

export default TodoPage;
