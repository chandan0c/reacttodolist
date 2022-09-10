import react, { useState } from "react"
import axios from "axios"
const Input=()=>{
    const [input,setinput]=useState("");
    const AddTodo=()=>{
        axios.post("http://localhost:3000/todo",{Task:input})
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:3000/todo',
        //     todo: {
                
        //     }
        //   });
    }
    return (
       <div>
         <input placeholder="enter your task" onChange={(e)=>{setinput(e.target.value)}}/>
        <br/>
        <br/>
        <button onClick={()=>AddTodo()}>add todo</button>
       </div>
    )
}
export default Input;