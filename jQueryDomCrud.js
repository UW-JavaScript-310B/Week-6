$(document).ready(function(){

// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

    const $p = $('p');
    const $newA = $('<a>');

    $newA.text('Buy Now!').attr('id', 'cta');
    $p.after($newA);

// Access (read) the data-color attribute of the <img>,
// log to the console

    const $img = $('img');
    const color = $img.data('color');

    console.log(color);

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

    const $li = $('li');
    $li.eq(2).addClass('highlight');

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
 
    //const $p = $('p');
     $p.remove(); 

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"

    // $('a').on('click', function(e) {
    //     this.innerHTML = 'Added to Cart';
    // } )

    const $main = $('main');
    const $newP = $('<p>').text('Added to Cart');

    $newA.click(function () {
        $newA.remove();
        $main.append($newP);
    } );

} )