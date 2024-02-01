let userscore = 0;
let compscore= 0;

let pictures = document.querySelectorAll(".pic");
let message = document.querySelector(".msg"); 

const userscoring  = document.querySelector(".userscore");  
const compscoring = document.querySelector(".computer_score");

let computer_choice = () => {
    const choices = ["rock", "paper", "scissor"];
    const index = Math.floor(Math.random() * 3);
    return choices[index];
};

let drawgame = () => {
    message.innerText = "Draw!";
    message.style.backgroundColor ="#3d5a80";
};
 
const scoring = (userwin, compchoice, user_choice) =>{
     if(userwin){
       userscore++;
       message.innerText =`You Won! your ${user_choice} beats ${compchoice}.`;
       message.style.backgroundColor = "green";
       userscoring.innerText = userscore;
      
     }
     else{
        compscore++;
        message.innerText = `You lost! ${compchoice} beats ${user_choice}.`;
        message.style.backgroundColor = "red";
        compscoring.innerText = compscore;
     }
};

    const playgame = (user_choice) => {
     const compchoice = computer_choice();
     console.log(` ${compchoice} is comp choice`);

     if(user_choice === compchoice){
       drawgame();
     }
     else{
        let userwin = true;
        if(user_choice === "rock"){
          userwin = compchoice === "paper"? false: true;
        }
        else if(user_choice === "paper"){
        userwin = compchoice === "scissor"? false: true;
        }
        else{
            userwin = compchoice === "rock" ? false : true;
            }
            scoring(userwin, compchoice, user_choice);
        }
};

    pictures.forEach((pic) => {
     pic.addEventListener ( "click", () => {
     const user_choice = pic.getAttribute("id");
     console.log(`you selected ${user_choice}`);
     playgame(user_choice);
     });
 });