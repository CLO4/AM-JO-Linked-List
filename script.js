var readButton = document.querySelector(".not-read");
var deleteButton = document.querySelector(".delete");
var container = document.querySelector(".bookmark-container");
var enterButton = document.querySelector(".enter-button");

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
  if (container.classList.contains("read")) {
    removeRead();
  } else {
    addRead();
  }
}

enterButton.onclick = function() {
  var para = document.createElement("p");
  var node = document.createTextNode("This is New");
  para.appendChild(node);
  var bookmarkArea = document.querySelector(".bookmark-area");
  bookmarkArea.appendChild(para);
};

