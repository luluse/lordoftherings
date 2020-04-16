'use strict'
var today = new Date();
var hourNow = today.getHours();
var greeting;

function welcome() {
    alert('Welcome to my website!') 
}

function morningOrAfternoon(){
    if (hourNow > 10) {
        greeting = 'Good afternoon';
    } else if (hourNow > 0 ) {
        greeting = 'Good morning';
    } else {
        greeting = 'Welcome';
    }
    document.write('<h3>'+ greeting + ' ' + userName + '!' + '</h3>');
    return greeting ;
}
welcome();

var userName = prompt('What is your name?')
