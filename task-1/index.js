$("#video_projects .owl-carousel").owlCarousel({
   loop: true,
   nav: false,
   dots: false,
   responsive : {
       0: {
           items: 1
       },
       600: {
           items: 2
       },
       1000 : {
           items: 3
       }
   }
});
$("#LIZ .owl-carousel").owlCarousel({
   loop: true,
   nav: false,
   dots: false,
   responsive : {
       0: {
           items: 3
       },
       600: {
           items: 5
       },
       1000 : {
           items: 7
       }
   }
});

const changePic = (e)=>{
    document.getElementById("main_image").src = e;
}

var images=["images/t1.jpg", "images/t2.jpg", "images/t3.jpg", "images/t4.jpg", "images/t5.jpg", "images/t6.jpg", "images/t7.jpg"];
var num=0;
function next(){
    var slider=document.getElementById("main_image");
    num++;
    if(num>=images.length){
        num=0;
    }
    slider.src=images[num];
}
function prev(){
    var slider=document.getElementById("main_image");
    num--;
    if(num<0){
        num=images.length-1;
    }
    slider.src=images[num];
}