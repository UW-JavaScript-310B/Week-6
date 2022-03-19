
    
$( document ).ready(function() {
    
        const $a = $('a');
    
        const $para = $('p');

        $a.attr('id', 'cta');
        
        $a.text('Buy Now!');
        
        

        console.log($para);
        console.log($a);
        // Access (read) the data-color attribute of the <img>,
        // log to the console
        const $image = $('img');
        
        console.log($image[0].dataset.color);
        
      
        
        
        
        // Update the third <li> item ("Turbocharged"), 
        // set the class name to "highlight"
        const $list = $('li');
        
        console.log($list[2]);
        
        $list.eq(2).addClass('highlight');
        
        // Remove (delete) the last paragraph
        // (starts with "Available for purchase now…")

        $('body').append($a)
        $para.remove()
   
        //Buy now replaced by added to cart//
        

        const $cart = $('<p>');
        $cart.attr('id', 'cta');
        $cart.text('This item has been added to your cart!');
        $a.click(function(e) {
          e.preventDefault();
          $a.remove();
          $('body').append($cart);

        })
        console.log($cart);

        
        
       
});