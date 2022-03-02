/**
 * Toggles "done" class on <li> element
 */
$(document).ready(function () {
  const $liElement = $('li');
  $liElement.click(function () {
    $(this).toggle('done');
    /**
     * Delete element when delete link clicked
     */
    $(this).fadeOut();
  });

  /**
   * Adds new list item to <ul>
   */
  const addListItem = function (e) {
    e.preventDefault();
    const text = $('input').val();
    const $span = $('<span>').text(text);
    const $li = $('<li>');
    const $deleteClass = $('<a>').addClass('delete').html('Delete');
    const $newLi = ($li).append($span).append($deleteClass);
    $('ul.today-list').append($newLi);
  };

  $('a.add-item').on('click', addListItem);
});