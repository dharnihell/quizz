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
  
  new Question("Brass gets discoloured in air because of the presence of which of the following gases in air?", ["Oxygen", "Hydrogen sulphide", "Carbon dioxide", "Nitrogen"], "Hydrogen sulphide"),
  new Question("Which of the following is a non metal that remains liquid at room temperature?", ["Phosphorous", "Bromine", "Chlorine", "Helium"], "Bromine"),
  new Question("Chlorophyll is a naturally occuring chelate compound in which central metal is?", ["magnessium", "copper", "iron", "calcium"], "magnessium"),
  new Question("Which of the following is used in pencils?", ["Graphite", "Silicon", "Charcoal", "Phosphorous"], "Graphite"),
  new Question("Which of the following metals forms an amalgam with other metals?", ["Tin", "Zinc", "Lead", "Mercury"], "Mercury"),
  new Question("Chemical formula for water?", ["NaAlO2", "Al2O2", "H2O", "CaSiO3"], "H2O"),
  new Question("The gas usually filled in the electric bulb is?", ["nitrogen", "hydrogen", "carbon dioxide", "oxygen"], "nitrogen"),
  new Question("Washing soda is the common name for?", ["Sodium carbonate", "Calcium bicarbonate", "Sodium bicarbonate", "Calcium carbonate"], "Sodium carbonate"),
  new Question("Quartz crystals normally used in quartz clocks etc.. is chemically?", ["sodium silicate", "germanium oxide", "mixture of both", "silicon dioxide"], "silicon dioxide"),
  new Question("Which of the gas is not known as green house gas?", ["Methane", "Nitrous oxide", "Hydrogen", "carbon dioxide"], "Hydrogen"),
  new Question("Bromine is a?", ["black solid", "red liquid", "colourless gas", "inflammable gas"], "red liquid"),
  new Question("The hardest substance available on earth is?", ["Gold", "Iron", "Diamond", "Platinum"], "Diamond"),
  new Question("The variety of coal in which the deposit contains recognisable traces of the original plant material is?", ["bitumen", "anthracite", "lignite", "peat"], "peat"),
  new Question("Which of the following is used as a lubricant?", ["Graphite", "Silica", "Iron Oxide", "Diamond"], "Graphite"),
  new Question("The inert gas which is substituted for nitrogen in the air used by deep sea divers for breathing, is?", ["Argon", "Xenon", "Helium", "Krypton"], "Helium"),
  new Question("The property of substance to absorb moisture from the air on exposure is called?", ["osmosis", "deliquescence", "efflorescence", "desiccation"], "Helium"),
  new Question("The average salinity of sea water is?", ["3%", "3.5%", "2.5%", "2%"], "3.5%"),
  new Question("Galvanised iron sheets have a coating of?", ["lead", "chromium", "zinc", "tin"], "zinc"),
  new Question("The chemical (ethyl mercaptan) added to the otherwise odourless LPG cooking gas for imparting a detectable smell to the gas is a compound of?", ["bromine", "fluorine", "chlorine", "sulphur"], "sulphur"),
  new Question("The element common to all acids is?", ["Hydrogen", "carbon", "sulphur", "oxygen"], "Hydrogen"),
  new Question("Non stick cooking utensils are coated with?", ["Teflon", "PVC", "black paint", "polystyrene"], "Teflon")
  
 
]; 

// create quiz 
var quiz = new Quiz(questions); 

// display quiz 
populate(); 





