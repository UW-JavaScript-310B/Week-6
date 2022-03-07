/**
 * Toggles "done" class on <li> element
 */
 $(document).on('click', '.parentli', function() {
  let $this = $(this);
  $(this).toggleClass('done');
  })

/**
 * Delete element when delete link clicked
 */
 $(document).on('click', '.delete', function() {
  $(this).parent().remove();
});

/**
 * Adds new list item to <ul>
 */
 const addListItem = function(e) {
    e.preventDefault();
    const text = $('input').val();
  
    // rest here...
    // <li class="parentli">
    //       <span>Reading</span>
    //       <a class="delete">Delete</a>
    //     </li>
    // const $ul = $('ul')
    const $newLi = $('<li>');
    const $newSpan = $('<span>');
    const $newA = $('<a>');

    $newA.attr('class', 'delete');
    $newSpan.text(`${text}`);
    $newA.text('Delete');
    $newLi.attr('class', 'parentli');

    $('ul').append($newLi);
    $newLi.append($newSpan);
    $newLi.append($newA);

  };
  
  // add listener for add
  const $addButton = $(`a.add-item`);

  $addButton.on('click', addListItem);
  