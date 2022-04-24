let button = document.getElementById("btn");
let text = document.getElementById("txt");

button.onclick = () => {
    let congratsMessage = document.getElementById("message");
    congratsMessage.innerHTML = "Happy birthday to " + text.value + "!";
}

document.body.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        event.preventDefault();
        button.click();
    }
});