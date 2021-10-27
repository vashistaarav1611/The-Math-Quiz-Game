player1name = parseInt(localStorage.getItem("Player 1 Name"));
player2name = parseInt(localStorage.getItem("Player 2 Name"));

player1_score = localStorage.getItem("score1");
player2_score = localStorage.getItem("score2");

document.getElementById("player1_name").innerHTML = player1name + " : ";
document.getElementById("player2_name").innerHTML = player2name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name;

function send() {
 number1 = document.getElementById("number1").value;
 number2 = document.getElementById("number2").value;
 actual_answer = parseInt(number1) * parseInt(number2);
 console.log(actual_answer);

 question_number = "<h4>" + number1 + "x" + number2 + "</h4>";
 input_box = "<br>Answer :<input type='text' id='input_check_box'>";
 check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
 row = question_number + input_box + check_button;
 document.getElementById("output").innerHTML = row;
 document.getElementById("number1").value = "";
 document.getElementById("number2").value = "";
}
question_turn = "1";
answer_turn = "2";

function check() {
 get_answer = document.getElementById("input_check_box").value;
 if (get_answer == actual_answer) {
  if (answer_turn == "2") {
   player1_score = player1_score + 1;
   document.getElementById("player1_score").innerHTML = player1_score;
  } else {
   player2_score = player2_score + 1;
   document.getElementById("player2_score").innerHTML = player2_score;
  }

  if (question_turn == "2") {
   question_turn = "1";
   document.getElementById("player_question").innerHTML = "Question Turn - " + player1name;
  } else {
   question_turn = "2";
   document.getElementById("player_question").innerHTML = "Question Turn - " + player2name;
  }

  if (answer_turn == "2") {
   answer_turn = "1";
   document.getElementById("player_answer").innerHTML = "answer Turn - " + player1name;
  } else {
   answer_turn = "2";
   document.getElementById("player_answer").innerHTML = "answer Turn - " + player2name;
  }

  document.getElementById("output").innerHTML = "";
 }
}
function save(){
 localStorage.removeItem("score1");
 localStorage.removeItem("score2");
 localStorage.setItem("score1",player1_score);
 localStorage.setItem("score2",player2_score);
}
