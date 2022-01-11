let _num = +prompt(`Enter number`)

function GetDigit(number) {
    let i = 1
    while (number /= 10) {
        i++
    }
    return i
}

alert(GetDigit(_num))