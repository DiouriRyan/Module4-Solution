var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
//For loop
for (var i=0 ; i<names.length ; i++) {

    var firstLetter = names[i].charAt(0);
  firstLetterLow=firstLetter.toLowerCase(); // Could be improved 
  
  if (firstLetterLow=='j') {
     byeSpeaker.speak(names[i]);
  } else {
     helloSpeaker.speak(names[i]);
  }

}



