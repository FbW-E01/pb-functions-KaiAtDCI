function addUpIntegers (numberOfIntegers) {
    let result = 0;
    for (let i = 1; i <= numberOfIntegers; i++) {
        result += i;
    }
    return result;
}

console.log(addUpIntegers(4));