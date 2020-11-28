console.log("Hello World!");
var ComputerScore = 0;
var UserScore = 0;
var Draw = 0;
const computerbar_div = document.getElementById("computer_bar");
const userbar_div = document.getElementById("user_bar");
const drawbar_div = document.getElementById("draw_bar");

const Computerscore_div = document.getElementById("user_score");
const Userscore_div = document.getElementById("computer_score");
const Draw_div = document.getElementById("draw");

const rock_div = document.getElementById("R");
const paper_div = document.getElementById("P");
const scissor_div = document.getElementById("S");
const simulate_div = document.getElementById("Sim");

const message_p = document.getElementById("Message");
const message2_p = document.getElementById("Message2");
const messager_p = document.getElementById("MessageR");

function computer_choice(){
	const choices = ["r","p","s"];
	const RandomNumber = Math.floor(Math.random()*3);
	return choices[RandomNumber];
}

function compute_winner(choices){
	switch(choices){
		case "rs":
		case "pr":
		case "sp":
			messager_p.innerHTML = "User Wins!";
			UserScore++;
			Userscore_div.innerHTML = UserScore;
			break;
		case "rp":
		case "sr":
		case "ps":
			messager_p.innerHTML = "Computer Wins!";
			ComputerScore++;
			Computerscore_div.innerHTML = ComputerScore;
			break;
		case "rr":
		case "pp":
		case "ss":
			messager_p.innerHTML = "Its a Draw!";
			Draw++;
			Draw_div.innerHTML = Draw;
			break;
	}
}

function game(userchoice){
	if(userchoice == "r"){
		message_p.innerHTML = "You Chose Rock!";
	}
	else if(userchoice == "p"){
		message_p.innerHTML = "You Chose Paper!";
	}
	else if(userchoice == "s"){
		message_p.innerHTML = "You Chose Scissors!"
	}
	else{
		message_p.innerHTML = "ERROR!"
	}
	const computer = computer_choice();
	if(computer == "r"){
		message2_p.innerHTML = "I Chose Rock!";
	}
	if(computer == "p"){
		message2_p.innerHTML = "I Chose Paper!";
	}
	if(computer == "s"){
		message2_p.innerHTML = "I Chose Scissors!";
	}
	choices = userchoice+computer;
	compute_winner(choices);

}

function simulate_game(){
	var count = 0;
	while(count<=100000){
	setTimeout( function(){
			const user = computer_choice();
			const computer = computer_choice();
			choices = user+computer;
			compute_winner(choices);
		},10);
	count++;
	}
}

function main(){

	rock_div.addEventListener('click', function() {
		game("r");
	})
	paper_div.addEventListener('click', function() {
		game("p");
	})
	scissor_div.addEventListener('click', function() {
		game("s");
	})
	simulate_div.addEventListener('click', function() {
		simulate_game();
	})

}

main();