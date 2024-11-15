// Toggle Skills Button Script
var toggleSkillsButton = document.getElementById("toggle-skills");
var skillsList = document.getElementById("skills-list");
toggleSkillsButton.addEventListener("click", function () {
    if (skillsList.classList.contains("hidden")) {
        skillsList.classList.remove("hidden");
    }
    else {
        skillsList.classList.add("hidden");
    }
});
