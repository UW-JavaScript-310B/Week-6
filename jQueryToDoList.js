/**
 * Toggles "done" class on <li> element
 */
$('li').on('click', function(e)
{
  e.preventDefault()
  e.stopPropagation()
  let $this = $(this)
  $(this).toggleClass('done')
})
/**
 * Delete element when delete link clicked
 */
$('a').on('click', function(e)
{
  e.preventDefault()
  e.stopPropagation()
  let $this = $(this)
  if ($(this).hasClass('delete'))
  {
    $(this).parent().remove()
  }
})
/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  e.preventDefault();
  const text = $('input').val();
  let $li = $('<li>')
  let $span = $('<span>')
  $span.text(text + ' ')
  $li.append($span)
  let $a = $('<a>')
  $a.text('Delete')
  $a.addClass('delete')
  $li.append($a)
  $('ul').eq(0).append($li)
};

// add listener for add
$(".add-item").on('click', addListItem)