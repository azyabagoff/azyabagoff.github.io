<?php 
  echo readfile("https://azyabagoff.github.io/Sites/Voting/config.txt");
?>

var votes = document.getElementById("votes").innerHTML =localStorage.getItem("voting");
if (!votes) 
{
  votes = document.getElementById("votes").innerHTML ="0 votes";
}
counter = votes[0];

function upvote() 
{
  counter++;

  var upv = document.getElementById("votes").innerHTML = counter +" votes";

  localStorage.setItem("voting", upv);
}

function downvote() 
{
  counter--;

  var downv = document.getElementById("votes").innerHTML = counter +" votes";

  localStorage.setItem("voting", downv);
}
