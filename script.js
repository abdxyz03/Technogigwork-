document.addEventListener("DOMContentLoaded", function () {
    console.log("Technogigwork Loaded!");

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function(button) {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            alert("Coming Soon!");
        });
    });
});
