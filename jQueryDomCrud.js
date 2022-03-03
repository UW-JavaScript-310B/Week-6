// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>
const $aElement = $('<a>');
$aElement.text("Buy Now!");
$aElement.attr('id', 'cta');
const $mainElement = $('main');
$mainElement.append($aElement);

// Access (read) the data-color attribute of the <img>,
// log to the console
const $image = $('img');
const color = $image.data('color');
console.log(color);

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"
const $turbocharged = $('li');
$turbocharged.eq(2).addClass('highlight');
$(document).ready(function () {
    // Remove (delete) the last paragraph
    // (starts with "Available for purchase now…")
    const $paragraph = $('p');
    $paragraph.remove();

    // Create a listener on the "Buy Now!" link that responds to a click event.
    // When clicked, the the "Buy Now!" link should be removed
    // and replaced with text that says "Added to cart"
    $('a').on('click', function (e) {
        const $newParagraph = $('<p>')
        $aElement.remove();
        $newParagraph.text('Added to Cart!');
        $mainElement.append($newParagraph);

    })
})