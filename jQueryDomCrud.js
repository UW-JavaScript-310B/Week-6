// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

// Access (read) the data-color attribute of the <img>,
// log to the console

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"

$(document).ready(function() {
    let imgDataColor = $('img').attr('data-color');
    console.log(imgDataColor);
    $('ul').find($('li')[2]).addClass('highlight');
    $('p').after('<a id="cta">Buy Now!</a>');
    $('p').remove();
    $( "#cta" ).click(function() {
        $('#cta').remove();
        $('ul').after('<p>Added to cart</p>');
      });
});