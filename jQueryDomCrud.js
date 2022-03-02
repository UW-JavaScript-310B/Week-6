$(document).ready(function () {
  // Create a new <a> element containing the text "Buy Now!"
  // with an id of "cta" after the last <p>
  const $lastP = $(`p:last-child`);
  const $newAtag = $(`<a>`);
  $newAtag.text(`Buy Now!`);
  $newAtag.attr(`id`, `cta`);
  $lastP.append($newAtag);

  // Access (read) the data-color attribute of the <img>,
  // log to the console
  const $imageStuff = $(`img`);
  const tempValue = $imageStuff.attr(`data-color`);
  console.log(`data-color attribute = ${tempValue}`);

  // Update the third <li> item ("Turbocharged"),
  // set the class name to "highlight"
  const $thirdItem = $(`li:nth-child(3)`);
  $thirdItem.attr("class", "highlight");
  console.log($thirdItem);

  // Remove (delete) the last paragraph
  // (starts with "Available for purchase now…")
  //$lastP.remove(); I don't think we want to remove the full paragraphy b/c the next section won't work.
  $modifyLastParagraph = $();
  $modifyLastParagraph.remove();

  // Create a listener on the "Buy Now!" link that responds to a click event.
  // When clicked, the the "Buy Now!" link should be removed
  // and replaced with text that says "Added to cart"
  const highlightItem = function (event) {
    let $this = $(this);
    $this.text("Added to cart");
  };

  const $newAtagText = $(`a#cta`);
  $newAtagText.on("click", highlightItem);
});
