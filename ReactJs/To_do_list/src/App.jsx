import React, { useState } from "react";
import { toast } from "react-toastify";

const App = () => {
  const [tasks, setTasks] = useState("");
  const [description, setDescription] = useState("");
  const [taskList, setTaskList] = useState([]);

  const submitHandle = () => {
    return (e) => {
      e.preventDefault();
      setTaskList([...taskList, { tasks, description }]);
      // console.log(tasks, description);
      toast.success("Task Added Successfully");
      setTasks("");
      setDescription("");
    };
  };
  
  

  
  const deletehandler = (i) => {
    let copytask = [...taskList];
    copytask.splice(i, 1);
    setTaskList(copytask);
    toast.error("Task Deleted Successfully");
  };
  


  let renderTask = <h2>No Task Available</h2>;

  if (taskList.length > 0) {
    renderTask = taskList.map((t, i) => {
      return (
        <li key={i} className="flex justify-between mb-5">
          <div className="flex justify-between w-2/3">
            <h5 className="text-2xl font-semibold">{t.tasks}</h5>
            <h6 className="text-xl font-medium">{t.description}</h6>
          </div>
          <button
            className="bg-red-500 text-white p-2 rounded mr-2"
            onClick={(i) => {
              deletehandler(i);
            }}
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1
        className="bg-black text-white p-5 text-5xl 
      font-semibold text-center"
      >
        To do List
      </h1>
      <form onSubmit={submitHandle()} className="flex  gap-2">
        <input
          type="text"
          className="w-1/4 py-1 px-4 m-5 border-2 text-xl border-red-400"
          placeholder="Enter Your Task"
          onChange={(e) => {
            setTasks(e.target.value);
          }}
          value={tasks}
        />

        <input
          type="text"
          className="w-1/4 py-2 px-4 m-5 border-2 text-xl border-red-400"
          placeholder="Enter Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <button className="py-3 px-5 border border-red-300 text-red-500 hover:bg-red-100 m-5 rounded ">
          Add Task
        </button>
      </form>

      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default App;
