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
enterButton.onclick = function createBookmark() {
  addBookmark = document.createElement("article");
  var bookmarkArea = document.querySelector(".add-bookmark");
  bookmarkArea.appendChild(addBookmark);
  addBookmark.classList.add("bookmark-container");
  addWebName();
  addUrl();
  addButtons();
}

function addWebName() {
  var webTitle = document.querySelector(".website-title");
  var webName = document.createTextNode(webTitle.value);
  var namePara = document.createElement("p");
  addBookmark.appendChild(namePara);
  namePara.appendChild(webName);
  namePara.classList.add("bookmark-name");
  addHr();
}

function addUrl() {
  var webUrl = document.querySelector(".website-url");
  var addLink = document.createElement("a");
  var addWebUrl = document.createTextNode(webUrl.value);
  addBookmark.appendChild(addLink);
  addLink.appendChild(addWebUrl);
  addLink.classList.add("url-styling");
  addHr();
}

function addHr() {
  var addHr = document.createElement("hr");
  addBookmark.appendChild(addHr);
}

function addButtons() {
  var newReadButton = document.createElement("button");
  var readButtonTitle = document.createTextNode("Read");
  var newDeleteButton = document.createElement("button");
  var deleteButtonTitle = document.createTextNode("Delete");
  addBookmark.appendChild(newReadButton);
  newReadButton.appendChild(readButtonTitle);
  newReadButton.classList.add("not-read");
  addBookmark.appendChild(newDeleteButton);
  newDeleteButton.appendChild(deleteButtonTitle);
  newDeleteButton.classList.add("delete");
}
