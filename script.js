var enterButton = document.querySelector(".enter-button");
var inputTitle = document.querySelector(".website-title");
var inputUrl = document.querySelector(".website-url");
var links = 0;
var readLinks = 0;
var unreadLinks = 0;

// ------------------------Function to check user input for validity
enterButton.onclick = function validateInput () {
  if (inputTitle.value === "" || inputUrl.value === "") {
    alert("Please Enter a Title and URL");
  } else {
    createBookmark();
    moreLinks();
    moreUnreadLinks();
  }
}


//---------Event listeners to check for added values in input fields
inputTitle.addEventListener("keyup", toggleButton);
inputUrl.addEventListener("keyup", toggleButton);

function removeRead(bookMark) {
  bookMark.querySelector(".not-read").classList.remove("read");
  bookMark.querySelector(".delete").classList.remove("read");
  bookMark.classList.remove("read");
  bookMark.querySelector(".not-read").style.color = "#455A64";
}

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
  newReadButton.addEventListener('click', changeStatus);
  newDeleteButton.addEventListener('click', removeContainer);
}

function removeContainer(event) {
    var bookMark = event.target.parentElement;
    bookMark.remove();
    lessLinksByDelete();
  }

// --------------------------Create Bookmark functionality elements
function addRead(bookMark) {
  console.log(bookMark);
  bookMark.querySelector(".not-read").classList.add("read");
  bookMark.querySelector(".delete").classList.add("read");
  bookMark.classList.add("read");
  bookMark.querySelector(".not-read").style.color = "red";
  
}


function changeStatus(event) {
  var bookMark = event.target.parentElement;
  if (bookMark.classList.contains("read")) {
    removeRead(bookMark);
    linkNotRead();
    moreUnreadLinks();
  } else {
    addRead(bookMark);
    linkRead();
    lessUnreadLinks();
  } 
}

function lessLinksByDelete() {
  links--;
  var linkLog = document.querySelector(".link-log");
  linkLog.innerText = "There is/are " + links + " link(s)";
}

function moreLinks() {
  links++;
  var linkLog = document.querySelector(".link-log");
  linkLog.innerText = "There is/are " + links + " link(s)";
}

function linkRead() {
  var readLog = document.querySelector('.read-links');
    readLinks++;
    readLog.innerText = "There is/are " + readLinks + " read link(s)";
  }

function linkNotRead() {
  var readLog = document.querySelector('.read-links');
  readLinks--;
  readLog.innerText = "There is/are " + readLinks + " read link(s)";
}

function moreUnreadLinks() {
  var unreadLog = document.querySelector('.unread-links');
  unreadLinks++;
  unreadLog.innerText = " and " + unreadLinks + " unread link(s)";

}

function lessUnreadLinks() {
  var unreadLog = document.querySelector('.unread-links');
  if (unreadLinks < 0) {
    unreadLinks = 0;
  } else {
    unreadLinks--;
  }  unreadLog.innerText = " and " + unreadLinks + " unread link(s)";
}

