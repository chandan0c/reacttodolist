
import "./App.css"
import Input from "./components/input";
import Todolist from "./components/Todolist";
function App() {
  return (
    <div className="App">
      <h1> my todo app</h1>
       <br/>
       <Input/>
       <Todolist/>
    </div>
  );
}

export default App;
