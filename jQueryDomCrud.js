// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

// $( document ).ready(function(){
//     alert("code is loaded")
// })

// Access (read) the data-color attribute of the <img>,
// log to the console

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

$( document ).ready(function(){
    const $img = $('img')
    const color = $img.data('color')
    console.log(color)
    const $li = $('li')
    $li.eq(2).addClass('highlight')

    const $main = $('main')
    const $lastP = $('p')
    const $newA = $('<a>')
    $newA.text('Buy Now')
    $newA.attr('id', 'cta')
    $main.append($newA)

    $lastP.remove()

})



// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"
