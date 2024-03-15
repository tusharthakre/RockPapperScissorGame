let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genComChoice = () =>{
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3) 
    return options[randIdx];

};

const drowGame = ()=>{

    
    msg.innerText = "Game Was Drow.  Play again "
    msg.style.backgroundColor = "#081b31";


};

const shorWinner = (userWin , computerChoice , userChoice)=>{
    if(userWin){
        userScore ++;
        userScorePara.innerText = userScore;
        
        msg.innerText = `  You Win ! Your ${userChoice} beats ${computerChoice}` ;
        msg.style.backgroundColor = "Green";
        

    }
    else{
        compScore ++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose . ${userChoice} beats Your  ${computerChoice}`;
        msg.style.backgroundColor = "Red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = " , userChoice);
    // generate comptuer choice -> modular
    const computerChoice = genComChoice();
    console.log("comp choice = " , computerChoice)

    if(userChoice === computerChoice ){
        drowGame() 

    }
    else {
        let userWin = true;
        if(userChoice === "rock") {  
            // scissors , paper
            userWin =  computerChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){ 
            // rock , scisssors 
            computerChoice === "scissors" ? false : true;

        }
        else {
            // rock , paper 
          userWin =   computerChoice === "rack" ? false : true;
        }

        shorWinner(userWin  ,userChoice , computerChoice)


         
    }
};



choices.forEach((choice)=>{

    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked ", userChoice)
        playGame(userChoice);
        
    });
});