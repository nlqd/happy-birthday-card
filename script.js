let button = document.getElementById("btn");

button.onclick = () => {
    let text = document.getElementById("txt");
    let congratsMessage = document.getElementById("message");
    congratsMessage.innerHTML = "Happy birthday to " + text.value + "!";
}


