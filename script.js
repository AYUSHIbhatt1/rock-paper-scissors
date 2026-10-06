let images = document.querySelectorAll(".icon");
let compmsg=document.getElementById("compmsg");
let usermsg=document.getElementById("usermsg");
let score = document.getElementsByClassName("score");
let user=document.getElementById("user");
let computer=document.getElementById("computer");
let msg=document.getElementById("msg");

let userwin=0;
let compwin=0;
function computerchoice() {
    const options = ["rock", "paper", "scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}
function checkwinner(userchoice, compchoice) {
 usermsg.innerText = "your choice is: " + userchoice;
 compmsg.innerText = "Computer choice is: " + compchoice;
    if (userchoice == compchoice) {
        msg.innerText=" matched is draw";
        msg.style.backgroundColor="black";

    }

    if (userchoice == "paper" && compchoice == "rock") {
         msg.innerText="you win";
         msg.style.backgroundColor="green";
         userwin++;
         user.innerText=userwin;
         
    }

    if (userchoice == "paper" && compchoice == "scissor") {
         msg.innerText="you lose";
         msg.style.backgroundColor="red";
         compwin++;
         computer.innerText=compwin;
    }

    if (userchoice == "rock" && compchoice == "paper") {
         msg.innerText="you lose";
         msg.style.backgroundColor="red";
         compwin++;
         computer.innerText=compwin;
    }

    if (userchoice == "rock" && compchoice == "scissor") {
        msg.innerText="you win";
         msg.style.backgroundColor="green";
         userwin++;
          user.innerText=userwin;
    }

    if (userchoice == "scissor" && compchoice == "rock") {
       
         msg.innerText="you lose";
         msg.style.backgroundColor="red";
 compwin++;
         computer.innerText=compwin;
    }

    if (userchoice == "scissor" && compchoice == "paper") {
       msg.innerText="you win";
         msg.style.backgroundColor="green";
         userwin++;
          user.innerText=userwin;
    }
}
function playgame(userchoice) {
    const compchoice = computerchoice();
    checkwinner(userchoice, compchoice);
}
for (let image of images) {
    image.addEventListener("click", () => {
        let userchoice = image.getAttribute("id");
        playgame(userchoice);

    });
}