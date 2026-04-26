import { app } from "./app.js";

const PORT = 8000;

app.listen(PORT, ()=>{
    console.log("server is listening on PORT no:", PORT);
})