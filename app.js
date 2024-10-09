const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");

const lastUsers = document.getElementById("last-user");

const ui = new UI();
const github = new Github();

eventListeners();

function eventListeners() {
  githubForm.addEventListener("submit", getData);
  clearLastUsers.addEventListener("click", clearAllSearched);
  document.addEventListener("DOMContentLoaded", getAllSearched);
}

function getData(e) {
  let username = nameInput.value.trim();

  if (username === "") {
    alert("Lütfen Geçerli Bir Kullanıcı Adı Giriniz.");
  } else {
    github
      .getGithubData(username)
      .then((response) => {
        if (response.user.message === "Not Found") {
          ui.showError("Kullanıcı Bulunamadı...");
        } else {
          ui.showUserInfo(response.user);
          ui.showRepoInfo(response.repo);
        }
      })
      .catch((err) => showError(err));
  }
  ui.clearInput();
  e.preventDefault();
}

function clearAllSearched() {}

function getAllSearched() {}
