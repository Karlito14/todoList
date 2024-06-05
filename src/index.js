import {
  addTodo,
  clickButtonDelete,
  clickSpan,
  createElement,
} from './utils.js';

// affichage des todo
const elForm = document.querySelector('.form');
const elInputForm = document.querySelector('form > input[type="text"]');
const elList = document.querySelector('#todo_list');
const todos = [
  {
    text: 'faire les courses',
    done: false,
  },
  {
    text: 'aller au coiffeur',
    done: true,
  },
];

if (todos.length > 0) {
  for (const todo of todos) {
    const clone = createElement(todo);
    elList.append(clone);
    clickButtonDelete(clone, todos);
    clickSpan(clone, todos);
  }
}

elForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const [clone, todo] = addTodo(elInputForm);
  todos.push(todo);
  elList.append(clone);

  clickButtonDelete(clone, todos);
  clickSpan(clone, todos);
});
