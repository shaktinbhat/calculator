let result = document.getElementById('result');
buttons = document.querySelectorAll('button');
 let resultValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'x') {
            buttonText = '*';
            resultValue += buttonText;
            result.value = resultValue;
        }
        else if (buttonText == 'C') {
            resultValue = "";
            result.value = resultValue;
        }
        else if (buttonText == '=') {
            result.value = eval(resultValue);
        }
        else {
            resultValue += buttonText;
            result.value = resultValue;
        }

    })
}

