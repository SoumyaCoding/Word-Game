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
function send(){
    get_word = document.getElementById("Word").value;
    word = get_word.toLowerCase();
    
    charAt1 = word.charAt(1);
    
    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide_2);
    
    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    
    remove_charAt1 = word.replace(charAt1, "_")
    remove_charAt2 = remove_charAt1.replace(charAt2, "_")
    remove_charAt3 = remove_charAt2.replace(charAt3, "_")
    
    question_word = "<h4 id= 'word_displa'> Q." +remove_charAt3+"</h4>"
    input_box = "<br>Answer : <input type='text' id= 'input_check_box'>";
    check_button = <br><br><button class= 'btn btn-info' onclick='check()'>Check</button>;
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
    
}

function check()
{
  get_word = document.getElementById("Word").value;
    word = get_word.toLowerCase();
    if(answer == word)
    {
        if(answer_turn == ("player1")
        {
            player1_score = player_1_score +1
            document.getElementById("player1_score").innerHTML = player1_score;
        }
    {
        else
              player2_score = player_1_score +1
            document.getElementById("player2_score").innerHTML = player2_score;
    }
    }
   if(question_turn == "player1")
       {
           question_turn = "player2"
           document.getElementById("player2_score").innerHTML = "Question Turn-"+ player2_score
       }
       {
           else
               question_turn = "player1"
           document.getElementById("player1_score").innerHTML = "Question Turn-"+ player1_score
       }
{
    if(answer_turn = "player1")
         answer_turn_turn = "player2"
           document.getElementById("player2_score").innerHTML = "Answer Turn-"+ player2_score
}
{
    else
         answer_turn_turn = "player1"
           document.getElementById("player1_score").innerHTML = "Answer Turn-"+ player1_score
}
 document.getElementById("output").innerHTML="";
}