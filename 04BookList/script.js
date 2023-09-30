function addBook() {
    let title = document.getElementById("titleInput").value;
    let author = document.getElementById("authorInput").value;
    
    if (title === "" || author === "") {
        alert("Please fill in both fields.");
        return;
    }
    
    let bookList = document.getElementById("bookList");
    let li = document.createElement("li");
    li.textContent = `${title} by ${author}`;
    bookList.appendChild(li);

    li.addEventListener("click", function() {
        this.remove();
    });

    document.getElementById("titleInput").value = "";
    document.getElementById("authorInput").value = "";

    
}
