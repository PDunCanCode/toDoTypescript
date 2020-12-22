var todoItems = [];
function addTodo(text) {
    var todo = {
        text: text,
        checked: false,
        id: Date.now()
    };
    todoItems.push(todo);
    console.log(todoItems);
}
var form = document.querySelector(".ts-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var input = document.querySelector(".ts-todo-input");
    var text = input.value.trim();
    if (text !== "") {
        addTodo(text);
        input.value = "";
        input.focus();
    }
});
