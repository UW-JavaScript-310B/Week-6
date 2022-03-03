// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

$( document ).ready(function() {
    console.log( "ready!" );
const $newA = $('<a>');
$newA.attr('id','cta');
$newA.text('Buy Now!');

const $main = $('main');
$main.append($newA);


// Access (read) the data-color attribute of the <img>,
// log to the console

const $img = $('img');
console.log($img[0].dataset.color);

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

const $allList = $('li');
$allList.eq(2).addClass('highlight')


// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

const $p = $('p');
$p.remove();

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"
const $text = $('<p>').text('Added to Cart!')
$text.attr('id','text');
$('#cta')[0].addEventListener('click', ()=>{

    $newA.remove();
    $main.append($text);
});
});