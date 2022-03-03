/**
 * Toggles "done" class on <li> element
 */

const doneItem = function(e) {
  e.preventDefault();
  if (this) {
    this.parentNode.className = 'done'
  }

}

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

  const mainElem = this.parentNode.parentNode

  const ulElem = mainElem.getElementsByTagName('ul')[0]

  const liElem = document.createElement('li')

  const spanElem = document.createElement('span')

  spanElem.textContent=text

  const aElem = document.createElement('a')

  aElem.className="delete"

  const link = document.createTextNode('Delete')

  aElem.appendChild(link)

  liElem.appendChild(spanElem)

  liElem.appendChild(aElem)

  // spanElem.addEventListener('click', doneItem)
  //

  $(document).ready(function (){
    $('span').click(doneItem)
  })

  $(document).ready(function (){
    $('.delete').click(deleteListItem)
  })

  ulElem.append(liElem)


};

// add listener for add

$(document).ready(function (){
  $('.add-item').click(addListItem)
})



