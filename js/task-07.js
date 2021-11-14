// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const fontSizeControl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
spanText.classList.add('textSize')

fontSizeControl.addEventListener('input', changeSize)

function changeSize(event){
	const rangeValue = Number(event.currentTarget.value)
	spanText.style.fontSize=`${rangeValue}px`
	}
