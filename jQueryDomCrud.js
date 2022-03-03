$(document).ready(function(){
    

    // Create a new <a> element containing the text "Buy Now!"
    // with an id of "cta" after the last <p>
    $('<a>').attr('id', 'cta').text('Buy Now!').insertAfter('p');

    // Access (read) the data-color attribute of the <img>,
    // log to the console
    const $info = $('img').attr('data-color');
    console.log($info);
    
    // Update the third <li> item ("Turbocharged"),
    // set the class name to "highlight"
    $('li').eq(2).addClass('highlight');
    
    // Remove (delete) the last paragraph
    // (starts with "Available for purchase now…")
    $('p').remove();
    
    // Create a listener on the "Buy Now!" link that responds to a click event.
    // When clicked, the the "Buy Now!" link should be removed
    // and replaced with text that says "Added to cart"
    $('#cta').on('click', function() {
        $('<p>').text('Added to Cart').insertAfter('#cta');
        $('#cta').remove();
    });
});