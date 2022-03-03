
$(document).ready(function () {



  // Toggles "done" class on <li> element
  const newClick = function () {
    $('li').click(function (e) {
      $(this).addClass('done');
    });
  };
  newClick();

  //  Delete element when delete link clicked
  const newDelete = function () {
    $('.delete').click(function (e) {
    $(this).parent('li').fadeOut();
    });
  };
  newDelete();

  // Adds new list item to <ul>

  const addListItem = function (e) {
    e.preventDefault();
    const text = $('input').val();
    const newLi = $('<li>');
    const newSpan = $('<span>')
    const newDel = $('<a>').addClass('delete').html('Delete');
    newSpan.html(text);
    newLi.append(newSpan);
    newLi.append(newDel);
    $('ul').append(newLi);

    newClick();
    newDelete();
  };

  // starter code above


  // add listener for add
  $('.add-item').click(addListItem);
});

