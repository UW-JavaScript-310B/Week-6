$( document ).ready(function() {
// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>
let $a = $('<a id=\'cta\'>Buy Now</a>');
// get the list of all p tags
const $p = jQuery('p');
//get a handle of last p tag
const $lastP = $p[$p.length -1];
//insert an element after the last p tag
$a.insertAfter($lastP);
// Access (read) the data-color attribute of the <img>,
// log to the console
console.log($('img').attr('data-color'));
// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"
const $li = jQuery('li');
let $thirdLi = $li[2];
$thirdLi.className = 'highlight'; 
// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
$lastP.remove();
// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"
$('a').click(function(e){
  let $this = this;
  $this.text = 'Added to cart';
});
});