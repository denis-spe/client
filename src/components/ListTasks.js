import { useState } from "react"
import { useTaskContext } from "./Provider"

export default function ListTasks() {
    const [task, dispatch] = useTaskContext()
    const [isEditing, setIsEditing] = useState(false)


    return (
        <div>
            {
                task.map(value => {
                    return (
                        <div>
                            <p>{isEditing}</p>
                            { isEditing ? <EditForm /> : <p>{value.text}</p> }
                            <Button label="Edit" onClick={
                                click => { setIsEditing(true) }
                            } />
                        </div>
                    )
                })
            }
        </div>
    )
}

function Button({ label, onClick }) {

    return (
        <button onClick={ onClick }>
            {label}
        </button>
    )
}

function EditForm() {
    return (
        <form>
            <input />
        </form>
    )
}