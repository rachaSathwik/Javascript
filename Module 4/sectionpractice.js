//Exercise 1: Write a piece of code that will write numbers from 100 to 0 to the console, but in steps of 10; so 100, 90, 80... etc.
let fn = prompt("Enter starting range",0);//returns string
let ln = prompt("Enter ending range",0);///returns string
if(fn<ln)
for(let i=ln;i>=fn;i-=10){//as subtraction is operation string is converted to Number by js engine.
    console.log(`${typeof i} ${i}`);
}

//best way
let upperLimit = Number(prompt("Enter upper limit"));
let lowerLimit = Number(prompt("Enter lower limit"));

if (!Number.isNaN(upperLimit) && !Number.isNaN(lowerLimit) && upperLimit > lowerLimit) {
    for (i = upperLimit; i >= lowerLimit; i -= 10) {
        console.log(i);
    }
}


//Exercise 6: Modify the calculator program that you made in Module 4 Section 2 in such a way that it will work in the loop until the user inputs Q in any of the prompt boxes.
while (true) {
    let firstNumber = prompt("Enter first number");
    let secondNumber = prompt("Enter second number");
    let operand = prompt("Enter operand (+, -, * or /)");
    let result;

    if (firstNumber === "Q" || secondNumber === "Q" || operand === "Q") {
        break;
    }

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
        switch (operand) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
            case "/":
                result = firstNumber / secondNumber;
                break;
            default:
                result = "Error: unknown operand";
        }
    } else {
        result = "Error: at least one of the entered values is not a number";
    }
    alert(result);
}

//Exercise 4: Write a program using a loop that will ask the user for the name of the movie (first prompt) and its rating from www.imdb.com (second prompt). The program will allow you to enter as many movies as you want into the movies array. Each element of the array will be an object, consisting of two fields: title and imdb. The input is completed if the user presses Cancel in the prompt dialog. Then the program should first print out to the console all movies that have a rating of less than 7, then those whose rating is greater than or equal to 7. Write the name of the movie and its rating next to each other, e.g.:

let movies = [];
while(true){
    let movie = prompt("Enter movie name:");
    let rating = prompt("Enter rating:");
    if(movie!==null && rating!==null){
        let mo = {
            title:movie,
            imdb:rating
        }
        movies.push(mo);
    }else{
        console.log("Less than 7 rated movies");
        for(let movie of movies){
            if(movie.imdb<7){
                console.log(movie.title);
            }
        }
        console.log("Equal or more than 7 rated movies")
        for(let movie of movies){
            if(movie.imdb>=7){
                console.log(movie.title);
            }
        }
        break;
    }
}