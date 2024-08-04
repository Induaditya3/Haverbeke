/* Write a function min that takes two arguments and returns their minimum. */
function min(a, b) {
    if (a > b) return b; 
    else return a;
}
//author's version - exactly same

/* We’ve seen that % (the remainder operator) can be used to test whether a
number is even or odd by using % 2 to see whether it’s divisible by two. Here’s
another way to define whether a positive whole number is even or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
way to fix this?
*/
function isEven(x) {
    if (x == 0) return true;
    else if (x == 1) return false;
    else {
        if (x > 0) return isEven(x -2);
        else return isEven(x + 2);
    }
}
// author's version 
function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
  }

/* Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string.
Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function. */
function countChar(str,char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (char == str[i]) {
            count +=1;
        }
    }
    return count;
}
function countBs(str) {
    return countChar(str,"B");
}
// author's version - basically same