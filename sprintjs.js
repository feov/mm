let useAddition = false;
let useSubtraction = false;
let useMultiplication = false;
let useDivision = false;

let addDigit1 = 1;
let addDigit2 = 1;
let subDigit1 = 1;
let mulDigit1 = 1;
let divDigit1 = 1;
let subDigit2 = 1;
let mulDigit2 = 1;
let divDigit2 = 1;

let selecteddigit;

const changeDigit = function(digit, change){
    if (change === "inc"){
        eval(digit + " += 1");
    } else {
        eval(digit + " -= 1");
    }

    if (eval(digit) < 1){
        eval(digit + " = 9");
    } else if (eval(digit) > 9){
        eval(digit + " = 1");
    }

    selecteddigit = document.querySelector(`div.${digit.slice(0,3)} .${digit.slice(3,9)} p`);
    selecteddigit.innerHTML = eval(digit);
}

const additionButton = document.querySelector("#addition");
const subtractionButton = document.querySelector("#subtraction");
const multiplicationButton = document.querySelector("#multiplication");
const divisionButton = document.querySelector("#division");
const startButton = document.querySelector(".startbutton");

const timerp = document.querySelector("#timer");


const toggleAddition = function(){
    useAddition = !useAddition;
    if (useAddition){
        additionButton.style.backgroundColor = "rgb(40,90,0)";
        document.querySelector(".add").style.display = "inline-block";
    } else{
        additionButton.style.backgroundColor = "rgb(47, 47, 47)";
        document.querySelector(".add").style.display = "none";
    }
    if ((useAddition || useSubtraction) || (useMultiplication || useDivision)){
        startButton.style.display = "inline-block";
    } else {
        startButton.style.display = "none";
    }
}
const toggleSubtraction = function(){
    useSubtraction = !useSubtraction;
    if (useSubtraction){
        subtractionButton.style.backgroundColor = "rgb(40,90,0)";
        document.querySelector(".sub").style.display = "inline-block";
    } else{
        subtractionButton.style.backgroundColor = "rgb(47, 47, 47)";
        document.querySelector(".sub").style.display = "none";
    }
    if ((useAddition || useSubtraction) || (useMultiplication || useDivision)){
        startButton.style.display = "inline-block";
    } else {
        startButton.style.display = "none";
    }
}
const toggleMultiplication = function(){
    useMultiplication = !useMultiplication;
    if (useMultiplication){
        multiplicationButton.style.backgroundColor = "rgb(40,90,0)";
        document.querySelector(".mul").style.display = "inline-block";
    } else{
        multiplicationButton.style.backgroundColor = "rgb(47, 47, 47)";
        document.querySelector(".mul").style.display = "none";
    }
    if ((useAddition || useSubtraction) || (useMultiplication || useDivision)){
        startButton.style.display = "inline-block";
    } else {
        startButton.style.display = "none";
    }
}
const toggleDivision = function(){
    useDivision = !useDivision;
    if (useDivision){
        divisionButton.style.backgroundColor = "rgb(40,90,0)";
        document.querySelector(".div").style.display = "inline-block";
    } else{
        divisionButton.style.backgroundColor = "rgb(47, 47, 47)";
        document.querySelector(".div").style.display = "none";
    }
    if ((useAddition || useSubtraction) || (useMultiplication || useDivision)){
        startButton.style.display = "inline-block";
    } else {
        startButton.style.display = "none";
    }
}
const mainMenu = function(){
    window.location.href = "index.html";
}

let intervalID;

const increaseTime = function(){
    timer += 1;
    timerp.innerText = "Time: " + timer.toString();
}

const startSprint = function(){
    if (!useDivision || divDigit1 > divDigit2){
    document.querySelector("section").parentNode.removeChild(document.querySelector("section"));
    document.querySelector("#playArea").style.display = "inline-block";
    document.querySelector("#questionArea").style.display = "inline-block";
    document.querySelector("input").style.display = "inline-block";
    document.querySelectorAll("p.info").forEach(item => {
        item.style.display = "inline-block";
    });
    document.querySelectorAll(".question").forEach(item => {
        item.style.display = "inline-block";
    });
    inputfield.focus();
    generateQuestion();
    intervalID = setInterval(increaseTime, 1000);
    console.log(intervalID);
    }
}

// PLAYING SPRINT // // PLAYING SPRINT // // PLAYING SPRINT // // PLAYING SPRINT // // PLAYING SPRINT // 
// PLAYING SPRINT // // PLAYING SPRINT // // PLAYING SPRINT // // PLAYING SPRINT // // PLAYING SPRINT // 
// PLAYING SPRINT // // PLAYING SPRINT // // PLAYING SPRINT // // PLAYING SPRINT // // PLAYING SPRINT // 

const inputfield = document.querySelector("#inputAnswer");
const oninputt = function(){
   if (inputfield.value.length >= 19){
    inputfield.value = inputfield.value.slice(0,18)
   }
}
const focusback = function(){
    inputfield.focus();
}

const progressp = document.querySelector("#progress");
let timer = 0;
let progress = 0;
let deathcount = 0;
let numbers;
let operator;
let correctanswer;
let randomint;

let ptag1 = document.querySelector("#number1");
let ptag2 = document.querySelector("#number2");

let tempdigdiff;
let tempnumber2;
let tempanswer;
let failPenalty = 5;

let removeOneFromScore;

const randomizeNumbers = function(digits1, digits2){
   if (operator == "+" || (operator == "-" || operator == "*")){
   return [Math.floor(Math.random()*(10**digits1)), Math.floor(Math.random()*(10**digits2))];
   } else {
    tempnumber2 = Math.floor(Math.random()*(10**digits2));
    tempdigdiff = digits1 - tempnumber2.toString().length;
    tempanswer = Math.floor(Math.random()*(10**tempdigdiff));
    return [tempanswer * tempnumber2, tempnumber2];
   }

}

const generateQuestion = function(){
    randomint = Math.floor(Math.random()*4)+1; // sets operator variable to a random allowed mathematical operator
    switch (randomint) {
        case 1:
            if (useAddition){operator = "+";} else if (useSubtraction){operator = "-";} else if (useMultiplication){operator = "*";} else {operator = "/";}
            break;
        case 2:
            if (useSubtraction){operator = "-";} else if (useMultiplication){operator = "*";} else if (useDivision){operator = "/";} else {operator = "+";}
            break;
        case 3:
            if (useMultiplication){operator = "*";} else if (useDivision){operator = "/";} else if (useAddition){operator = "+";} else {operator = "-";}
            break;
        case 4:
            if (useDivision){operator = "/";} else if (useAddition){operator = "+";} else if (useSubtraction){operator = "-";} else {operator = "*";}
            break;    
    }
    // checks allowed digits for mathematical operator and then randomizes the numbers and calculates correct answer.
    if (operator == "+"){
        numbers = randomizeNumbers(addDigit1, addDigit2);
    } else if (operator == "-"){
        numbers = randomizeNumbers(subDigit1, subDigit2);
    } else if (operator == "*"){
        numbers = randomizeNumbers(mulDigit1, mulDigit2);
    } else {
        numbers = randomizeNumbers(divDigit1, divDigit2);
        if (numbers[1] == 0){
            numbers[1] = 1;
        }
    }
    correctanswer = eval("numbers[0]" + operator + "numbers[1]");

    //sets p tags to display question
    ptag1.innerText = numbers[0].toString();
    ptag2.innerText = operator + " " + numbers[1].toString();
}

const won = function(){
clearInterval(intervalID);
inputfield.disabled = "true";

document.querySelector("body").style.backgroundColor = "rgb(17,122,26)";
document.querySelector("#questionArea").style.display = "none";
document.querySelector("#timer").style.display = "none";
document.querySelector("#progress").style.display = "none";
document.querySelector("input").parentNode.removeChild(document.querySelector("input"));
let backbutton = document.querySelector(".backbutton");
backbutton.style.top = "70%";
backbutton.style.left = "45%";
document.querySelector("#youwon").style.display = "inline-block";
document.querySelector("#finaltime").style.display = "inline-block";
document.querySelector("#finaldeaths").style.display = "inline-block";
document.querySelector("#finaltime").innerText = "Final Time: " + timer.toString();
document.querySelector("#finaldeaths").innerText = "Deathcount: " + deathcount.toString();
}

const checkanswer = function(){
    if (inputfield.value == correctanswer){ // ACTIVATES IF THE PLAYER ANSWERS CORRECTLY
        document.querySelector("#incorrect").style.display = "none";
        document.querySelector("#givescorrectanswer").style.display = "none";
        document.querySelector("#givesyouranswer").style.display = "none";
        if (!removeOneFromScore){
        progress += 1;
        progressp.innerText = progress.toString() + " / 40";
        if (progress >= 40){ won(); }
        } else {
        removeOneFromScore = false;
        intervalID = setInterval(increaseTime, 1000);
        }
        inputfield.value = "";
        generateQuestion();
    } else { // ACTIVATES IF THE PLAYER ANSWERS INCORRECTLY
        if (removeOneFromScore != true){
        clearInterval(intervalID);
        deathcount += 1;

        document.querySelector("#incorrect").style.display = "inline-block";
        document.querySelector("#givescorrectanswer").style.display = "inline-block";
        document.querySelector("#givesyouranswer").style.display = "inline-block";

        document.querySelector("#incorrect").innerText = "Incorrect: " + failPenalty.toString() + " Seconds Added";
        document.querySelector("#givescorrectanswer").innerText = "Correct Answer: " + correctanswer.toString();
        document.querySelector("#givesyouranswer").innerText = "You Answered: " + inputfield.value;

        timer += failPenalty;
        timerp.innerText = "Time: " + timer.toString();

        removeOneFromScore = true;
        inputfield.value = "";
        failPenalty += 1;
        }
    }
}



