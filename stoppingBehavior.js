$( document ).ready(function() {
  console.log( "ready!" );
$('#cat').on('click',function func(e){
  alert("Bow wow!");
  e.stopImmediatePropagation();
})


// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

let $anchor = $('#more-info');  
  $anchor.attr('href','#');

$anchor.on('click',()=>{
  alert("Here's some info");
})

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
});