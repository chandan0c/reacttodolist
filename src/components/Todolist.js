import { useEffect, useState } from "react";
import axios from "axios";
const Todolist = () => {
  const [tododata, settododata] = useState([]);
  const [newValue,setNewValue]=useState({})

  useEffect(() => {
    axios.get("http://localhost:3000/todo").then((res) => {
      let temp = res.data;
      temp = temp.map((e) => {
        e.edit = 0;
        return e;
      });
      settododata(temp);
    });
  }, []);
  console.log(tododata);
  const deleteFun = (data) => {
    let id = data.data.id;
    axios.delete(`http://localhost:3000/todo/${id}`);
    return "";
  };

  const editSave = (event, id) => {
    if (event.target.value === "save") {
       axios.put(`http://localhost:3000/todo/${id}`,{Task:newValue[`${id}`]})
       window.location.reload()
    } else {
      let newData = tododata.map((e) => {
        if (e.id === id) {
          e.edit = 1;
          return e;
        } else {
          return e;
        }
      }
      );
      settododata(newData)
    }
    
  };

  const handleEdit=(event,id)=>{
    let temp=newValue
    temp[`${id}`]=event.target.value;
    setNewValue(temp)

  }




  return (
    <div>
      <br />
      <br />
      <h1>TODO list is here</h1>
      <div>
        {tododata.map((data) => {
          return (
            <div>
              <h1>
                {data.edit ? <input  onChange={(e)=>{
                  handleEdit(e,data.id)
                }} ></input> : data.Task}
              </h1>
              <button
                onClick={() => {
                  deleteFun({ data });
                }}
              >
                delete
              </button>
              <button
                value={data.edit ? "save" : "edit"}
                onClick={(e) => editSave(e, data.id)}
              >
                {data.edit ? "save" : "edit"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Todolist;
