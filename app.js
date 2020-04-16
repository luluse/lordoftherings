alert('Welcome to my website!') 

var userName = prompt('What is your name?')

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 12) {
    greeting = 'Good afternoon';
} else if (hourNow > 0 ) {
    greeting = 'Good morning';
} else {
    greeting = 'Welcome';
}


document.write('<h3>'+ greeting + ' ' + userName + '!' + '</h3>');