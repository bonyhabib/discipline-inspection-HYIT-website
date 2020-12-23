
var $slider = $('.center-part2'); 
var $slide = '.mySlides'; 
var $transition_time = 1000; 
var $time_between_slides = 2000; 
function slides(){ 
return $slider.find($slide);
}

slides().fadeOut();
slides().first().addClass('active');
slides().first().fadeIn($transition_time);

$function = function(){
var $i = $slider.find($slide + '.active').index();

slides().eq($i).removeClass('active');
slides().eq($i).fadeOut($transition_time);

if (slides().length == $i + 1) $i = -1;

slides().eq($i + 1).fadeIn($transition_time);
slides().eq($i + 1).addClass('active');
}

$interval = setInterval($function, $transition_time +  $time_between_slides );

$("img").on("mouseover",function(){
clearInterval($interval);
});

$("img").on("mouseout",function(){
$interval = setInterval($function, $transition_time +  $time_between_slides );
});
