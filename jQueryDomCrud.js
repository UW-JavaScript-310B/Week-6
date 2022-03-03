$(document).ready(function () {
    // alert("Code is loaded")

    // Create a new <a> element containing the text "Buy Now!"
    // with an id of "cta" after the last <p>

    const $main = $('main')
    const $newA = $('<a>')
    $newA.text('Buy Now!')
    $newA.attr('id', 'cta')
    $main.append($newA) //prepend puts it before

    // Access (read) the data-color attribute of the <img>,

    const $img = $('img');
    const imgColor = $img.data('color');
    console.log(imgColor);


    // Update the third <li> item ("Turbocharged"),
    // set the class name to "highlight"
    const $li = $('li');
    $li.eq(2).addClass('highlight');


    // Remove (delete) the last paragraph
    // (starts with "Available for purchase now…")

    const $lastP = $('p');
    $lastP.remove();

    // Create a listener on the "Buy Now!" link that responds to a click event.
    // When clicked, the the "Buy Now!" link should be removed
    // and replaced with text that says "Added to cart"

    $('a').on('click', function (e) {
        const $buyNowA = $('a');
        const $newP = $('<p>')
        //remove the current link
        $newA.remove();
        //add a new paragraph withtext 
        // $newP.attr('id', 'cta')
        $newP.addClass('highlight2');
        $newP.text('Added to Cart!')
        $main.append($newP)

    })
})