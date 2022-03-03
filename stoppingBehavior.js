$( document ).ready(function() {
// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
$('#more-info').on('click', function(e) {
  alert('Here\'s some info');
  //use e.preventDefault() to suppress DOM default behaviour
  e.preventDefault();
  }
);
// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
$('#dog').on('click', function(e) {
  alert('Bow wow!');
   //use e.stopPropagation to stop event bubble up
   e.stopPropagation();
  }
);
});