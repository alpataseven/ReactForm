import TaskForm from "../TaskForm";

export default function Taskpage() {
    return (
        <>
            <div className='container mt-5'>
                <div className="row justify-content-sm-center">
                    <div className="col-sm-8">
                        <TaskForm />
                    </div>
                </div>
            </div>
        </>
    )
}