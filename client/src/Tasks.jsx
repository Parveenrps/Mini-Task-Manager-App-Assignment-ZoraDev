import { useState, useEffect } from "react"


export const Tasks = () =>{
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () =>{
        try {
            const res = await fetch("https://fantastic-orbit-v6p7w9qvpjppfqjr-8000.app.github.dev/" );
            const data = res.json();
            setTasks(data);
        } catch (error) {
            console.log("error while fetching all tasks", error.message)
        }
    }

    const deleteTask= async (taskID) =>{
        try {
            const res = await fetch(`https://fantastic-orbit-v6p7w9qvpjppfqjr-8000.app.github.dev/${taskID}`, {method: 'DELETE'});
            if(res.ok) fetchTasks();
            else console.log(res.status)
        } catch (error) {
            console.log("Error while deleting the task", error.message);
        }
    }

    useEffect( ()=> {fetchTasks()}, []);
    return (
        <>
        <div>
            {
                tasks.map((task)=>{
                    <div key={task.id}>
                        <p>{task}</p>
                        <button onClick={deleteTask(task.id)}>Delete</button>
                    </div>
                })
            }
        </div>
        </>
    )
}