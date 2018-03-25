var readButton = document.querySelector(".not-read");
var deleteButton = document.querySelector(".delete");
var container = document.querySelector(".bookmark-container");

function addRead() {
  deleteButton.classList.add("read");
  readButton.classList.add("read");
  container.classList.add("read");
}

function removeRead() {
  deleteButton.classList.remove("read");
  readButton.classList.remove("read");
  container.classList.remove("read");
}

readButton.onclick = function changeStatus() {
  if (container.style.backgroundColor === "#F2F4F4") {
    removeRead();
  } else {
    addRead();
  }
}