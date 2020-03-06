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
  
  new Question("The parliament of Nigeria is called?", ["House of Rep", "Senate", "House of Assemble", "National Assemble"], "National Assemble"),
  new Question("Democracy day is celebrated in Nigeria on?", ["Oct 1", "Jan 12", "May 29", "June 12"], "June 12"),
  new Question("How many members make up the house of representative in Nigeria?", ["280", "774", "360", "359"], "360"),
  new Question("How many members makeup senate in the upper arm of the national assembly?", ["100", "108", "109", "110"], "109"),
  new Question("Nigeria is divided into how many geopolitical zones?", ["5", "6", "7", "8"], "6"),
  new Question("Nigeria flag was created by?", ["Aina Onabolu", "Wole Soyinka", "Taiwo Akinkumi", "Ben Odiase"], "Taiwo Akinkumi"),
  new Question("How many local governments do we have in Nigeria?", ["744", "774", "747", "784"], "774"),
  new Question("Who was the first military head of state?", ["Muritala Muhammed", "Ibrahim Babangida", "Aguiyi Ironsi", "Gen Idiagbon"], "Aguiyi Ironsi"),
  new Question("Who stopped the killing of twins in calabar?", ["Henry Townsend", "Herbert Marculey", "Mongo Park", "Mary Slessor"], "Mary Slessor"),
  new Question("Nigeria became a republic in what year?", ["May 29, 1999", "Jan 15, 1966", "Oct 1, 1960", "Oct 1, 1963"], "Oct 1, 1963"),
  new Question("Which state is referred to as 'The Sunshine State' ?", ["Ekiti state", "Ondo state", "Jigawa state", "Oyo state"], "Ondo state"),
  new Question("The Nigeria flag was designed by Taiwo Akinkumi in what year?", ["1957", "1959", "1960", "1963"], "1959"),
  new Question("The amalgamation of the northern and southern protectorates and colony of Lagos was in what year?", ["1959", "1914", "1963", "1960"], "1914"),
  new Question("Nigeria celebrated her last centenary anniversary in what year?", ["2000", "2014", "2020", "1990"], "2014"),
  new Question("Who is the current Minister of Education in Nigeria?", ["Rukkayat Rufai", "Adamu Adamu", "Prof Adedapo Afolabi", "Prof Wole Soyinka"], "Adamu Adamu"),
  new Question("The state with list number local government in Nigeria is?", ["Zamfara", "Lagos", "Bayelsa", "Anambra"], "Bayelsa"),
  new Question("Which state is referred to as the 'Centre Of Excellence' ?", ["Ekiti", "Ondo", "Lagos", "Oyo"], "Lagos"),
  new Question("Which state is referred to as the 'The Gateway State' ?", ["Ekiti", "Ogun", "Jigawa", "Oyo"], "Ogun"),
  new Question("Nigeria civil war started in what year?", ["1967", "1970", "1966", "1985"], "1967"),
  new Question("The Aba women riot took place in what year?", ["1930", "1929", "1928", "1927"], "1929"),
  
    
 
]; 

// create quiz 
var quiz = new Quiz(questions); 

// display quiz 
populate(); 





