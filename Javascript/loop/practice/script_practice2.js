let gameNumber=7;
let UserNumber=prompt("Guess the Game Number: ");
while(gameNumber!=UserNumber){
    UserNumber=prompt("Guess again you guess wrong number: ");
}
console.log("Congratulation You guessed Right number: ",UserNumber);