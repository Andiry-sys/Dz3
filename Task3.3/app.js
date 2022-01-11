let _num = +prompt(`Enter number`)

for (let i = 2; i <= _num; i++) {
    if (_num % i == 0) {
        console.log(i + " ");
    }
}
