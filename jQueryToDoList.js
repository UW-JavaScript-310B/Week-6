
//$( document ).ready(function() {

const $todayList = $('ul');
 
$todayList.click(function(e) {
 
   const $target = $(e.target);
   const $listItem = $target.parent();

if ($target.hasClass('delete')) {
        $listItem.remove();
}  else  {
    $listItem.toggleClass('done');
};
});



/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  e.preventDefault();
  const text = $('input').val();
    $('input').val("");

    const $addItem = $('<li>');
      const $span = $('<span>');
        $span.append(text);
      $addItem.append($span);

    const $addTheDeleteButton = $('<a>');
      $addTheDeleteButton.addClass('delete');
      $addTheDeleteButton.text('Delete');
     $addItem.append($addTheDeleteButton); 
    $todayList.append($addItem);
   
    };

// add listener for add

  const $addButton = $('a.add-item');
    $addButton.click(addListItem);

//  });
