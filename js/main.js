(function(){
alert('Welcome to ninja quiz');
console.log("By Default function is called");

const btn = document.querySelector("#rainbow");
function change(){
const rainbowColors = ['red','orange','yellow','green','blue','rebeccapurple','violet'];
    document.body.style.background = rainbowColors[Math.floor(7*Math.random())];
    //console.log(7*Math.random(),Math.random());
    //console.log(6*Math.random());
}

btn.addEventListener("click",change,false);

const interPolationage = 29;

    let myAge = `I am younger than Alexa by ${interPolationage - 1} years`;
    //document.querySelector('#myAge').innerHTML = myAge;
//const question= `what is Superman's real name?`;
//const answer = prompt(question);
//document.querySelector('#newQuestion').innerHTML = `You have answered ${answer}`;


const quiz= [['what is Superman\'s real name','Clark Kent'],["What is Wonder Woman's real name?","Diana Prince"],
["What is Batman's real name?","Bruce Wayne"]];

let score = 0;

document.querySelector('#quiz').addEventListener('click',takeQuiz,false);

function takeQuiz(){
    for(const[question,answer] of quiz){
        const response = prompt(question);
        //console.log(response,question);
        if(response === answer){
           alert("Correct!");
            score++;
        }else{
            alert("Incorrect!");
        }
    }
    alert(`You have scored ${score} point${score !==1 ?'s' : ''}`);
}

    })();
