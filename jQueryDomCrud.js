$( document ).ready(function() {
// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>
    let $newA = $('<a>');
    $newA.text("Buy Now!");
    $newA.attr('id', 'cta');
    let $main = $('main');
    $main.append($newA);

// Access (read) the data-color attribute of the <img>,
// log to the console
    let $img = $('img');
    let color = $img.data('color');
    console.log(color);

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"
    let $li = $('li');
    $li.eq(2).addClass('highlight');

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
    $toRemove = $('p');
    $toRemove.remove();

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"
    $(newA).click(function(e) {
        // need code to delete existing text (or use Kevin's technique)
        $newA.text("Added to cart");
    });
});