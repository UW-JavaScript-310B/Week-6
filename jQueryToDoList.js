$(document).ready(function() {
  // Add listener for <ul> element
  $('ul').on('click', function(e) {
    // Check if a child of <ul> element is clicked
    switch (e.target.tagName) {
      // <li> element is clicked
      case 'LI':
        // Toggles "done" class on this <li> element
        $(e.target).toggleClass('done');
        break;
      // <span> element is clicked
      case 'SPAN':
        // Toggles "done" class on the parent node of this <span> element, i.e. <li>
        $(e.target).parent().toggleClass('done');
        break;
      // <a> element "delete" is clicked
      case 'A':
        // Delete <li> element when delete link clicked
        // $(e.target).parent().remove();
        // Fade out the element
        $(e.target).parent().fadeOut('slow');
        break;
      
      default:
        break;
    }
  });

  /**
   * Adds new list item to <ul>
   */
  const addListItem = function(e) {
    e.preventDefault();
    const text = $('input').val();
    // Check if the text is empty or not
    if (text.trim().length !== 0) {
      // Create a new <span> element containing the input-text above
      const $newSpan = $('<span>').text(text);
      // Create a new <a> element containing the text 'Delete' and class name "delete"
      const $newA = $('<a>').text("Delete").addClass('delete');
      // Create a new <li> element and append these elements to it.
      const $newLi = $('<li>').append($newSpan).append($newA);
      // Append this new <li> to <ul>
      $('ul').append($newLi);

    } else {
      alert('Please input your to-do task!');
    }
    // Reset input value
    $('input').val('');
  };

  // add listener for add
  $('.add-item').on('click', addListItem);

});
