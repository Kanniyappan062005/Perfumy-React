import { useState } from "react";

function TodoForm(props) {

    const todoListArr = props.todoListArr;
    const setTodoListArr = props.setTodoListArr
    const [inputValue, setInputValue] = useState("");

    const handleInput = (evt) => {
        setInputValue(evt.target.value);
    }

    const handleAddItem = () => {
        if (inputValue !== "") {
            const updateTodoListArr = {activity: inputValue };
            setTodoListArr([...todoListArr, updateTodoListArr]);
            setInputValue("")
        }
    }

    return (
        <div className="flex flex-col gap-5 my-5 md:w-[27%] items-center">
            <h1 className="font-medium text-2xl">Manage Activities</h1>
            <div>
                <input type="text" onChange={handleInput} value={inputValue} placeholder="Enter Your Activity?" className="border border-black p-2 bg-transparent focus:outline-none" />
                <button onClick={handleAddItem} className="bg-black text-white p-2 border border-black">Add</button>
            </div>
        </div>
    )
}

export default TodoForm