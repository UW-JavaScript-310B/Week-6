$(document).ready(()=>{
        const $pTag = $("p")
        const $aTag = $('<a>')
        $aTag.attr('href', '#')
        $aTag.attr('id', 'cta')
        $aTag.text('Buy Now')
        $aTag.insertAfter($pTag)
        const $img2 = $('img').attr('data-color')
        console.log($img2)
        const $li = $('ul li').last().addClass("highlight")
        $pTag.remove()
        $aTag.click(function(e){
            e.preventDefault()
            $aTag.text("test")
        })
        }
    
)
