import { useEffect, useState } from "react"
import TaskList from "./TaskList"
import { v4 as uuidv4 } from 'uuid'

export default function TaskForm() {
    const emptyForm = { task: "", priority: false, }
    const [formData, setFormData] = useState(emptyForm)
    const [tasks, setTasks] = useState([])
    const [taskChangeCount, setTaskChangeCount] = useState(0)

    //Sayfa ilk açıldığında
    useEffect(() => {
        const localStorageTasks = JSON.parse(localStorage.getItem("tasks"))
        setTasks(localStorageTasks ?? [])
    }, [])

    //Tasks bilgisi değişince
    useEffect(() => {
        if (taskChangeCount > 0) {
            localStorage.setItem("tasks", JSON.stringify(tasks))
        }
    }, [taskChangeCount])

    const date = new Date();
    const currentDate = date.toLocaleDateString()

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
        setTaskChangeCount(prev => prev + 1)
        setFormData(emptyForm)
        event.target.reset()
    }

    const removeTask = (uuid) => {
        setTasks(prev => prev.filter(item => item.uuid !== uuid))
        setTaskChangeCount(prev => prev + 1)
    }

    const editTask = (uuid) => {
        const task = tasks.find(item => item.uuid === uuid)
        setFormData({ ...task, isEdited: true })
        setTaskChangeCount(prev => prev + 1)
    }

    const doneTask = (uuid) => {
        const taskIndex = tasks.findIndex(item => item.uuid === uuid)
        const task = tasks[taskIndex]
        task.isDone = !task.isDone
        const newTasks = tasks.slice()
        newTasks[taskIndex] = task
        setTasks(newTasks)
        setTaskChangeCount(prev => prev + 1)
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <h3 className="text-center mb-3">Görev Listem</h3>
                <hr />
                <h5 className="text-end mb-5">Tarih: {currentDate}</h5>
                <div className="row mb-3">
                    <label htmlFor="task" className="col-sm-2 col-form-label fw-bold">Görev Gir:</label>
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
                                Öncelikli Görev
                            </label>
                        </div>
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" class="btn btn-outline-primary">Oluştur</button>
                </div>
            </form>
            <br />
            <TaskList tasks={tasks} removeTask={removeTask} editTask={editTask} doneTask={doneTask} />
        </>
    )
}