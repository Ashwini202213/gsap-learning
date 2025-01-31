var cursor=document.querySelector("#cursor");
var main=document.querySelector('#main');
var imageDiv=document.querySelector("#image");

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:2,
        // ease:"elastic.out(1,0.3)",
        // ease:"back out"
    })
})

imageDiv.addEventListener("mousemove",function(){
    cursor.innerHTML="view profile"
    gsap.to(cursor,{
        scale:3,
        backgroundColor:"#f3f6f689",
    })
})


imageDiv.addEventListener("mouseleave",function(){
        cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"white"
    })
})
