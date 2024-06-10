const addBtn = document.querySelector('#addBtn');
let list = document.querySelector('#list');
const item = document.querySelector('#item');

addBtn.addEventListener('click', () => {
    const itemToAdd = item.value;
    item.value = '';
    
    const newItem = document.createElement('li');
    const span = document.createElement('span');
    const btn = document.createElement('button');

    newItem.appendChild(span);
    span.textContent = itemToAdd;
    newItem.appendChild(btn);
    btn.textContent = 'Delete';
    list.appendChild(newItem);

    btn.addEventListener('click', () => {
       list.removeChild(newItem);
    });

    item.focus();
});
