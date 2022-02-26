$( document ).ready(function() {
    // Create a new <a> element containing the text "Buy Now!"
    // with an id of "cta" after the last <p>
    const $newA = $("<a>");
    $newA.text("Buy Now!");
    $newA.data("id", "cta");
    $newA.attr("href", "#");
    $("main").append($newA);
    // Access (read) the data-color attribute of the <img>,
    // log to the console
    const $imgColor = $("img").data("color");
    console.log(`img element data-color = ${$imgColor}`);

    // Update the third <li> item ("Turbocharged"),
    // set the class name to "highlight"
    $("li").eq(2).addClass("highlight");

    // Remove (delete) the last paragraph
    // (starts with "Available for purchase now…")
    $("p").remove();
    // Create a listener on the "Buy Now!" link that responds to a click event.
    // When clicked, the the "Buy Now!" link should be removed
    // and replaced with text that says "Added to cart"
    const $newP = $("<p>").text("Added to cart");
    $newA.on("click", function(e){
        $newA.remove();
        $("main").append($newP);
    });
});