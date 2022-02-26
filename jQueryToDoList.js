/**
 * Toggles "done" class on <li> element
 */

const $ulList = $('ul.today-list');
const $liToDos = $ulList.children();
const $li =   $('li')
console.log($liToDos);

$liToDos.on('click', function(e) {
  let $this = $(this);
  $(this).toggleClass('done');
  console.log($liToDos);

  })

/**
 * Delete element when delete link clicked
 */

/**
 * Adds new list item to <ul>
 */
const addListItem = function (e) {
  e.preventDefault();
  const text = $('input').val();

  //Create new elements
  const $newLi = $('<li>');
  const $newSpan = $('<span>');
  const $newA = $('<a>');


  //add class and a descr to the delete button
  $newA.attr('class', 'delete');
  $newA.text('Delete');

  //add text entered by user into the span el for the new list item
  $newSpan.text(text);

  //add new elements to the DOM
  $ulList.append($newLi);
  $newLi.append($newSpan);
  $newLi.append($newA)
};

// add listener for add
//identify the element to be clicked
const $aButton = $('a.add-item')

//create click event
$aButton.on('click', addListItem)

