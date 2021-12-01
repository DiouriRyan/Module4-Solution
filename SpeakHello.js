
(function (window) {
    var helloSpeaker = {};
var speakWord = "Hello";
//speak Method
helloSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
}
//Exposing the 'helloSpeaker' object to the global scope
window.helloSpeaker=helloSpeaker;
})(window);
