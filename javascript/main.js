function showAudioBar(){
    let trigger = $('#mainPic');
    let audioBar = $('#tune');
    let map = $('#lifeMap');
    if(audioBar.css('display') == "none"){
        audioBar.css({display:"block"});
        map.css({margin:"15% auto" });
        $('#tuneMessage').text("Stop the music...");
    }else{
        audioBar.trigger('pause');
        audioBar.hide();
         map.css({margin:"10% auto"});
        $('#tuneMessage').text("Click the Picture...");
    }
}

function showHoverMessage(){
    message = $('#tuneMessage');

    if(message.css('visibility')=="hidden"){
        message.css({display:"block"});
        message.css({visibility:"visible"});
    }
    else{
      message.css({display:"none"});
      message.css({visibility:"hidden"});
    }
}
function updateAge(){
    let MILLIS_IN_SECOND = 1000;
    let SECONDS_IN_MINUTE = 60;
    let MINUTES_IN_HOUR = 60;
    let HOURS_IN_DAY = 24;
    let DAYS_IN_YEAR = 365;
    let MILLISECONDS_IN_YEAR = MILLIS_IN_SECOND * SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY * DAYS_IN_YEAR;
    let ageText = $('#age');
    let birthDate = new Date("7/13/1999").getTime();
    let today = Date.now();
    let age = Math.floor((today - birthDate)/MILLISECONDS_IN_YEAR);
    ageText.text(age);
}
function setUpHandlers(){
    $('#mainPic').on('click',showAudioBar);
    $('#mainPic').mouseenter(showHoverMessage).mouseleave(showHoverMessage);
    updateAge();
    $('.portfolio').on('click',fullscreen)

}
$(document).ready(setUpHandlers);
