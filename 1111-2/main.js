let mainText1 = document.getElementById("h11");
let mainText2 = document.getElementById("h12");
let mainText3 = document.getElementById("h13");
let subText = document.getElementById("h21");
let trioText = document.getElementById("p1");
let boom = document.getElementsByClassName("boom");


window.addEventListener('scroll', function()
{
    let value = window.scrollY;
    //console.log('scrollY', value);
    if(value > 250)
    {
        mainText1.style.animation = 'slideout 2s ease-out forwards'
        mainText2.style.animation = 'slideout 2s ease-out forwards'
        mainText3.style.animation = 'slideout 2s ease-out forwards'
        subText.style.animation = 'slideout_sub 2.5s ease-out forwards' 
        trioText.style.animation = 'slideout_sub 2.5s ease-out forwards'
        
    }
    else
    {
        mainText1.style.animation = 'slidein 2s ease-out forwards'
        mainText2.style.animation = 'slidein 2s ease-out forwards'
        mainText3.style.animation = 'slidein 2s ease-out forwards'
        subText.style.animation = 'slidein_sub 2.5s ease-out forwards'
        trioText.style.animation = 'slidein_sub 2.5s ease-out forwards'
        
    }
})

function booom(){
    let boom = confirm("학점 A+ 주실거죠? (취소 누르시면 절때 안되요 ㅎㅎㅎㅎ)");
    if (boom === false) {
        booom();
    }
}
