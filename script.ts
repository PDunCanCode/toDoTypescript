let todoItems: any[] = [];

function renderTodo(todo: {
  text: string;
  checked: boolean;
  id: any;
  deleted?: boolean;
}) {
  localStorage.setItem("todoItems", JSON.stringify(todoItems));

  const list = document.querySelector(".todo-list") as HTMLLIElement;
  const item = document.querySelector(
    `[data-key='${todo.id}']`
  ) as HTMLLIElement;

  if (todo.deleted) {
    item.remove();
    if (todoItems.length === 0) list.innerHTML = "";
    return;
  }

  const isChecked = todo.checked ? "done" : "";
  const node = document.createElement("li") as HTMLLIElement;
  node.setAttribute("class", `todo-item ${isChecked}`);
  node.setAttribute("data-key", todo.id);
  node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo delete-todo">
    <svg><use href="#delete-icon"></use></svg>
    </button>
  `;

  if (item) {
    list.replaceChild(node, item);
  } else {
    list.append(node);
  }
}

function addTodo(text: string) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo);
}

function toggleDone(key: any) {
  const index = todoItems.findIndex(
    (item: { id: number }) => item.id === Number(key)
  );
  todoItems[index].checked = !todoItems[index].checked;
  renderTodo(todoItems[index]);
}

function deleteTodo(key: any) {
  const index = todoItems.findIndex(
    (item: { id: number }) => item.id === Number(key)
  );
  const todo = {
    deleted: true,
    ...todoItems[index],
  };
  todoItems = todoItems.filter((item) => item.id !== Number(key));
  renderTodo(todo);
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

const list = document.querySelector(".todo-list") as HTMLLIElement;
list.addEventListener("click", (event) => {
  if ((event.target as Element).classList.contains("tick")) {
    const itemKey = (event.target as Element).parentElement.dataset.key;
    toggleDone(itemKey);
  }

  if ((event.target as Element).classList.contains("delete-todo")) {
    const itemKey = (event.target as Element).parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const ref = localStorage.getItem("todoItems");
  if (ref) {
    todoItems = JSON.parse(ref);
    todoItems.forEach((t) => {
      renderTodo(t);
    });
  }
});
