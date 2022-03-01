$(document).ready(function() {
    // Create a new <a> element containing the text "Buy Now!"
    // with an id of "cta" after the last <p>
    let $buyNow = $("<a>");
    $buyNow.text("Buy Now!");
    $buyNow.attr("id", "cta");
    let $para = $("p");
    $para.eq(0).after($buyNow);
    // Access (read) the data-color attribute of the <img>,
    // log to the console.
    const $img = $("img");
    const color = $img.data("color");
    console.log(color);
    // Update the third <li> item ("Turbocharged"),
    // set the class name to "highlight"
    let $li = $("li");
    let $thirdLi = $li.eq(2);
    $thirdLi.addClass("highlight");
    // Remove (delete) the last paragraph
    // (starts with "Available for purchase now…")
    $para.eq(0).remove();
    // Create a listener on the "Buy Now!" link that responds to a click event.
    // When clicked, the the "Buy Now!" link should be removed
    // and replaced with text that says "Added to cart"
    $buyNow.on("click", function(e) {
        $buyNow.after("Added to cart");
        $buyNow.remove();
    });
});
