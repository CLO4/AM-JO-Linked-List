var readButton = document.querySelector(".not-read");
var deleteButton = document.querySelector(".delete");
var container = document.querySelector(".bookmark-container");
var enterButton = document.querySelector(".enter-button");
var inputTitle = document.querySelector(".website-title");
var inputUrl = document.querySelector(".website-url");
var addBoxes = document.querySelector(".add-bookmark");


// ------------------------Function to check user input for validity
enterButton.onclick = function validateInput () {
  if (inputTitle.value === "" || inputUrl.value === "") {
    alert("Please Enter a Title and URL");
  } else {
    createBookmark();
  }
}

//---------Event listeners to check for added values in input fields
inputTitle.addEventListener("keyup", toggleButton);
inputUrl.addEventListener("keyup", toggleButton);

//------------------------EnterButton toggle when inputs are present
function toggleButton () {
  var disabled;
  if (inputTitle.value === "" && inputUrl.value === "") {
    enterButton.disabled = true;
  } else {
    enterButton.disabled = false;
  }
}

//--------------Functions to create new Bookmark and enter user info
function createBookmark() {
  var newBookmark = document.createElement("article");
  var bookmarkArea = document.querySelector(".add-bookmark");
  bookmarkArea.appendChild(newBookmark);
  newBookmark.classList.add("bookmark-container");
  addWebName(newBookmark);
  addUrl(newBookmark);
  addButtons(newBookmark);
}

function addWebName(newBookmark) {
  var webTitle = document.querySelector(".website-title");
  var webName = document.createTextNode(webTitle.value);
  var namePara = document.createElement("p");
  newBookmark.appendChild(namePara);
  namePara.appendChild(webName);
  namePara.classList.add("bookmark-name");
  addHr(newBookmark);
}

function addUrl(newBookmark) {
  var webUrl = document.querySelector(".website-url");
  var addLink = document.createElement("a");
  var addWebUrl = document.createTextNode(webUrl.value);
  newBookmark.appendChild(addLink);
  addLink.appendChild(addWebUrl);
  addLink.classList.add("url-styling");
  addHr(newBookmark);
}

function addHr(newBookmark) {
  var addHr = document.createElement("hr");
  newBookmark.appendChild(addHr);
}

function addButtons(newBookmark) {
  var newReadButton = document.createElement("button");
  var readButtonTitle = document.createTextNode("Read");
  var newDeleteButton = document.createElement("button");
  var deleteButtonTitle = document.createTextNode("Delete");
  newBookmark.appendChild(newReadButton);
  newReadButton.appendChild(readButtonTitle);
  newReadButton.classList.add("not-read");
  newBookmark.appendChild(newDeleteButton);
  newDeleteButton.appendChild(deleteButtonTitle);
  newDeleteButton.classList.add("delete");
}

// --------------------------Create Bookmark functionality elements
function changeStatus(event) {
  var bookMark = event.target.parentElement;
  if (bookMark.classList.contains("read")) {
    removeRead(bookMark);
  } else {
    addRead(bookMark);
  }
}

// Background button color toggle ON 
function addRead(bookMark) {
  bookMark.querySelector(".not-read").classList.add("read");
// bookMark.querySelector(".delete").classList.add("read");
  bookMark.classList.add("read");
}

// Background button color toggle OFF
function removeRead(bookMark) {
  bookMark.classList.remove("read");
}

// read button functionality
addBoxes.onclick =function readDamit() {
  var readButton = event.target
  if (event.target.matches('.not-read')) {
    console.log('helloooo');
    changeStatus(event);
  }
}

// Working Delete for original container
addBoxes.onclick = function deleteBookmark() {
  console.log('shit');
  var deleteButton = event.target
  if (deleteButton.matches('.delete')) {
    deleteButton.closest('.bookmark-container').remove()
  }
}
