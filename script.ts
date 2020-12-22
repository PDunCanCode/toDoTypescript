type Todo = {
  id: number;
  text: string;
  checked: boolean;
};

let todoItems: Todo[] = [];

function addTodo(text: any) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  console.log(todoItems);
}

const form = document.querySelector(".ts-form") as HTMLFormElement;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector(".ts-todo-input") as HTMLInputElement;

  const text = input.value.trim();
  if (text !== "") {
    addTodo(text);
    input.value = "";
    input.focus();
  }
});
