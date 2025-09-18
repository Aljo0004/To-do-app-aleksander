"use strict";

const submit = document.querySelector("#submit");
const todoNameInput = document.querySelector("#todo_name_input");
const todoContainer = document.querySelector("#todo_container");
const doneContainer = document.querySelector("#done_container");

submit.addEventListener("click", subMitTodo);

//Tilføjer to do punkt
function subMitTodo() {
  const li = document.createElement("li");
  li.innerHTML = `
  <div class="todo-left">
    <input type="checkbox">
    <p>${todoNameInput.value}</p>
  </div>
  <div class="todo-right">
    <input type="date" class="todo-date">
    <button class="delete-btn">🗑️</button>
  </div>
`;
  todoContainer.appendChild(li);

  //Delete knap
  const deleteBtn = li.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  // Skift mellem To do og done
  li.addEventListener("click", (e) => {
    if (e.target.type === "checkbox") {
      if (li.parentElement.id === "todo_container") {
        todoContainer.removeChild(li);
        doneContainer.appendChild(li);
      } else {
        doneContainer.removeChild(li);
        todoContainer.appendChild(li);
      }
    }
  });
}
