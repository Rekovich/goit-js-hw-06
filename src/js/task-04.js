let counterValue = 0;
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

const value = document.querySelector('#value');

const counterRemove = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

const counterAdd = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

decrementButton.addEventListener('click', counterRemove);
incrementButton.addEventListener('click', counterAdd);
 

