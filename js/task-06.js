// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
// input.classList.add = ('invalid')

// input.classList.add = ('valid')
const input = document.querySelector('#validation-input')

input.addEventListener('blur', checkInput);

function checkInput(event) {
	const eventLength = event.currentTarget.value.length;
	const inputLength = Number(input.dataset.length);

	// console.log(eventLength);
	// console.log(inputLength);
	if (eventLength === inputLength) {
		input.classList.remove('invalid')
		input.classList.add('valid')
		
	}
	else {
		input.classList.remove('valid')
		input.classList.add('invalid')}
	// console.log( event.currentTarget.value.length)
}

// console.log(input.dataset.length)