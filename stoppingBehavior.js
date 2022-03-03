// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

const $moreInfoBtn = $('more-info');

$moreInfoBtn.off();
$moreInfoBtn.on('click', function(e){
alert("Here's some info");
});

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"

const $bark = $('dog');

$bark.off();
$bark.on('click', function(e){
  alert("Bow wow!");
})

