const target = document.getElementById("content");
const content = window.mpeApp.getMpeContent();

if (content.trim().length === 0) {
  target.textContent = "The file 'mpe' is currently empty.";
} else {
  target.textContent = content;
}
