/**
 * @file index.js
 * @fileoverview Store bookmarks from input fields to localstorage and provide <a> tag links to them.
 */

// debug and Localstorage
document.addEventListener("DOMContentLoaded", () => {
  loadBookmarks();
  console.info("Application initialized");
});

const addbookmarkBtn = document.querySelector("#add-bookmark");
const bookmarkList = document.querySelector("#bookmark-list");
const bookmarkNameInput = document.querySelector("#bookmark-name");
const bookmakrUrlInput = document.querySelector("#bookmark-url");

addbookmarkBtn.addEventListener("click", function () {
  const name = bookmarkNameInput.value.trim();
  const url = bookmakrUrlInput.value.trim();

  if (!name || !url) {
    alert("please provide both name and URL.");
    return;
  } else {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      alert("Please enter a Valid URL starting with http:// or https://");
      return;
    }

    addbookmark(name,url);
    saveBookmarks(name,url);
    bookmarkNameInput.value = "";
    bookmakrUrlInput.value = "";
  }
});

function addbookmark(name, input) {
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.href = url;
  link.textContent = name;
  link.target = "_blank";

  const removeLink = document.createElement("button");
  removeLink.textContent = "Remove";
  removeLink.addEventListener("click", () => {
    bookmarkList.removeChild(li);
    removeBookmarkFromStorage();
  });

  li.appendChild(link);
  li.appendChild(removeLink);
  bookmarkList.appendChild(li);
}

function getBookmarksFromStorage() {
  const bookmarks = localStorage.getItem("bookmarks");
  return bookmarks ? JSON.parse(bookmarks) : [];
}

function saveBookMark() {
  const bookmarks = getBookmarksFromStorage();
  bookmarks.push({name,url});
  localStorage.setItem("boookmarks", JSON.stringify(bookmarks));
}

// TODO: implement function
function loadBookmarks() {}