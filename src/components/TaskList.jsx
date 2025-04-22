import TaskItem from "./TaskItem"

const TaskLisk = ({tasks}) => {
    return (
        <main>
            <ul className="mt-4 gap-2 text-indigo-500">{
                tasks.map(
                    (task, position)=>{
                        return (
                            <TaskItem key={position} task={task}/>
                        )
                    }
                )    
            }</ul>
        </main>
    )
}   

export default TaskLisk;