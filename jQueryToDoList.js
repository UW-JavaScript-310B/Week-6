/**
 * Toggles "done" class on <li> element
 */
$('li').click(function(e) {
  $(this).toggleClass('done');
})
/**
 * Delete element when delete link clicked
 */
// Includes (tested, working) extra credit.
$('a.delete').click(function(e) {
  $(this).parent().fadeOut('slow', function() {
    $(this).remove();
  });
});
/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  // e.preventDefault();
  const text = $('input').val();

  // rest here...
  /* let newDeleteBtn2 = $('<a>');
  newDeleteBtn2.addClass('delete');
  newDeleteBtn2.click (function (e) {
    $(this).parent().fadeOut('slow', function() {
      $this.remove();
    })
  })
  console.log(newDeleteBtn2);

  let newSpan2 = $('<span>');
  newSpan2.append(text);
  console.log(newSpan2);

  let newLi2 = $('<li>');
  newLi2.append(newSpan2);
  newLi2.append(newDeleteBtn2);
  newLi2.click(function(e) {
    $(this).toggleClass('done');
  })
  console.log(newLi2); */



  let $newDeleteBtn = $('<a>').addClass('delete').click(function(e) {
    $(this).parent().remove();
  });
  console.log($newDeleteBtn);

  let $newSpan = $('<span>').text(text);
  console.log($newSpan);

  let $newLi = $('<li>');
  $newLi.append($newSpan, $newDeleteBtn).click(function(e) {
    $(this).toggleClass('done');
  });
  console.log($newLi);
};  

// add listener for add
/* $('a.add-item').click(function (e) {
  addListItem();
}); */

// $('a.add-item').click(addListItem);
addListItem();

/* $('div.add').click(function (e) {
  let target = $('ul.today-list');
  target.addListItem();
}) */

