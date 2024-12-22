import { useEffect, useState } from "react"

export default function TaskList({ tasks, removeTask, editTask }) {

    const [priority, setPriority] = useState(false)
    const [filteredTasks, setfilteredTasks] = useState(tasks)

    const handlePriorityFilter = () => {
        setPriority(prev => !prev)
        console.log("priority", priority)
    }

    useEffect(() => {
        setfilteredTasks(tasks)
    }, [tasks])

    useEffect(() => {
        priority ? setfilteredTasks(tasks.filter(item => item.priority === priority)) : setfilteredTasks(tasks)
    }, [priority])

    if (tasks.length === 0) {
        return <></>
    }

    return (
        <div className="p-3 bg-light mb-5 border rounded">
            <p className="lead fw-bold text-start">{priority ? "Öncelikli Görevler" : "Görevler"}
                <span onClick={handlePriorityFilter}
                    className={`btn btn-sm ${priority ? "btn-outline-info" : "btn-outline-warning"} float-end`}>{priority ? "Bütün Görevleri Göster" : "Öncelikli Görevleri Göster"}</span></p>
            <ul className="list-group">
                {filteredTasks.map(
                    (item) =>
                        <li className="list-group-item" key={item.uuid}>{item.task}
                            {item.priority && <span className="badge rounded-pill text-bg-primary mx-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16">
                                <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                            </svg></span>}
                            <div className="btn-group float-end" role="group">
                                <button className="btn btn-outline-info btn-sm" onClick={() => { editTask(item.uuid) }}>Düzenle</button>
                                <button className="btn btn-outline-danger btn-sm" onClick={() => { removeTask(item.uuid) }}>Sil</button>
                            </div>
                        </li>
                )}
            </ul>
        </div>
    )
}