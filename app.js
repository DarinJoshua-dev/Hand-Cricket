var userScore=0;
var computerScore=0;
var c;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("comp-score");
const scorBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const one_div=document.getElementById("O");
const two_div=document.getElementById("T");
const three_div=document.getElementById("Th");
const four_div=document.getElementById("F");
const five_div=document.getElementById("Fi");
const six_div=document.getElementById("S");
let bat_b=document.getElementById("bat");
let bowl_b=document.getElementById("bowl");
function getComputerChoice(){
    const choices= [1,2,3,4,5,6];
    const randomNumber=Math.floor(Math.random() * 6);
    return choices[randomNumber];
}
function bat(runs){
    userScore+=runs;
    console.log("USER SCORES" + userScore + "RUNS");
    userScore_span.innerHTML=userScore;
}
function user_out(userChoice,computerChoice){
    result_p.innerHTML=`User: ${userChoice} & Comp: ${computerChoice} so USER IS OUT, Please click on Bowl button to Bowl to the COMP `;
    userScore=0;
    function comp_bat(){
    one_div.addEventListener('click', function(){
        game_2(1);
    })
    two_div.addEventListener('click', function(){
        game_2(2);
    })
    three_div.addEventListener('click', function(){
        game_2(3);
    })
    four_div.addEventListener('click', function(){
        game_2(4);
    })
    five_div.addEventListener('click', function(){
        game_2(5);
    })
    six_div.addEventListener('click', function(){
        game_2(6);
    })
}
    comp_bat();
}
function game_1(userChoice){
    const computerChoice=getComputerChoice();
    result_p.innerHTML=`USER is Batting & COMP is Bowling :`+ ` ` + computerChoice;
    console.log("computer:"+computerChoice);
    if(userChoice!=computerChoice)
    {
        bat(userChoice);
    }
    if(userChoice==computerChoice){
        user_out(userChoice,computerChoice);
        userScore=0;
    }
}
function bowl(runs){
    computerScore+=runs;
    console.log("COMPUTER SCORES" + computerScore + "RUNS");
    computerScore_span.innerHTML=computerScore;
    }
function comp_out(userChoice,computerChoice){
    result_p.innerHTML=`Comp: ${computerChoice} & User: ${userChoice} so COMP IS OUT, Please click on Bat buttton to Bat against the COMP `;
    computerScore=0;
    function user_bat(){
    one_div.addEventListener('click', function(){
        game_1(1);
    })
    two_div.addEventListener('click', function(){
        game_1(2);
    })
    three_div.addEventListener('click', function(){
        game_1(3);
    })
    four_div.addEventListener('click', function(){
        game_1(4);
    })
    five_div.addEventListener('click', function(){
        game_1(5);
    })
    six_div.addEventListener('click', function(){
        game_1(6);
    })
}
   user_bat();
}
function game_2(userChoice){
    const computerChoice=getComputerChoice();
    result_p.innerHTML=`USER is Bowling  & COMP is Batting :` + ` ` + computerChoice;
    console.log("computer:"+computerChoice);
    if(computerChoice!=userChoice){
        bowl(computerChoice);
    }
    if(computerChoice==userChoice){
        comp_out(userChoice,computerChoice);
        computerScore=0;
    }
}
function user(){
    one_div.addEventListener('click', function(){
        game_1(1);
    })
    two_div.addEventListener('click', function(){
        game_1(2);
    })
    three_div.addEventListener('click', function(){
        game_1(3);
    })
    four_div.addEventListener('click', function(){
        game_1(4);
    })
    five_div.addEventListener('click', function(){
        game_1(5);
    })
    six_div.addEventListener('click', function(){
        game_1(6);
    })
}
function comp(){
    one_div.addEventListener('click', function(){
        game_2(1);
    })
    two_div.addEventListener('click', function(){
        game_2(2);
    })
    three_div.addEventListener('click', function(){
        game_2(3);
    })
    four_div.addEventListener('click', function(){
        game_2(4);
    })
    five_div.addEventListener('click', function(){
        game_2(5);
    })
    six_div.addEventListener('click', function(){
        game_2(6);
    })
}
user_main=(choice)=>{
    c=choice;
    if(choice==1)
    {
        user();
    }
    if(choice==0)
    {
        comp();
    }
    
}