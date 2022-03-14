// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>
let $paras = $("p")
let $lastP = $paras.eq($paras.length - 1)
let $a = $('<a>')
$a.text('Buy Now!')
$a.attr('id', 'cta')
$lastP.parent().append($a)
// Access (read) the data-color attribute of the <img>,
// log to the console
console.log($("img").attr("data-color"))

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"
$lis = $('li')
$lis.eq(2).attr('class', 'highlight')

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
$lastP.remove()
// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"
$a.on('click', function(e)
{
    $a.text('Added to cart')
})