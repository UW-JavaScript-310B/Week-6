/**
 * Toggles "done" class on <li> element
 * 1. If an <li> element is clicked, toggle the class "done" on the <li>
 */
 $(document).ready(function(){
  alert("code is loaded")
})

 const $li = $('li');
 const $globalUl = $('ul.today-list');
 const $delBtn = $('a.delete');

$globalUl.on('click', function(e) {
    $(e.target).toggleClass('done');
    if($(e.target).hasClass('delete')){//why does hasClass work but $delBtn does not???
      $(e.target).parent().fadeOut(500, function(){
        $(this).remove();
      });
    }
});
/**
 * Delete element when delete link clicked
 *  If the Delete <a> is clicked, remove the <li>
 */

/**
 * Adds new list item to <ul>
 * 3. If an 'Add' link is clicked, adds the item as a new list item to the list
 */

const addListItem = function(e) {
  e.preventDefault();
  const text = $('input').val();
  $globalUl.append(`<li><span>${text}</span><a class="delete">Delete</a></li>`);
};

// add listener for add
const $addBtn = $('a.add-item');

$addBtn.on('click',function(e){
  addListItem(e);
})