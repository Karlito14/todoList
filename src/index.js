// affichage des todo

const form = document.querySelector('.form');
const input = document.querySelector('input[type="text"]');
const list = document.querySelector('#todo_list');

const addTodo = () => {
  let inputValue = input.value;
  inputValue = inputValue[0].toUpperCase() + inputValue.slice(1)

  const template = document.querySelector('#template');
  const clone = template.content.cloneNode(true);
  const pagraph = clone.querySelector('p');
  pagraph.textContent = inputValue;

  list.append(clone);
  input.value = '';
  input.focus();
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTodo();
});
