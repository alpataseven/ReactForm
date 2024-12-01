export default function TaskList({ tasks, removeTask }) {
    if (tasks.length === 0) {
        return <></>
    }

    return (
        <>
            <p className="lead fw-bold text-start">Görevler:</p>
            <ul className="list-group list-group-flush">
                {tasks.map(
                    (item) => 
                    <li className="list-group-item" key={item.uuid}>{item.task}
                    <span className="btn btn-danger btn-sm float-end" onClick={() => {removeTask(item.uuid)}}>Sil</span></li>)}
            </ul>
        </>
    )
}