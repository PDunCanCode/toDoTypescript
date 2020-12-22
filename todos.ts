//type Todo = {
// id: number;
// text: string;
//checked: boolean;
// place?: Place
//};

//type CompletedTodo = Todo & {
 // readonly done: true;
//};

type Place1 = 'home' | 'work' | {custom: string} 

function toggleTodo(todo: Todo): Todo {
  return {
    id: todo.id,
    text: todo.text,
    checked: !todo.checked,
  };
}

function completeAll(todos: readonly Todo[]): CompletedTodo[] {
  return todos.map((todo) => ({
    ...todo,
    done: true,
  }));
}

function placeToString1(place: Place): string {
    if (place === 'home') {
        return '🏠 Home'
    } else if (place === 'work') {
        return '💼 Work'
    } else {
        return '📍' + place.custom 
    }
}
        