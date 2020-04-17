'use strict'

var today = new Date();
var hourNow = today.getHours();
var greeting;
var trueFan = 'nope';

function welcome() {
    alert('Welcome to the Shire!') 
}
welcome();

var userName = prompt('What is your name?');

function morningOrAfternoon(){
    if (hourNow > 12 ) {
        greeting = 'Good afternoon';
    } else if (hourNow > 0 ) {
        greeting = 'Good morning';
    } else {
        greeting = 'Welcome';
    }
    document.write('<h2>'+ greeting + ' ' + userName + '!' + '</h2>');
    return greeting ;
}

while( (trueFan != 'yes') && (trueFan != 'no') ){
    trueFan = prompt('Are you a true fan? (yes or no)').toLowerCase();
}

if(trueFan === 'no'){
    alert('You are at the right place to learn about Lord of the Rings. Enjoy the journey into Middle Earth!');
} else {
    guessRings();
}

function guessRings() {

    var correctAnswer = 20;

    for(var i = 0; i < 3; i++){
        var numberGuess = prompt('How many Rings of Power are there?');
        if(numberGuess == correctAnswer){
            alert('You are a true fan, enjoy the jouney into Middle Earth');
            break;
        } else {
            alert('Sorry, please try again!');
        }
        if (i == '2') {
            alert('You should rewatch the trilogy');

        }
    }
}

