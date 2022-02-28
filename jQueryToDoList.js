/**
 * Toggles "done" class on <li> element
 */

/**
 * Delete element when delete link clicked
 */

/**
 * Adds new list item to <ul>
 */
const addListItem = function (e) {
  console.log("addList");
  e.preventDefault();
  const text = $("input").val();
  //const $newLi = $("<li>");
  $todayList = $("ul.today-list");
  const $newLi = $(`<li><span>${text}</span><a class="delete">Delete</a></li>`);
  $todayList.append($newLi);

  // rest here...
};

// add listener for add

// If an li element is clicked, toggle the class "done" on the <li>

// If a delete link is clicked, delete the li element / remove from the DOM

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

const addListItemTemp = function (event) {
  event.preventDefault();
  const input = this.parentNode.getElementsByTagName("input")[0];
  console.log(input);
  const inputElement = input.parentNode;
  console.log(inputElement);
  const listElement = inputElement.previousElementSibling;
  console.log(listElement);
  const text = input.value;
  const listItem = document.createElement(`li`);
  const listSpan = document.createElement(`span`);
  const listATag = document.createElement(`a`);
  listSpan.innerText = text + " ";
  listATag.setAttribute("class", "delete");
  listATag.innerText = "Delete";
  listElement.appendChild(listItem);
  listItem.appendChild(listSpan);
  listItem.appendChild(listATag);
  listSpan.addEventListener("click", clickListItem);

  const lastRow =
    event.target.parentNode.previousElementSibling.querySelector(
      "li:last-child"
    );
  document.querySelector("ul.today-list li:last-child");
  const deleteButton = lastRow.querySelector(".delete");
  deleteButton.addEventListener("click", deleteListItem);
};

const clickListItem = function (event) {
  //this.toggleClass(".done");
  this.parentNode.classList.toggle("done");
};

const deleteListItem = function (event) {
  this.parentNode.remove();
};

$addButton = $(".add-item");
$listItem = $("ul.today-list li span");
console.log($listItem);
$addButton.on("click", addListItem);
$listItem.on("click", clickListItem);
$delete = $(".delete");
$delete.on("click", deleteListItem);
