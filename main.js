function capitalize(str) {
    let firstLetter = str.charAt(0).toUpperCase(); // M
    let restOfStr = str.slice(1);
    return firstLetter + restOfStr;
}

function reverseString(str) {
    let revStr = str.split('').reverse().join('');
    return revStr;
}

export { capitalize, reverseString };
