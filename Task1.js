// 1.Check palindrome or not ?
// Using for loop

// console.log(isPalindrome(121));
// console.log(isPalindrome(-121));

function isPalindrome(num) {
    const str = num.toString();
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome(121));             
console.log(isPalindrome(-121));   