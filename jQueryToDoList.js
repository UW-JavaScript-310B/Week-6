$(document).ready(function() {

/**
 * Toggles "done" class on <li> element
 */

$('ul').click(function (e) {
  if ($(e.target).prop("tagName") === 'SPAN') {
    $(e.target).parent().toggleClass('done');
  }
} );

/**
 * Delete element when delete link clicked
 */

$('ul').click(function (e) {
  if ($(e.target).attr('class') === 'delete') {
    $(e.target).parent().fadeOut('normal', function () { 
      $(e.target).parent().remove(); 
    } );
  }
} );

/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  e.preventDefault();
  const text = $('input').val();

  // rest here...

  let newLi = $('<li>');
  let newSpan = $('<span>').text(text);
  let newDelete = $('<a>').attr('class','delete').text('Delete');

  newLi.append(newSpan);
  newLi.append(newDelete);
  $('ul').append(newLi);  
};

// add listener for add
$('.add-item').click(addListItem);

});