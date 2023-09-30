let darkThemeEnabled = false;

function switchTheme() {
    if (darkThemeEnabled) {
        document.body.classList.remove("dark-theme");
    } else {
        document.body.classList.add("dark-theme");
    }
    darkThemeEnabled = !darkThemeEnabled;
}
