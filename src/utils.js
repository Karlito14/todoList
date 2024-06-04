export const addTodo = (input) => {
  let inputValue = input.value.trim();
  inputValue = inputValue[0].toUpperCase() + inputValue.slice(1);
  inputValue = inputValue.replaceAll('  ', ' ');

  const todo = {
    text: inputValue,
    done: false,
  };

  const clone = createElement(todo);

  input.value = '';
  input.focus();

  return [clone, todo];
};

export const createElement = (todo) => {
  const template = document.querySelector('#template');
  const clone = template.content.cloneNode(true);
  const elPagraph = clone.querySelector('p');
  const elSpan = clone.querySelector('span');

  elPagraph.textContent = todo.text;

  if (todo.done) {
    elSpan.classList.add('done');
    elPagraph.classList.add('line');
  }

  return clone.firstElementChild;
};
