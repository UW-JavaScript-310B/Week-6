$(document).ready(function(){

    /**
     * Toggles "done" class on <li> element
     */
    $(document).on('click', 'li', function(e){
        $(this).addClass('done');
    })
    /**
     * Delete element when delete link clicked
     */
    $(document).on('click', '.delete', function(e){
        $(this).parent().remove();
    });
    /**
     * Adds new list item to <ul>
     */
    const addListItem = function(e) {
        e.preventDefault();
        const text = $('input').val();
        
        // rest here...
        const listItem = $('<li>')
        const spanBox = $('<span>').text(text);
        const deleteBox = $('<a>').addClass('delete').text('delete');

        listItem.append(spanBox);
        listItem.append(deleteBox);

        $('.today-list').append( listItem );
    };

    // add listener for add
    $('.add-item').on('click', addListItem );
});