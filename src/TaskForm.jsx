import { useState } from "react"
import TaskList from "./TaskList"
import { v4 as uuidv4 } from 'uuid'

export default function TaskForm() {
    const emptyForm = { task: "", priority: false, }
    const [formData, setFormData] = useState({ emptyForm })
    const [tasks, setTasks] = useState([])

    const handleInputChange = (event) => {
        setFormData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
            }
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        if (formData.isEdited) {
            const taskIndex = tasks.findIndex(item => item.uuid === formData.uuid)
            const newTasks = tasks.slice()
            newTasks[taskIndex] = { ...formData }
            setTasks(newTasks)
        }
        else if (formData.task.length > 3) {
            formData.uuid = uuidv4()
            setTasks(prev =>
                [formData, ...prev])

        }
        setFormData(emptyForm)
        event.target.reset()
    }

    const removeTask = (uuid) => {
        setTasks(prev => prev.filter(item => item.uuid !== uuid))
    }

    const editTask = (uuid) => {
        console.log(uuid)
        const task = tasks.find(item => item.uuid === uuid)
        setFormData({ ...task, isEdited: true })
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="row mb-3">
                    <label htmlFor="task" className="col-sm-2 col-form-label">Task</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            value={formData.task}
                            id="task"
                            name="task"
                            onChange={handleInputChange} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={formData.priority}
                                id="priority"
                                name="priority"
                                onChange={handleInputChange} />
                            <label className="form-check-label" htmlFor="priority">
                                Oncelikli
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-outline-primary">Submit</button>
            </form>
            <br />
            <TaskList tasks={tasks} removeTask={removeTask} editTask={editTask} />
        </>
    )
}