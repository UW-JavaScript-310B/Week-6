/**
 * Toggles "done" class on <li> element
 */

const doneItem = function(e) {
  e.preventDefault();
  if (this) {
    this.parentNode.className = 'done'
  }

}

// jQuery listener for click on 'span' element

$(document).ready(function (){
  $('span').click(doneItem)
})

/**
 * Delete element when delete link clicked
 */

const deleteListItem = function (e){
  e.preventDefault()

  const liEl=this.parentNode

  const ulEl=liEl.parentNode

  if(this){
    ulEl.removeChild(liEl)
  }

}

// jQuery listener for click on the delete class element

$(document).ready(function (){
  $('.delete').click(deleteListItem)
})

/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  e.preventDefault();
  const text = $('input').val();

  // rest here...

  // biggest challenge was to figure out you have to add the angle brackets <> LOL!!!

  let $ulElement = $('.today-list')

  let $listElem = $('<li>');

  let $spanElem = $('<span>');

  $spanElem.text(text)

  $listElem.append($spanElem)

  const $newA = $('<a>')

  $newA.text('Delete')
  $newA.addClass('delete')

  $listElem.append($newA)

  $ulElement.append($listElem);

  $(document).ready(function (){
    $('span').click(doneItem);
  })

  $(document).ready(function (){
    $('.delete').click(deleteListItem);
  })

};

// add listener for add

$(document).ready(function (){
  $('.add-item').click(addListItem);
})



