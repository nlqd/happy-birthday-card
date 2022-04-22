const personalName = prompt("What's your name?");

let congratsMessage = document.getElementById("message");
congratsMessage.innerHTML = "Happy birthday to " + personalName + "!";
