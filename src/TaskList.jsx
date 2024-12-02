export default function TaskList({ tasks, removeTask, editTask }) {
    if (tasks.length === 0) {
        return <></>
    }

    return (
        <div className="p-3 bg-light mb-5 border rounded">
            <p className="lead fw-bold text-start">Görevler:</p>
            <ul className="list-group">
                {tasks.map(
                    (item) =>
                        <li className="list-group-item" key={item.uuid}>{item.task}
                            <div class="btn-group float-end" role="group">
                                <button class="btn btn-outline-info btn-sm" onClick={() => { editTask(item.uuid) }}>Düzenle</button>
                                <button class="btn btn-outline-danger btn-sm" onClick={() => { removeTask(item.uuid) }}>Sil</button>
                            </div>
                        </li>
                )}
            </ul>
        </div>
    )
}