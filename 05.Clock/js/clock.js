var $hands = $('#liveclock div.hand')
 
window.requestAnimationFrame = window.requestAnimationFrame
                               || window.mozRequestAnimationFrame
                               || window.webkitRequestAnimationFrame
                               || window.msRequestAnimationFrame
                               || function(f){setTimeout(f, 60)}
 
                               
var counter = 0;

function updateclock(){

    var curdate = new Date()

    counter += 1;
    var hours = Math.floor(counter / 3600);
    var mins = Math.floor(counter / 60) % 60; 
    var secs = counter % 60;

	var curdate = new Date()
	/*var hour_as_degree = ( hours + mins/60 ) / 12 * 360
	var minute_as_degree = mins / 60 * 360
    var second_as_degree = (seconds + curdate.getMilliseconds()/1000) /60 * 360*/ 

    var hour_as_degree = ( curdate.getHours() + curdate.getMinutes()/60 ) / 12 * 360
	var minute_as_degree = curdate.getMinutes() / 60 * 360
    var second_as_degree = ( curdate.getSeconds() + curdate.getMilliseconds()/1000 ) /60 * 360
    
    console.log(counter);

    
	$hands.filter('.hour').css({transform: 'rotate(' + hour_as_degree + 'deg)' })
	$hands.filter('.minute').css({transform: 'rotate(' + minute_as_degree + 'deg)' })
	$hands.filter('.second').css({transform: 'rotate(' + second_as_degree + 'deg)' })
	requestAnimationFrame(updateclock)
}
 
requestAnimationFrame(updateclock)