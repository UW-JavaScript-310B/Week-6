/**
 * Toggles "done" class on <li> element
 */
$("ul").on("click", function(e) {
  e.target.parentElement.classList.toggle("done");
});

/**
 * Delete element when delete link clicked
 */
 $("ul").on("click", function(e) {
  if(e.target.className === 'delete') {
    e.target.parentElement.remove();
  }
});

/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  e.preventDefault();
  const listItemText = $('input').val();
  $("ul").append(`<li><span>${listItemText}</span><a class="delete">Delete</a></li>`);
};

$(".add-item").on("click", function(e) {
  if(e.target.parentElement.firstElementChild.value) {
    addListItem(e);
  }
});
