$(document).ready(function() {
  /**
   * Toggles "done" class on <li> element
   */
  $("ul").on("click", function(e) {
    if($(e.target).attr("class") !== "delete") {
      $(e.target).parent().toggleClass("done");
    }
  });

  /**
   * Delete element when delete link clicked
   */
  $("ul").on("click", function(e) {
    if($(e.target).attr("class") === "delete") {
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
    const newListItem = $("<li></li>").append($("<span></span>").text($("input").val()));
    const deleteButton = $("<a></a>").addClass("delete").text("Delete");
    $("ul").append(newListItem.append(deleteButton));
  };

  $(".add-item").on("click", function(e) {
    try{
      if($(e.target).parent().children().first().val() == '') {
        throw "Error: To do item cannot be empty. Please try again.";
      }
      else {
        addListItem(e);
        $("#error").remove();
        $(e.target).parent().children().first().val("");
      }
    }
    catch(err) {
      $("<p></p>").attr("id", "error").text(err).css("color", "red").insertAfter(".add")
    }
  });
});