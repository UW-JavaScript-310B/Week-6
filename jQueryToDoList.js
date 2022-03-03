/**
 * Toggles "done" class on <li> element
 */

/**
 * Delete element when delete link clicked
 */

/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  //e.preventDefault();
  const text = $('input').val();
  console.log('add item clicked')

  // rest here...
};

// add listener for add

// $(document).ready(function (){
//   const $addItem = $('add-item')
//   $addItem.click(function (e){
//     console.log('hello')
//   })
// })

$(document).ready(function (){
  //const $addItem = $('add-item')
  $('.add-item').click(function (e){
    e.preventDefault()
    console.log('hello')
  })
})


