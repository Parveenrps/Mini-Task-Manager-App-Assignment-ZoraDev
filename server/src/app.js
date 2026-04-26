import express from 'express'
import cors from 'cors';

const app = express();

const tasks = [];
app.use(cors({origin: ["https://fantastic-orbit-v6p7w9qvpjppfqjr-5173.app.github.dev", "http://localhost:5173"]}));
app.use(express.json());

app.get("/", (req, res)=>{
    return res.json({
        status: 200,
        data: tasks,
        message: "task fetched sucessfully"
    })
} )

app.post("/", (req, res) =>{
    const task = req.body;

    if(!req.body.task){
        return res.json({
            status: 400, 
            message: "task required"
        });
    }

    tasks.push(task);

    return res.json({
        status: 201, 
        messsage: "task added successfully"
    });
})
export {app};