let usrScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");


const genCompChoice = () =>{
    let options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}


const showWinne= (userwin) =>
{
    if(userwin){
        usrScore++;
        msg.innerText="You win!";
        msg.style.backgroundColor= "green"
        user.innerText=usrScore;
    }else{
        compScore++;
        msg.innerText="You Lose.";
        msg.style.backgroundColor="red"
        comp.innerText=compScore;


    }
}

const drawGame = () => {
    msg.innerText="Game Was Draw . Play again";
    msg.style.backgroundColor='#081b31'


}

const playGame=(userChoice) => {
    const compChoice=genCompChoice();

    if(userChoice === compChoice)
    {
        drawGame();
    }
    else
    {
        let userwin=true;
        if(userChoice === "rock"){
            userwin = compChoice ==="paper"? false : true;
        }else if(userChoice === "paper"){
            userwin = compChoice ==="scissors" ? false : true;
        }else{
            userwin = compChoice ==="rock" ? false : true;
        }

        showWinne(userwin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
