"use strict";

var currentGame;
var xmlhttp;
var currentUser;

function loadPageInfo(){

  currentGame = Cookies.get('quizGame');
  if(currentGame != null)
  {
    createAjaxObj();
    loadNav();
    openQuiz();
  }
  else
  {
    alert("Loading content");
    createAjaxObj();
    loadNav();
    alert("Navbar added");
    openRegPage();
  }

}

function loadNav()
{
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("topNav").innerHTML =
      this.responseText;
    }
  };
  xmlhttp.open("GET", "../pages/navBar.html", true);
  xmlhttp.send();
}

function getName(){
  //var currentUser = $.cookie('user');
  currentUser = Cookies.get('quizGame');
  alert('User name is ' + currentUser.name);

}

function setData(credentials, pswd){
  var user = { name: credentials, password: pswd, question: 1, score: 0, q1: "NA", q2: "NA", q3: "NA", q4: "NA", q5: "NA" };
  Cookies.set('quizGame', user);
  currentUser = user;
  //$.cookie('user', user);
  openQuiz();
}

function createAjaxObj()
{
  xmlhttp = new XMLHttpRequest();

}

function openRegPage()
{
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("main-view").innerHTML =
      this.responseText;
    }
  };
  xmlhttp.open("GET", "../pages/register.html", true);
  xmlhttp.send();
}

function retrieveInfo()
{
  var name=document.getElementById('username').value;
  var password=document.getElementById('pwd').value;
  setData(name, password);
}

function openQuizPage()
{
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("main-view").innerHTML =
      this.responseText;
      getQuestions();
    }
  };
  xmlhttp.open("GET", "../pages/quizGame.html", true);
  xmlhttp.send();
}

function getQuestions()
{
  document.getElementById("titleHead").innerHTML = "Welcome " + currentUser.name;
  document.getElementById("questionNumb").innerHTML = "Question " + currentUser.question;
  $("#Q" + currentUser.question).show();
}

function right()
{
  $(document).ready(function(){
    $("#Q" + currentUser.question).click(function(){
      $("#Q" + currentUser.question).hide();
      currentUser.question++;
      $("#Q" + currentUser.question).fadeIn(3000);
    });
  });
  currentUser.score += 20;
  if(currentUser.question == 1)
  {
    currentUser.q1 = "Correct";
  }
  else if (currentUser.question == 2) {
    currentUser.q2 = "Correct";
  }
  else if (currentUser.question == 3) {
    currentUser.q3 = "Correct";
  }
  else if (currentUser.question == 4) {
    currentUser.q4 = "Correct";
  }
  else
  {
    currentUser.q5 = "Correct";
  }
  Cookies.set('quizGame', currentUser);
  if(currentUser.question > 5)
  {
    window.alert("Your Score Is: " + currentUser.score);
    document.getElementById("mark").value = currentUser.score;
    document.getElementById("sub").click();
  }
}

function wrong()
{
  $(document).ready(function(){
    $("#Q" + currentUser.question).click(function(){
      $("#Q" + currentUser.question).hide();
      currentUser.question++;
      $("#Q" + currentUser.question).fadeIn(3000);
    });
  });
  if(currentUser.question == 1)
  {
    currentUser.q1 = "Wrong";
  }
  else if (currentUser.question == 2) {
    currentUser.q2 = "Wrong";
  }
  else if (currentUser.question == 3) {
    currentUser.q3 = "Wrong";
  }
  else if (currentUser.question == 4) {
    currentUser.q4 = "Wrong";
  }
  else
  {
    currentUser.q5 = "Wrong";
  }
  Cookies.set('quizGame', currentUser);
  if(currentUser.question > 5)
  {
    window.alert("Your Score Is: " + currentUser.score);
    document.getElementById("mark").value = currentUser.score;
    loadPhpWithjQuery();
  }
}

function restartGame()
{
  currentUser.score = 0;
  currentUser.question = 1;
  Cookies.set('quizGame', currentUser);
}

function loadLeader()
{

}

function loadResult()
{
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("main-view").innerHTML =
      this.responseText;
      getResults();
    }
  };
  xmlhttp.open("GET", "../pages/resultsPage.html", true);
  xmlhttp.send();
}

function getResults()
{
  document.getElementById("rUsername").innerHTML = currentUser.name;
  document.getElementById("rScore").innerHTML = currentUser.score;
  document.getElementById("rQ1").innerHTML = currentUser.q1;
  document.getElementById("rQ2").innerHTML = currentUser.q2;
  document.getElementById("rQ3").innerHTML = currentUser.q3;
  document.getElementById("rQ4").innerHTML = currentUser.q4;
  document.getElementById("rQ5").innerHTML = currentUser.q5;

}


function loadPhpWithjQuery()
{
  var posting = $.post( "../php/writeToJson.php", {
  data: JSON.stringify(currentUser),
} );
  posting.done(function( data ) {
    // var content = $( data ).find( "#content" );
    // $( "#result" ).empty().append( content );
    loadResults();
  });
}
