import { React, useState } from "react";
import "./Todo.css";
import ShowToda from "./ShowToda";
function Todo() {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);
  const onChangeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newData = task;

    //... is a spread operator, if we will not use this operator then the previous data will get deleted after inserting new data.
    setData([...data, newData]);

    setTask("");
  };
 const deleteItem =(a)=>{
    const findData = data.filter((curEle,index)=>{
        return index != a;

    })
    setData(findData);
 }
  return (
    <center>
         <h2>Add What you want to do whole day!</h2>
      <div className="container">
        <div className="row-justify-content-center align-items-center main-row">
          <div className="col shadow main-col bg-white">
            <div className="sohel">
              <div className="col  p-2">
                <h4 className="text-center">Todo</h4>
              </div>
            </div>
            <form onSubmit={submitHandler}>
              <div className="row-justify-content-between text-white p-2">
                <div className="form-group flex-fill mb-2 col-9">
                  <input
                    id="todo-input"
                    type="text"
                    className="form-control"
                    value={task}
                    maxLength ={50}
                    minLength={4}
                    onChange={onChangeHandler}
                    placeholder="Add to do"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mb-2 ml-2 col-3"
                  //if there is no text then button should be disabled..
                  disabled={!task}
                >
                  Add todo
                </button>
              </div>
            </form>
            {data.length > 0 &&
              data.map((value, index) => {
                return <ShowToda key={index} id={index} task={value}  onSelect={deleteItem}/>;
              })}
          </div>
        </div>
      </div>
    </center>
  );
}

export default Todo;
