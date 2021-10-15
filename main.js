function adduser()
player1_name = document.getElementById("player1_name_input").value
player2_name = document.getElementById("player2_name_input").value

localStorage.setItem("player1_name",player1_name);
localStorage.setItem("player2_name",player2_name);

window.location = "gamepage.html";
{
    player1_name = localStorage.getItem("player1_name");
    player2_name = localStorage.getItem("player2_name");
    
    document.getElementById(player_1_name)innerhtml = player_1 + ":"
    document.getElementById(player_2_name)innerhtml = player_2 + ":"
    
    document.getElementById(player_1_name)innerhtml = player1_score;
    document.getElementById(player_2_name)innerhtml = player_2_score;
    
    document.getElementById(player_question)innerhtml = "question_turn -" + player1_name
    document.getElementById(player_answer)innerhtml = "answer_turn -" + player2_name
}