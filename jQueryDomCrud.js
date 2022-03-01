
$(document).ready(function() {

    const buyNowLink = $('<a>');
        buyNowLink.attr('id', 'cta');
        buyNowLink.text('Buy now!');
        buyNowLink.insertAfter($('p'));
    
    
    const $img = $('img');
    const color = $img.data('color');

    const $li = $('li');
        $li.eq(2).addClass('highlight')

     $('p').remove();
     
     $('a').click(function() {
            $('a')
              .replaceWith('Added to Cart');
         });

});


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
