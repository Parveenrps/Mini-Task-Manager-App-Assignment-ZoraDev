import { useState } from 'react'
import './App.css'
import { Tasks } from './Tasks';

function App() {
  const [task, setTask] = useState("");

  const changeHandler = (e) =>{
    setTask({...task, [e.target.name] : e.target.value })
  }

  const onSubmit  = async () =>{
    try {
      const res = await fetch("https://fantastic-orbit-v6p7w9qvpjppfqjr-8000.app.github.dev/", {
        method: 'POST',
        headers: {
          "content-type" : "application/json"
        },
        body: JSON.stringify(task)
      });

      if(res.ok) console.log(res.data.data.message)
    } catch (error) {
      console.log("Error while adding the task", error.message);
    }
  }

  return (
    < >
    <div className='flex justify-center item-center'>
    <form type="submit" className='mt-auto'>
    
    <input
    type='text'
    name="task"
    value={task.value}
    placeholder='Task'
    onChange={changeHandler}
    ></input>

    <button onClick={onSubmit}>Add Task</button>
    </form>
    </div>

    <Tasks></Tasks>


    </>
  )
}

export default App
