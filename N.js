var main=document.querySelector(".main");
var cursor=document.querySelector("img");
var h1=document.querySelector("h1");

main.addEventListener("mousemove",function(dets){
    cursor.style.left=dets.x + "px";
    cursor.style.top=dets.y + "px";
})
h1.addEventListener("mouseenter",function(){
    cursor.style.scale=2;
})
h1.addEventListener("mouseleave",function(){
    cursor.style.scale=1;
})