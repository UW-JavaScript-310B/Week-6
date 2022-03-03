$(document).ready(function(){
    alert("code is loaded")
})

// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>
const $main = $('main');
const $newtag = $('<a>');
const $lastP = $('main > p')
$newtag.text('Buy Now!');
$newtag.attr('id' , 'cta');
$main.append($newtag);

// Access (read) the data-color attribute of the <img>,
// log to the console

const $img = $('img');
const $data = $img.data('color');
console.log($data);

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

const $li = $('li');

$li.eq(2).addClass('highlight');

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
$lastP.remove();

$newP = $('<p>').text('Add to cart')


// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"

$newtag.on('click',function(e){
    $newtag.remove();
    $main.append($newP);

});