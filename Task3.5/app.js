

function Check() {
    let q1 = 0, q2 = 0, q3 = 0, q4 = 0, q5 = 0, num


    for (let i = 0; i < 10; i++) {
        num = parseInt(prompt(`Enter ${i} numbers`))
        if (num > 0) {
            q1++
        }
        else if (num < 0) {
            q2++

        }
        else if (num == 0) {
            q3++
        }
        else if (num % 2 == 0) {
            q4++
        }
        else if (num % 2 != 0) {
            q5++
        }
    }

    console.log(`You enter positive number: ${q1}`)

    console.log(`You enter negative number: ${q2}`)

    console.log(`You enter zero: ${q3}`)

    console.log(`You enter even number: ${q4}`)

    console.log(`You enter odd number: ${q5}`)


}

Check()