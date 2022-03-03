/**
 * Toggles "done" class on <li> element
 */
 $( document ).ready(function() {
  console.log( "ready!" );

 $("ul").on("click", function(e) {
  e.target.parentElement.classList.toggle("done");
});


/**
 * Delete element when delete link clicked
 */

  const $deleteBtn = $('.delete');
  function del(e){
    e.target.parentElement.classList.toggle("hidden");
    //$(this).addClass('hidden')
    //$(this).parent().remove();
}
  $deleteBtn.on('click', del);

/**
 * Adds new list item to <ul>
 */
 let $newLi = $('<li>');
const addListItem = function(e) {
  e.preventDefault();
  const text = $('input').val();
 
  let $ul = $('ul').append(`<li><span>${text}</span><a class="delete">Delete</a></li>`);
  $('.delete').addClass('delete');
  $('.delete').on('click', del);
  
};


// add listener for add

$('.add-item').on('click', addListItem)
});