console.log("Hello World!");
var ComputerScore = 0;
var UserScore = 0;
var Draw = 0;

const computerbar_div = document.getElementById("computer_bar");
const userbar_div = document.getElementById("user_bar");
const drawbar_div = document.getElementById("draw_bar");
const winper_div = document.getElementById("win_per");
const lossper_div = document.getElementById("lose_per");
const drawper_div = document.getElementById("draw_per");

const Computerscore_div = document.getElementById("user_score");
const Userscore_div = document.getElementById("computer_score");
const Draw_div = document.getElementById("draw");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const simulate_div = document.getElementById("Sim");

const message_p = document.getElementById("Message");
const message2_p = document.getElementById("Message2");
const messager_p = document.getElementById("MessageR");


function computer_choice(){
	const choices = ["r","p","s"];
	const RandomNumber = Math.floor(Math.random()*3);
	return choices[RandomNumber];
}

function compute_winner(choice1,choice2){
	switch(choice1+choice2){
		case "rs":
		case "pr":
		case "sp":
			messager_p.innerHTML = "User Wins!";
			UserScore++;
			Userscore_div.innerHTML = UserScore;
			document.getElementById(choice1).classList.add("win");
			setTimeout(function(){			
				document.getElementById(choice1).classList.remove("win");
			},50)
			return "win";
			break;
		case "rp":
		case "sr":
		case "ps":
			messager_p.innerHTML = "User Lost!";
			ComputerScore++;
			Computerscore_div.innerHTML = ComputerScore;
			document.getElementById(choice1).classList.add("lose");
			setTimeout(function(){			
				document.getElementById(choice1).classList.remove("lose");
			},50)
			return "loss";
			break;
		case "rr":
		case "pp":
		case "ss":
			messager_p.innerHTML = "Its a Draw!";
			Draw++;
			Draw_div.innerHTML = Draw;
			document.getElementById(choice1).classList.add("draw");
			setTimeout(function(){			
				document.getElementById(choice1).classList.remove("draw");
			},50)
			return "draw";
			break;
	}
}

function game(userchoice){
	const computer = computer_choice();
	compute_winner(userchoice,computer);
}

function update_sim(result){
	var win_percent;
	var lose_percent;
	var draw_percent = 0;
	if(result == "win"){
		win_percent = 100*(UserScore/(UserScore+ComputerScore+Draw));
		user_bar.style.height = win_percent + "%";
		winper_div.innerHTML = Math.floor(win_percent) + "%";
	}
	else if(result == "loss"){
		lose_percent = 100*(ComputerScore/(UserScore+ComputerScore+Draw));
		computer_bar.style.height = lose_percent + "%";
		lossper_div.innerHTML = Math.floor(lose_percent) + "%";
	}
	else if(result == "draw"){
		draw_percent = 100*(Draw/(UserScore+ComputerScore+Draw));
		draw_bar.style.height = draw_percent + "%";
		drawper_div.innerHTML = Math.floor(draw_percent) + "%";
	}
}

function simulate_game(count){
	if(count < 10000){
	setTimeout( function(){
		    count++;
			const user = computer_choice();
			const computer = computer_choice();
			result = compute_winner(user,computer);
			update_sim(result);
			simulate_game(count);
			},10);
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
		simulate_game(0);
	})

}

main();