type Todo = [
id: number,
text: string,
checked: boolean,
place?: Place
];

type CompletedTodo = Todo & {
 readonly done: true;
};

type Place = 'home' | 'work' | {custom: string} 


function completeAll(todos: readonly Todo[]): CompletedTodo[] {
  return todos.map((todo) => ({
    ...todo,
    done: true,
  }));
}

function placeToString(place: Place): string {
    if (place === 'home') {
        return '🏠 Home'
    } else if (place === 'work') {
        return '💼 Work'
    } else {
        return '📍' + place.custom 
    }
}
        