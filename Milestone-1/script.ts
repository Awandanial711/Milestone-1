// Toggle Skills Button Script
const toggleSkillsButton = document.getElementById("toggle-skills") as HTMLButtonElement;
const skillsList = document.getElementById("skills-list") as HTMLElement;

toggleSkillsButton.addEventListener("click", () => {
  if (skillsList.classList.contains("hidden")) {
    skillsList.classList.remove("hidden");
  } else {
    skillsList.classList.add("hidden");
  }
});
