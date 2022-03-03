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

  //console.log(liEl)

  const ulEl=liEl.parentNode

  //console.log(ulEl)

  //

  //ulEl.removeChild(liEl)

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
  //console.log('add item clicked')

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
  //aElem.addEventListener('click', deleteListItem)

  //$('.delete').click(deleteListItem)
  $(document).ready(function (){
    $('.delete').click(deleteListItem)
  })

  ulElem.append(liElem)


};

// add listener for add

$(document).ready(function (){
  $('.add-item').click(addListItem)
})


//able to log add-item event

// $(document).ready(function (){
//   //const $addItem = $('add-item')
//   $('.add-item').click(function (e){
//     e.preventDefault()
//     console.log('hello')
//   })
// })


