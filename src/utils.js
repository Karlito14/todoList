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

export const clickButtonDelete = (clone, todos) => {
  const elButtonDelete = clone.querySelector('button.todo__item__delete');

  elButtonDelete.addEventListener('click', () => {
    const index = todos.findIndex(
      (element) => element.text === clone.children[1].textContent
    );

    todos.splice(index, 1);

    clone.remove();
  });
};

export const clickSpan = (clone, todos) => {
  const span = clone.querySelector('.todo__item__span');
  const paragraph = clone.querySelector('.todo__item__paragraph');

  span.addEventListener('click', () => {
    span.classList.toggle('done');
    paragraph.classList.toggle('line');

    const index = todos.findIndex(
      (element) => element.text === paragraph.textContent
    );

    todos[index].done = !todos[index].done;
  });
};
