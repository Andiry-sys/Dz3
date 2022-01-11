let _start = +prompt(`Enter start range `)
let _end = +prompt(`Enter end range `)
let _sum = 0
while (_start <= _end) {

    _sum += _start
    _start++
}

alert(_sum)