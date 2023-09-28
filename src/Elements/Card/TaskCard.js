import React from "react";

export default function TaskCard({
  data = {},
  handleEdit = (e) => {},
  handleDeleteTodo = (e) => {},
}) {
  return (
    <div className="col-md-3">
      <div class="card">
        <div class="card-body" style={{ background: "#CCF5D3" }}>
          <div className="row d-flex text-start">
            <h4>Title: {data.title}</h4>
            <p>Desciption: {data.description}</p>
            <p>Status: {data.status}</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                type="button"
                class="btn btn-info"
                id="editButton"
                onClick={() => {
                  handleEdit(data);
                }}>
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => handleDeleteTodo(data.title)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
