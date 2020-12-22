type Todo = {
  id: number;
  text: string;
  checked: boolean;
};

let todoItems: Todo[] = [];

function renderTodo(todo: Todo) {
    const list = document.querySelector(".todo-list") as HTMLInputElement;
  
    const isChecked = todo.checked ? "done" : "";
    const node = document.createElement("li");
    node.setAttribute("class", `todo-item ${isChecked}`);
    node.setAttribute("data-key", todo.id.toString());
    node.innerHTML = `
      <input id="${todo.id}" type="checkbox"/>
      <label for="${todo.id}" class="tick tick"></label>
      <span>${todo.text}</span>
      <button class="delete-todo delete-todo">
      <svg><use href="#delete-icon"></use></svg>
      </button>
    `;
  
    list.append(node);
  }

function addTodo(text: any) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  console.log(todoItems);
}

const form = document.querySelector(".form") as HTMLFormElement;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector(".todo-input") as HTMLInputElement;

  const text = input.value.trim();
  if (text !== "") {
    addTodo(text);
    input.value = "";
    input.focus();
  }
});


