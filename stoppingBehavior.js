// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

// alert is working, use preventDefault to avoid fetching the link

$( document ).ready(function(){
  //alert("code is loaded")
  $('a').on('click', function(e){
    alert("Here is more stuff")
    e.preventDefault()

  })
})


// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
