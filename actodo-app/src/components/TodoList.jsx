import TodoItem from "./TodoItem"

function TodoList(props) {

    const todoListArr = props.todoListArr;
    const setTodoListArr = props.setTodoListArr

    return (
        <div className="bg-[#b5a2e9] p-4 rounded-md flex-grow md:w-[65%]">
            <h1 className="text-xl font-medium my-2">Today's Activities</h1>
            {
                todoListArr.length === 0 ? <p>You haven't add Anything Yet!</p>:""
            }
            {
            todoListArr.map((item,index)=>{
                return(
                    <TodoItem todoListArr={todoListArr} setTodoListArr={setTodoListArr} index={index} activity={item.activity} />
                )
            })
        }
        </div>
    )
}

export default TodoList