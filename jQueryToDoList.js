$(document).ready(function() {

/**
 * Toggles "done" class on <li> element
 */
//add toggle class action on click event for each li tag in ul group tag
$('ul').on('click', 'li', function (event) {
 
  this.classList.toggle('done');
});

/**
 * Delete element when delete link clicked
 */
// attach click event on each element with class named delete
 $('.delete').on('click',function(event) {
// add fade out action with 300 milsec delay before
// calling callback function to remove a node
  $(this).siblings('span').fadeOut(300, function() {
    $(this).parent().remove();
  })
});
/**
 * Adds new list item to <ul>
 */

const addListItem = function(e){
  e.preventDefault();
  // access current input value
  const text = $('input').val();
  // create a new li tag
  let $newLi = $('<li>');
  // create new span tag
  let $span = $('<span>');
  // set text property of span tag to input value
  $span.text(text);
  //create new a tag
  let $a = $('<a>');
  // set text property of a tag
  $a.text('Delete');
  // set class property of a tag
  $a.addClass('delete');
  // create click event on a tag
  $($a).on('click',function(event) {
// add fade out action with 300 milsec delay before
// calling callback function to remove a node
    $(this).siblings('span').fadeOut(300, function() {
      $(this).parent().remove();
    })
  });
  // append span and a tags to end of li tag
  $newLi.append($span,$a);
  // append li tag to end of ul tag
  $('ul').append($newLi);
  // reset input val after li tag has been created
  $('input').val('');
};

// add listener for add
$('.add-item').click(function(event)
{
   event.preventDefault();
// create new <li>, add to end of list
   addListItem(event);
});

});
