let user=0;
let comp=0;
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");
let msgs=document.querySelector("#msg");
const choices=document.querySelectorAll(".gm-btn");

const genCompchoice=()=>{
    const option=["Rock","Paper","Scissor"];
    const randromindex=Math.floor(Math.random()*3);
    return option[randromindex];
}

const drawGame=()=>{
    console.log("draw");
    msgs.innerText="The Game Draw Tough Fight";
}

const showWinner=(userWin,user_choose,comchoice)=>{
    if(userWin){
        user++;
        userScorePara.innerText=user;
        console.log("Win");
        msgs.innerText=`${user_choose}  beats  ${comchoice}`;
    }else{
        comp++;
        compScorePara.innerText=comp;
        console.log("Loose");
        msgs.innerText=`${comchoice}    beats  ${user_choose}`;
        
    }
}

const playGame=(user_choose)=>{
    console.log("User Choosed: ",user_choose);
    //generate computer choice
    const comchoice=genCompchoice();
    console.log("computer choosed: ",comchoice);
    if(user_choose===comchoice){
        //draw Game
        drawGame();
    }else{
        let userWin=true;
        if(user_choose==="Rock"){
            //comp=scissor,paper
            userWin=comchoice==="Paper"?false:true;
        }else if(user_choose==="Paper"){
            //comp=rock,scissor
            userWin=comchoice==="Scissor"?false:true;
        }else{
            userWin=comchoice==="Rock"?false:true;
        }
        showWinner(userWin,user_choose,comchoice);
    }
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const user_choose=choice.getAttribute("id");
        playGame(user_choose);
    })
})