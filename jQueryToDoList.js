$( document ).ready(function() {
  console.log( "ready!" );

  

// If an li element is clicked, toggle the class "done" on the <li>

$('li').click(function(){
  $(this).toggleClass("done");
  console.log(this)
})
// If a delete link is clicked, delete the li element / remove from the DOM
$('a').click(function() {
  $(this).closest('li').remove()
})
  
// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

let createDeleteButton = $('<a>').text('Delete').addClass('delete').click(function() {
  $(this).closest('li').remove()
});


$( ".add-item" ).click(function() {
  let newText = $('input').val()
  let newList = $("<li>")
  let newSpan = $("<span>").text(newText)
  let createDeleteButton = $('<a>').text('Delete').addClass('delete').click(function() {
    $(this).closest('li').remove()
  });
  $(newList).append(newSpan, createDeleteButton) 
  $('.today-list').append(newList)
  $('li').click(function(){
    $(this).toggleClass("done");
    console.log(this)
  })

})





});