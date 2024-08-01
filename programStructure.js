/*
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
 */

// my version
for (let i = 0; i < 7; i += 1){
    for (let j = 0; j < i + 1; j +=1){
        process.stdout.write('#')
    }
    console.log()
}

// author's version
for (let line = "#"; line.length < 8; line += "#")
    console.log(line);

/*
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).
*/

// my version
for (let i = 1; i < 101; i += 1){
    if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz")
    else if (i % 3 == 0) console.log("Fizz")
    else if (i % 5 == 0) console.log("Buzz")
    else console.log(i)
}

// author's version
for (let i = 1; i <= 100; i++){
    let output = "";
    if (i % 3 == 0) output += "Fizz";
    if (i % 5 == 0) output += "Buzz";
    console.log(output || i);
}

/*
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/

// my version
let size = 8;
let width = size;
let height = size;
let output = ""
for (let i = 0; i < height; i++){
    for (let j = 0; j < width; j++){
        if ((i+j) % 2 == 0) output += " ";
        else output += "#";
    }
    output += "\n";
}
console.log(output)

// author's version - basically same - just different binding names
