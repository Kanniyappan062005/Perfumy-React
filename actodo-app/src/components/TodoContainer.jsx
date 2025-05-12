import { useState } from "react";
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

function TodoContainer() {

    const [todoListArr, setTodoListArr] = useState([
        {
            activity:"Go for a walk"
        },
        {
            activity:"Have Breakfast"
        },
        {
            activity:"Take a Shower"
        },
    ])

    return (
        <div className="my-8 md:flex">
            <TodoForm todoListArr={todoListArr} setTodoListArr={setTodoListArr} activity={todoListArr.activity} />
            <TodoList todoListArr={todoListArr} setTodoListArr={setTodoListArr} activity={todoListArr.activity} />
        </div>
    )
}

export default TodoContainer