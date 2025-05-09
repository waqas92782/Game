let userScrore = 0;
let computerSc = 0;

let Choices = document.querySelectorAll(".choise");

let mas = document.getElementById("msg");
let counterU = document.getElementById("usercounter");

let counterC = document.getElementById("c-counter");

let computerchoise = () => {
    let options = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

let gamedwar = () =>{
    mas.innerText = "Game was Dwar";
    mas.style.backgroundColor = "blue";
}

let showwiner = (userwin)=>{
    if(userwin){
        mas.innerText = "You Are Win!";
        mas.style.backgroundColor = "green";
        userScrore += 1;
        counterU.innerText = userScrore
    }
    else{
        mas.innerText = " Uff You Are Lose.";
        mas.style.backgroundColor = "red";
        computerSc += 1;
        counterC.innerText = computerSc;
    }
}

let playgame = (userchoices) => {
    console.log(userchoices);
    let computerFinal = computerchoise();
    console.log(computerFinal);

    if(userchoices === computerFinal){
        gamedwar()
    }
    else{
        let userwin = true;
        if(userchoices === "rock"){
            userwin = computerFinal === "paper" ? false : true;
        }
        else if(userchoices === "paper"){
            userwin = computerFinal === "scissors" ? false : true;
        }
        else{
            userwin = computerFinal === "rock" ? false : true;
        }
        showwiner(userwin);
        
    }

}

Choices.forEach((choise) => {
    choise.addEventListener(("click"), () => {
        let userchoices = choise.getAttribute("id");
        playgame(userchoices);
    })
})


