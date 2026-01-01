// 🔐 Correct password for unlock
const correctPassword = "divya2026";

function unlock() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (input === correctPassword) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
  } else {
    error.innerText = "Wrong password ❤️ Only Divya can open this";
  }
}

function showFinal() {
  document.getElementById("final").classList.remove("hidden");
}
