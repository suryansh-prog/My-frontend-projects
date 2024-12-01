var h5=document.querySelector("h5");
var progress=document.querySelector(".progress");
var growth=document.querySelector(".growth");
var btn=document.querySelector("button");
// var body=document.querySelector(".main");
var num=0;
// var h2=document.createElement('h2');
// h2.innerHTML="this is from suryansh soni";
// h2.appendChild(body);
btn.addEventListener("click",function(){
    var int=setInterval(function(){
        btn.innerHTML="downloading"
        num++;
        h5.innerHTML=num + '%';
        growth.style.width=num + '%';
        btn.disabled=true;

    },50);
    setTimeout(function(){
        clearInterval(int);
        btn.innerHTML="downloaded";
        btn.style.opacity=0.4
        
    },5000)
})
