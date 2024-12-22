import { useEffect, useState } from "react"
import TaskListItem from "./TaskListItem"

export default function TaskList({ tasks, removeTask, editTask, doneTask }) {

    const [priority, setPriority] = useState(false)
    const [filteredTasks, setfilteredTasks] = useState(tasks)

    const handlePriorityFilter = () => {
        const newPriority = !priority
        newPriority ? setfilteredTasks(tasks.filter(item => item.priority === newPriority)) : setfilteredTasks(tasks)
        setPriority(newPriority)
    }

    useEffect(() => {
        setfilteredTasks(tasks)
    }, [tasks])


    if (tasks.length === 0) {
        return <></>
    }

    return (
        <div className="p-3 bg-light mb-5 border rounded">
            <p className="lead fw-bold text-start">{priority ? "Öncelikli Görevler" : "Görevler"}
                <div className="btn-group float-end" role="group">
                <button 
                    onClick={handlePriorityFilter}
                    className={`btn btn-sm ${priority ? "btn-outline-info" : "btn-outline-warning"} float-end`}>{priority ? "Bütün Görevleri Göster" : "Öncelikli Görevleri Göster"}
                </button>
                </div></p>
            <ul className="list-group">
                {filteredTasks.map(
                    (item) =>
                    <TaskListItem 
                    key={tasks.uuid} 
                    task={item} 
                    editTask={editTask} 
                    removeTask={removeTask}
                    doneTask={doneTask} 
                    />  
                )}
            </ul>
        </div>
    )
}