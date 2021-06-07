const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]'); // формируем коллекцию узлов NodeList, обращение все инпуты с типом checkbox внутри элементов с классом .inbox, запись через пробел
console.log(checkboxes);

let lastChecked;

function handleCheck(e) {
    let inBetween = false;
    // проверяем ниже два события: нажата ли клавиша shift - относится к событиям мыши && включен ли флажок у элемента (есть ли атрибут cheked) передаваемого в данную функцию 
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => { //перебираем коллекцию с колбэком: если 
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) { // элемент чекбокса который выбран является первым или чекбокс который выбран является последним из выбранных
                inBetween = !inBetween; // меняется на true
                console.log('Start check them in between'); // выводим в консоль надпись какие элементы должны быть выбраны между указанными элементами
            }

            if (inBetween) { // и если inBetween true
                checkbox.checked = true; // присваиваем указанным эелемнтам атрибут checked
            }
        });
    }
    lastChecked = this; // привязываем переменную к конексту вызова функции 
}

checkboxes.forEach(checkbox =>checkbox.addEventListener('click', handleCheck));
