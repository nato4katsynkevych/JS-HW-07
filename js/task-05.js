// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output')

span.textContent='незнакомец'

input.addEventListener('keyup', onKeyPress)

function onKeyPress(event){
	span.textContent = event.currentTarget.value
	console.log(span.textContent = event.currentTarget.value);
}