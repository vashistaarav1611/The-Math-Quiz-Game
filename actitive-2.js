function addUser(){
 player1name = document.getElementById("player1_name_input").value;
 player2name = document.getElementById("player2_name_input").value;
 
 localStorage.setItem("Player 1 Name",player1name);
 localStorage.setItem("Player 2 Name",player2name);
 
 window.location.replace("game_page.html");
}