"use strict";
function completeAll(todos) {
    return todos.map((todo) => (Object.assign(Object.assign({}, todo), { done: true })));
}
function placeToString(place) {
    if (place === 'home') {
        return '🏠 Home';
    }
    else if (place === 'work') {
        return '💼 Work';
    }
    else {
        return '📍' + place.custom;
    }
}
