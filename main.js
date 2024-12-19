function capitalize(str) {
    let firstLetter = str.charAt(0).toUpperCase(); // M
    let restOfStr = str.slice(1);
    return firstLetter + restOfStr;
}

function reverseString(str) {
    let revStr = str.split('').reverse().join('');
    return revStr;
}

const calculator = (() => {
    function add(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
    function divide(a, b) {
        return a / b;
    }
    function multiply(a, b) {
        return a * b;
    }
    return { add, subtract, divide, multiply };
})();

function caesarCipher(str, num) {
    num = num % 26;
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let charCode = char.charCodeAt(0);

        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(
                ((charCode - 65 + num + 26) % 26) + 65
            );
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(
                ((charCode - 97 + num + 26) % 26) + 97
            );
        } else {
            result += char;
        }
    }
    return result;
}

function analyzeArray(arr) {
    if (arr.length === 0) {
        return { average: 0, min: 0, max: 0, length: 0 };
    }
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        average: sum / arr.length,
        min: min,
        max: max,
        length: arr.length,
    };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
