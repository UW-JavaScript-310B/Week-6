$(document).ready(function() {
  /**
   * Toggles "done" class on <li> element
   */
  $('li').click(function(e) {
    $(this).toggleClass("done");
  });

  /**
   * Delete element when delete link clicked
   */
  $(document).on("click", ".delete", function(e){
    e.stopPropagation();
    if ($(this).parent().is( "li" ))
      $(this).parent().fadeOut("slow", "swing");
  });

  /**
   * Adds new list item to <ul>
   */
  const addListItem = function(e) {
    e.preventDefault();
    const text = $('input').val();

    // rest here...
    $newSpan = $("<span>").html(text);
    $newA = $("<a>").addClass("delete").html("Delete");
    $("ul").append($("<li>").append($newSpan).append($newA));
    $("li").last().click( function(e) {
      $(this).toggleClass("done");
    });
    $('input').val("");
  };

  // add listener for add
  $(document).on("click", ".add-item", function(e){
    addListItem(e);
  });
});