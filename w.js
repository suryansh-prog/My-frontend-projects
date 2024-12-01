// var btn=document.querySelector("button");
// var box=document.querySelector(".box");

// // btn.addEventListener("click",function(){
// //     var randomX=Math.random()*50;
// //     var randomY=Math.random()*60;
// //     var div=document.createElement("div");
// //     div.style.width='30px';
// //     div.style.height='30px';
// //     div.style.backgroundColor='red';
// //     div.style.border="2px solid white";
// //     div.style.position='absolute';
// //     div.style.left=randomX+ '%';
// //     div.style.top=randomY + '%';

// //     box.appendChild(div);


// // })


var image=document.querySelector(".image");
var i=document.querySelector("i");

image.addEventListener("dblclick",function(){
    i.computedStyleMap.display=block;
    i.style.transform="translate(-50%,-50%) scale(1)";

},1000)