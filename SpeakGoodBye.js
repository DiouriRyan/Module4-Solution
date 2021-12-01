
(function (window) {
    var byeSpeaker = {};
var speakWord = "Good Bye";
//speak Method
byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}
//Exposing the 'byeSpeaker' object to the global scope
window.byeSpeaker = byeSpeaker;
})(window);
