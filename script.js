
const userProfile = {
    name: "Your developer profile",
    birthYear: 0,
    isDeveloper: true,
    hobbies: ["Gameplay programming", "Game design", "Prototyping"]
};

const profileForm = document.getElementById("profile-form");
const usernameInput = document.getElementById("username");
const birthYearInput = document.getElementById("birth-year");
const profileMessage = document.getElementById("profile-message");
const projectForm = document.getElementById("project-form");
const projectInput = document.getElementById("project-input");
const projectList = document.getElementById("project-list");
const projectMessage = document.getElementById("project-message");

function displayProfile() {
    const currentYear = new Date().getFullYear();
    const hobbyCount = userProfile.hobbies.length;
    document.getElementById("profile-name").textContent = userProfile.name;
    document.getElementById("profile-hobbies").textContent =
        userProfile.hobbies[0] + ", " + userProfile.hobbies[1] + ", " + userProfile.hobbies[2];
    document.getElementById("hobby-count").textContent = hobbyCount;
    if (userProfile.isDeveloper) {
        document.getElementById("profile-role").textContent = "Game developer";
    } else {
        document.getElementById("profile-role").textContent = "Game enthusiast";
    }
    birthYearInput.setAttribute("max", currentYear);
    if (userProfile.birthYear === 0) {
        document.getElementById("profile-year").textContent = "Not set";
        document.getElementById("profile-age").textContent = "Not set";
    } else {
        const age = currentYear - userProfile.birthYear;
        document.getElementById("profile-year").textContent = userProfile.birthYear;
        document.getElementById("profile-age").textContent = age;
    }
}

function resetProfileMessage() {
    profileMessage.textContent = "Submit your details to update your developer profile.";
    profileMessage.style.color = "var(--hub-muted)";
}

function showProfileInputError() {
    profileMessage.textContent = "Enter a name of 2-50 characters and a whole birth year from 1900 to " + new Date().getFullYear() + ".";
    profileMessage.style.color = "var(--hub-error)";
}

function updateProfile(event) {
    event.preventDefault();
    const birthYear = Number(birthYearInput.value);
    const currentYear = new Date().getFullYear();
    if (usernameInput.value.length < 2 || usernameInput.value.length > 50 ||
        birthYearInput.value === "" || birthYear < 1900 ||
        birthYear > currentYear || birthYear % 1 !== 0) {
        showProfileInputError();
        return;
    }
    userProfile.name = usernameInput.value;
    userProfile.birthYear = birthYear;
    displayProfile();
    profileMessage.textContent = "Your developer profile is up to date.";
    profileMessage.style.color = "var(--hub-success)";
}

function displayBoardState() {
    if (projectList.lastElementChild) {
        document.getElementById("board-empty").textContent = "Your next prototype could start here.";
    } else {
        document.getElementById("board-empty").textContent = "Your board is clear. Add your first game idea below.";
    }
}

function resetProjectMessage() {
    projectMessage.textContent = "Add your next game idea to the board.";
    projectMessage.style.color = "var(--hub-muted)";
}

function showProjectInputError() {
    projectMessage.textContent = "Enter a game idea of up to 200 characters, including a non-space character.";
    projectMessage.style.color = "var(--hub-error)";
}

function addProject(event) {
    event.preventDefault();
    if (projectInput.value === "" || projectInput.value.length > 200) {
        showProjectInputError();
        return;
    }
    const item = document.createElement("li");
    item.textContent = projectInput.value;
    projectList.appendChild(item);
    projectInput.value = "";
    displayBoardState();
    projectMessage.textContent = "Idea added to your project board.";
    projectMessage.style.color = "var(--hub-muted)";
}

function removeProject() {
    projectMessage.style.color = "var(--hub-muted)";
    if (projectList.lastElementChild) {
        projectList.lastElementChild.remove();
        displayBoardState();
        projectMessage.textContent = "Most recent idea removed.";
    } else {
        projectMessage.textContent = "Your board is already clear. Add an idea to get started.";
    }
}

profileForm.addEventListener("submit", updateProfile);
profileForm.addEventListener("input", resetProfileMessage);
usernameInput.addEventListener("invalid", showProfileInputError);
birthYearInput.addEventListener("invalid", showProfileInputError);
projectForm.addEventListener("submit", addProject);
projectInput.addEventListener("input", resetProjectMessage);
projectInput.addEventListener("invalid", showProjectInputError);
document.getElementById("remove-item").addEventListener("click", removeProject);
displayProfile();
displayBoardState();
