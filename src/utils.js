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
  const elSpan = clone.querySelector('.todo__item__span');
  const elParagraph = clone.querySelector('.todo__item__paragraph');

  elSpan.addEventListener('click', () => {
    elSpan.classList.toggle('done');
    elParagraph.classList.toggle('line');

    const index = todos.findIndex(
      (element) => element.text === elParagraph.textContent
    );

    todos[index].done = !todos[index].done;
  });
};

export const clickEdit = (clone, todos) => {
  const elButtonEdit = clone.querySelector('.todo__item__edit');
  const elParagraph = clone.querySelector('.todo__item__paragraph');
  const elSpan = clone.querySelector('.todo__item__span');

  elButtonEdit.addEventListener('click', () => {
    const input = document.createElement('input');
    input.value = elParagraph.textContent;
    input.classList.add('input-edit');

    setTimeout(() => {
      input.focus();
    }, 100);

    elSpan.style.display = 'none';

    elParagraph.replaceWith(input);
    const buttonSave = document.createElement('button')
    buttonSave.textContent = 'Sauvegarder';
    elButtonEdit.replaceWith(buttonSave)

    buttonSave.addEventListener('click', () => {
      const index = todos.findIndex(
        (element) => element.text === elParagraph.textContent
      );
      elParagraph.textContent = input.value;
      input.replaceWith(elParagraph);
      elSpan.style.display = 'inline-block';
      buttonSave.replaceWith(elButtonEdit);
      todos[index].text = elParagraph.textContent
    });
  });
};
