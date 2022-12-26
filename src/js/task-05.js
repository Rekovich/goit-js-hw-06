const inputNameInput = document.querySelector('#name-input');
const spanNameOutput = document.querySelector('#name-output');

inputNameInput.addEventListener('input', onInputChange)

function onInputChange (event) {
    spanNameOutput.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        spanNameOutput.textContent = 'Anonymous'
    }
};