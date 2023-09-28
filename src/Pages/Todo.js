import React, { useState, useEffect } from "react";
import TextInput from "../Elements/TextInput/TextInput";
import BasicDropdown from "../Elements/Dropdowns/BasicDropdown";
import TaskCard from "../Elements/Card/TaskCard";

const initialTodoState = {
  title: "",
  description: "",
  status: false,
};

const status = [
  {
    label: "Completed",
    value: "completed",
  },
  {
    label: "Not Completed",
    value: "not completed",
  },
];

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    status: "not completed",
  });
  const [mode, setMode] = useState("create");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    return () => {};
  }, []);

  function handleTodo() {
    const todosCopy = [...todos];
    todosCopy.push(todo);
    setTodo({});
    setTodos(todosCopy);
  }

  function handleInput(e) {
    console.log(e.target.id, e.target.value);
    let todoCopy = {
      ...todo,
      status: "not completed",
    };
    todoCopy[e.target.id] = e.target.value;
    setTodo(todoCopy);
  }

  function handleEdit(data = {}) {
    setMode("edit");
    setTodo(data);
  }

  function handleUpdateTodo(e) {
    if (mode === "edit") {
      let todosCopy = [...todos];
      let matchedData = todosCopy.filter((d) => d.title !== todo.title);
      matchedData.push(todo);
      setTodos(matchedData);
      setTodo({});
      setMode("create");
    }
  }

  function handleDeleteTodo(title = "") {
    let todosCopy = [...todos];
    let matchedData = todosCopy.filter((d) => d.title !== title);
    setTodos(matchedData);
  }

  function renderCards(data = [], filterType = "all") {
    const _d =
      filter === "all" ? data : todos.filter((d) => d.status === filter);
    return _d.map((d, i) => (
      <TaskCard
        data={d}
        key={`${d.title}-${i}`}
        handleEdit={handleEdit}
        handleDeleteTodo={handleDeleteTodo}
      />
    ));
  }

  return (
    <div className="container">
      <div className="container-fluid">
        <div className="card border-light mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <TextInput
                  placeholder="Todo Name"
                  id="title"
                  value={todo["title"]}
                  onChange={handleInput}
                  disabled={mode === "edit"}
                />
              </div>
              <div className="col-4">
                <TextInput
                  placeholder="Todo Desciption"
                  id="description"
                  value={todo["description"]}
                  onChange={handleInput}
                />
              </div>

              <div class="col-4 d-grid justify-content-center-mx-auto p-4">
                <button
                  class="btn btn-success"
                  tyle={{ background: "#13AD89" }}
                  type="button"
                  onClick={mode === "create" ? handleTodo : handleUpdateTodo}>
                  {mode === "create" ? "Add Todo" : "Edit Todo"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row d-flex flex-start">
              <div className="col-2">
                <BasicDropdown
                  label="Status"
                  id="status"
                  options={status}
                  onSelect={handleInput}
                  value={todo["status"]}
                />
              </div>
              <div className="col-8"></div>
              <div className="col-2">
                <BasicDropdown
                  label="Status Filter"
                  id="filter"
                  options={[{ label: "All", value: "all" }, ...status]}
                  onSelect={(e) => setFilter(e.target.value)}
                  value={filter}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">{renderCards(todos, filter)}</div>
      </div>
    </div>
  );
}
