do {
    let _num1 = parseInt(prompt(`Enter number `))
    let _num2 = parseInt(prompt(`Enter number `))
    let _sym = prompt(`Enter symbov (+,-,/,*) `)
    switch (_sym) {
        case '+':
            alert(_num1 + _num2)
            break;
        case '-':
            alert(_num1 - _num2)
            break;
        case '/':

            if (_num2 != 0) {
                alert(_num1 / _num2)
                break;
            } else {
                break;
            }

        case '*':
            alert(_num1 * _num2)
            break;

        default:
            alert(`There are no such operations`)
            break;
    }

} while (confirm(`Start again calculate`));