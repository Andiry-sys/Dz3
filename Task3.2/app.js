let _num1 = +prompt(`Enter num`)
let _num2 = +prompt(`Enter number`)

function calc(a, b) {
    let c;
    while (a != b) {
        if (a > b) {
            a = a - b;

        } else
            if (a < b) {
                c = a;
                a = b;
                b = c;
            }

    }
    return a
}

alert(calc(_num1, _num2))