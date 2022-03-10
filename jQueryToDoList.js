/**
 * Toggles "done" class on <li> element
 */
$(document).ready(function () {

  $("li").click((e) => {
    e.preventDefault();
    $(e.currentTarget).addClass("done");
  });

/**
 * Delete element when delete link clicked
 */
  $('.delete').click((e) => {
    e.preventDefault();
    $(e.currentTarget.parentElement).remove();
  });

  /**
   * Adds new list item to <ul>
   */
  const addListItem = function (e) {
    e.preventDefault();
    const text = $('input').val();
    $('.today-list').append(`<li><span>${text}</span><a class="delete">Delete</a></li>`);
    let newlyCreatedElement = $( "ul li" ).last();

    newlyCreatedElement.click((e) => {
      e.preventDefault();
      $(e.currentTarget).addClass("done");
    });
  
    newlyCreatedElement.find('.delete').click((e) => {
      e.preventDefault();
      $(e.currentTarget.parentElement).remove();
    });
  };

  // add listener for add
  $('.add-item').click(addListItem);

});