import { createContext, useContext, useReducer, useState } from "react";

const InputContext = createContext(null);
const TaskContext = createContext(null);

export const Provider = ({ children }) =>
    
    {
    const [input, setInput] = useState("")
    const [task, dispatch] = useReducer(
        taskReducer,
        initialTasks)

    return (
        <InputContext.Provider value={[input, setInput]}>
            <TaskContext.Provider value={[task, dispatch]}>
                { children }
            </TaskContext.Provider>
        </InputContext.Provider>
    )
}


const initialTasks = [
    { id: 0, text: "Reading the bible", done: false }
]

function taskReducer(task, action) {
    switch (action) {
        case "added":
            return [
                ...task,
                {
                    id: action.id++,
                    text: action.text,
                    done: false
                }
            ]
        default:
            throw new Error("Error: Unknown task")
    }
}

export const useInputContext = () => useContext(InputContext)
export const useTaskContext = () => useContext(TaskContext)
