import "./App.css";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [updateData, setUpdateData] = useState({ id: "", task: "" });
  const [data, setData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  const addData = (value) => {
    console.log(value);
    setData([...data, value]);
    setTask("");
  };
  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };
  const handleDelete = (idValue) => {
    setData([...data.filter((task, id) => id != idValue)]);
    setIsUpdate(false);
  };
  const getUpdateData = (value) => {
    setUpdateData({ id: value.id, task: value.task });
    setIsUpdate(true);
  };
  const handleUpdate = (value) => {
    setData(
      data.map((taskUpdate, id) => (id === value.id ? value.task : taskUpdate))
    );
    setIsUpdate(false);
  };

  console.log(updateData);
  console.log("DATA : ", data);
  return (
    <div className="App">
      <div className="parent">
        <div className="header">Todo App</div>
        <label htmlFor="task"> Task </label>
        <input type="text" name="task" id="" onChange={handleTaskChange} />
        <button onClick={() => addData(task)}>add</button>
        <div className={isUpdate ? "body isupdate" : "body"}>
          <table className="table">
            <tr>
              <th>Number</th>
              <th>Value</th>
              <th>Action</th>
            </tr>
            {data.map((task, id) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{task}</td>
                  <td>
                    <button onClick={() => handleDelete(id)}>delete</button>
                    <button onClick={() => getUpdateData({ id, task })}>
                      update
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>

          {isUpdate && (
            <div className="update">
              <label htmlFor="id"> Id </label>
              <label htmlFor="id"> {updateData.id} </label>
              <br />
              <label htmlFor="taskUpdate"> Task </label>
              <input
                type="text"
                name="taskUpdate"
                id=""
                onChange={(event) =>
                  setUpdateData({ ...updateData, task: event.target.value })
                }
                value={updateData.task}
              />
              <button onClick={() => handleUpdate(updateData)}>update</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
