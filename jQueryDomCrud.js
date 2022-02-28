$(document).ready(function() {
  // Create a new <a> element containing the text "Buy Now!"
  // with an id of "cta" after the last <p>
  const $newA = $('<a>').text('Buy Now!').attr('id', 'cta');

  $('main').append($newA);

  // Access (read) the data-color attribute of the <img>,
  // log to the console
  console.log($('img').attr('data-color'));

  // Update the third <li> item ("Turbocharged"),
  // set the class name to "highlight"
  $('li').eq(2).addClass('highlight');

  // Remove (delete) the last paragraph
  // (starts with "Available for purchase now…")
  $('p').remove();

  // Create a listener on the "Buy Now!" link that responds to a click event.
  // When clicked, the the "Buy Now!" link should be removed
  // and replaced with text that says "Added to cart"
  $('#cta').on('click', function(e) {
    this.innerHTML = 'Added to cart';
  });

});
