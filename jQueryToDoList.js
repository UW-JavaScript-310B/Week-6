$(document).ready(function() {
  /**
   * Toggles "done" class on <li> element
   */
  $("ul").on("click", function(e) {
    if($(e.target)[0].className !== 'delete') {
      $(e.target).parent().toggleClass("done");
    }
  });

  /**
   * Delete element when delete link clicked
   */
  $("ul").on("click", function(e) {
    if($(e.target)[0].className === 'delete') {
      $(e.target).parent().fadeOut("slow", function() {
        $(e.target).parent().remove();
      });
    }
  });

  /**
   * Adds new list item to <ul>
   */
  const addListItem = function(e) {
    e.preventDefault();
    const newListItem = $("<li></li>").append($("<span></span>").text($('input').val()));
    const deleteButton = $("<a></a>").addClass("delete").text("Delete");
    $("ul").append(newListItem.append(deleteButton));
  };

  $(".add-item").on("click", function(e) {
    if(e.target.parentElement.firstElementChild.value) {
      addListItem(e);
      e.target.parentElement.firstElementChild.value = '';
    }
  });
});