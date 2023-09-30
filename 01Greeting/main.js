function updateGreeting() {
    let name = document.getElementById("nameInput").value;
    document.getElementById("intro").innerText = "Hello, " + name + "!";
}
