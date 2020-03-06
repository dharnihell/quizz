function populate() { 
  if(quiz.isEnded()) { 
      showScores(); 
  } 
  else { 
      // show question 
      var element = document.getElementById("question"); 
      element.innerHTML = quiz.getQuestionIndex().text; 

      // show options 
      var choices = quiz.getQuestionIndex().choices; 
      for(var i = 0; i < choices.length; i++) { 
          var element = document.getElementById("choice" + i); 
          element.innerHTML = choices[i]; 
          guess("btn" + i, choices[i]); 
      } 

      showProgress(); 
  } 
}; 

function guess(id, guess) { 
  var button = document.getElementById(id); 
  button.onclick = function() { 
      quiz.guess(guess); 
      populate(); 
  } 

}; 


function showProgress() { 
  var currentQuestionNumber = quiz.questionIndex + 1; 
  var element = document.getElementById("progress"); 
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length; 
}; 

function showScores() { 
  var gameOverHTML = "<h1>Result</h1>"; 
  gameOverHTML += "<h2 id='score'> Your score is: " + quiz.score + " out " + " of " + quiz.questions.length + " Questions </h2>"; 
  var element = document.getElementById("quiz"); 
  element.innerHTML = gameOverHTML; 
}; 

// create questions 
var questions = [ 
  
  new Question("Which football club is Called 'The Troters' ?", ["Aresnal fc", "Wigan Athletic", "Barcelona", "Bolton"], "Bolton"),
  new Question("What is the nick name of the English National Team?", ["Three Lion", "Ten Goliats", "Queens Boys", "Three Hypos"], "Three Lion"),
  new Question("What is the Spanish football League Called?", ["Seria A", "Bundusliga", "La liga", "Premiership"], "La liga"),
  new Question("Which football club is called 'The Mapies'?", ["Chelsea fc", "Newcastle United", "Arsenal fc", "Manchester United"], "Newcastle United"),
  new Question("When Cuco Martina scored against Arsenal this season he became the first representative of which national team to score in the Primary League'?", ["Dominica", "Cape Verde", "Curacao", "Burundi"], "Curacao"),
  new Question("All four home nations - England, Scotland, Wales and Northern Ireland - played at the 1958 world cup. where did it take place'?", ["Brazil", "Sweden", "France", "Switzerland"], "Sweden"),
  new Question("Which city has the most clubs competing in it's country's top divison?", ["Moscow", "Rome", "Tokyo", "London"], "London"),
  new Question("How many of the 20 clubs in MLS are based in Canada?", ["Three", "One", "Five", "Seven"], "Three"),
  new Question("In which country would you find the world's largest football stadium(by capacity)?", ["Spain", "North Korea", "Mexico", "China"], "North Korea"),
  new Question("Eibar made their debut in la liga in 2014. which current premier league player had a brief spell with the club?", ["Jesus Navas", "Cesar Azpilicueta", "David Silva", "Ayoze Perez"], "David Silva"),
  new Question("which club has won the Oceania Champions League for the last five seasons?", ["Waitakere United", "Auckland City", "Wellington Phoenix", "Team Wwllington"], "Auckland City"),
  new Question("Which club have been Croatian league champions for the last 10 years?", ["Slaven Belupo", "Hajduk Split", "Dinamo Zagreb", "HNK Rijeka"], "Dinamo Zagreb"),
  new Question("Who finished the 2014-2015 Ligue 1 season as top scorer?", ["Edinson Cavani", "Alexandre Lacazette", "Zlatan Ibrahimovic", "Andre Ayew"], "Alexandre Lacazette"),
  new Question("Which club have won the most Seria A titles?", ["Roma", "Milan", "Internazionale", "Juventus"], "Juventus"),
  new Question("Who won the 2015 Africa Cup of Nations?", ["South Africa", "Ivory Coast", "Ghana", "Egypt"], "Ivory Coast"),
  new Question("Who were the last French club to play in a Champions League final?", ["Marseille", "Saint-Etienne", "Paris Saint-Germain", "As Monaco"], "As Monaco"),
  new Question("Where was Saido Berahino born?", ["Kenya", "South Africa", "Burundi", "England"], "Burundi"),
  new Question("Diego Forlan signed for which Japanese club in 2014?", ["Jubilo Iwata", "Urawa Red Diamonds", "Fc Tokyo", "Cerozo Osaka"], "Cerozo Osaka"),
  new Question("In what country would you find the home of Santa Claus?", ["Finland", "Sweden", "Norway", "Denmark"], "Finland"),
  new Question("In What year did a Dutch team last win a European club competition?", ["1978", "1997", "2002", "2013"], "2002"),
  new Question("Which Country has steve Kean Managed?", ["Thailand", "brunei", "Singapore", "Malaysia"], "brunei"),
 
]; 

// create quiz 
var quiz = new Quiz(questions); 

// display quiz 
populate(); 





