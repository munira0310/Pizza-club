var clock;

$(document).ready(function() {

    // Grab the current date
    var currentDate = new Date();

    // Set some date in the future. In this case, it's always Jan 1
    var futureDate  = new Date(currentDate.getFullYear() + 1, -11, 114);

    // Calculate the difference in seconds between the future and current date
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    // Instantiate a coutdown FlipClock
    clock = $('.clock').FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: true
    });

    clock2 = $('.clock2').FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: true
    });
});

$('.comments-clients').owlCarousel({
    loop:true,
    dots: false,
    margin:10,
    items: 4,
    autoplay:true,
    autoplayTimeout:8000,
    nav: true,
    navText: ["<img src='img/left.png'>","<img src='img/right.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.movie').owlCarousel({
    loop:true,
    dots: false,
    margin:10,
    items: 4,
    autoplay:false,
    nav: true,
    navText: ["<img src='img/left.png'>","<img src='img/right.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$(document).ready(function (){
    $(".button").click(function (){
        $('html, body').animate({
            scrollTop: $("#berk").offset().top
        }, 1000);
    });
});


// function getTimeRemaining(endtime) {
//     var t = Date.parse(endtime) - Date.parse(new Date());
//     var seconds = Math.floor((t / 1000) % 60);
//     var minutes = Math.floor((t / 1000 / 60) % 60);
//     var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//     var days = Math.floor(t / (1000 * 60 * 60 * 24));
//         return {
//         'total': t,
//         'days': days,
//         'hours': hours,
//         'minutes': minutes,
//         'seconds': seconds
//         };
//     }
// function initializeClock(id, endtime) {
//   var clock = document.getElementById(id);
//   var daysSpan = clock.querySelector('.days');
//   var hoursSpan = clock.querySelector('.hours');
//   var minutesSpan = clock.querySelector('.minutes');
//   var secondsSpan = clock.querySelector('.seconds');

//   function updateClock() {
//     var t = getTimeRemaining(endtime);

//     daysSpan.innerHTML = t.days;
//     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//     }
//   }

//   updateClock();
//   var timeinterval = setInterval(updateClock, 1000);
// }

// var deadline="December 15 2019 10:00:00 UTC+05:00";

// initializeClock('clockdiv', deadline);

// var deadline="December 15 2019 10:00:00 UTC+05:00";
// // initializeClock('clocks', deadline);


// var pageWidth = $(window).width();
// if (pageWidth > 1024) {
//     $(document).snowfall({image :"img/snow3.png", minSize: 30, maxSize:20,flakeCount: 300});
// };
// $(document).snowfall({image :"img/snow3.png", minSize: 30, maxSize:20,flakeCount: 300});


$('.hey').hide();
$('.hey_phone').hide();
$('.hey_name').hide();
$('.btn').on('click', function(event){
    event.preventDefault();
    if(document.getElementById("eng").checked || document.getElementById("rus").checked ||  document.getElementById("kor").checked||  document.getElementById("ara").checked){
        if($('#user_name').val() != ''){
          

   
       if($('#user_phone').val() != ''){
          
      
 if($('#user_phone').val().length >= 15 ){
   
   $('#form').submit(); 
   
 }else{
      $('.hey_name').hide();
    $('.hey_phone').show();
   
 }
      
        }else{
             $('.hey_name').hide();
         $('.hey_phone').show();
        }
   
      
        }else{
         $('.hey_name').show();
        }
        
    }
    else
    {
        $('.hey').show();
    }
});

function checking() {
    $('.hey').hide();
   $('.hey_phone').hide();
   $('.hey_name').hide();
}

   $(function(){
    $("#user_phone").mask("999 99 999 9999");
    
});





$('.hey_2').hide();
$('.hey_phone_2').hide();
$('.hey_name_2').hide();
$('.btn_2').on('click', function(event){
    event.preventDefault();
    if(document.getElementById("eng_2").checked || document.getElementById("rus_2").checked ||  document.getElementById("kor_2").checked ||  document.getElementById("ara_2").checked){
       
        if($('#user_name_2').val() != ''){
          
   
       if($('#user_phone_2').val() != ''){
          
      
 if($('#user_phone_2').val().length >= 15 ){
   
   $('#form_2').submit(); 
   
 }else{
      $('.hey_name_2').hide();
    $('.hey_phone_2').show();
   
 }
       
        }else{
             $('.hey_name_2').hide();
         $('.hey_phone_2').show();
        }
   
      
        }else{
         $('.hey_name_2').show();
        }
        
    }
    
    else
    {
        $('.hey_2').show();
    }
});


function checking_2() {
    $('.hey_2').hide();
   $('.hey_phone_2').hide();
   $('.hey_name_2').hide();
}



   $(function(){
    $("#user_phone").mask("999 99 999 9999");
    $("#user_phone_2").mask("999 99 999 9999");
    
});

$.fn.maskVal = function () {
    return $(this).mask();
};