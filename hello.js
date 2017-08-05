function fadeImage(){
    $('img').fadeToggle(4000,'swing');
}
function addBorderToMap(){
    $('#map').css({border:'10px solid black'})
}

function fadeOutCurrentElement(){
    $(this).fadeOut(4000,'swing')
}

function houseMusic()
{
    alert("House Music: Boots & Cats & Boots & Cats")
}


function bounceTitle(){       $(".title").animate({left:'100%'},10000);
$(".title").animate({left:'-10%'},10000); 
}
function textGrow(){
    $(this).animate({fontSize: 40},6000).animate({fontSize:24},2000);
}

function marquee(target){    $(target).animate({left:'100%'},10000)
}
function showAudioBar(){
    alert("Get ready to hear my favorite tune!!!")
    $('audio').css({display:"block"})
}

function sayHello(){
  var userText = $('#message').val();
    $('#result').text("Hello, "+userText +". Nice to meet you!");
}

function setUpHandlers(){
    bounceTitle();
    window.setInterval(function(){
        bounceTitle();
    }, 21000);
    $('.suzu').on('click',fadeImage);
    $('.fader').on('click', fadeImage);
    $('#map').on('mouseenter',addBorderToMap);
    $('li').on('click',fadeOutCurrentElement);
   // $('button').on('click', houseMusic);
    $('button').on('click',showAudioBar);
    $('#message').on('input', sayHello)
     //$('.title').on('mouseenter',textGrow);
    
    

}

$(document).ready(setUpHandlers);
