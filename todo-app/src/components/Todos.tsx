import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

const Todos = () => {
    return (
        <div>
            <TodoHeader ></TodoHeader>
            <TodoInput></TodoInput>
            <TodoList/>
            <TodoFooter/>
        </div>
    );
};

export default Todos;