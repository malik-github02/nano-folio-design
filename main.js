let modal=document.querySelector(".modal");
let close=document.querySelector(".close");
let modalImg=document.querySelector("#modal-img");
let port=document.querySelectorAll(".port-image");

port.forEach((ele)=>{
    ele.onclick=function(){
        modal.style.display="block";
        modalImg.src=this.firstChild.src
    }

    close.onclick=function(){
        modal.style.display="none";
    }

    document.onkeydown=function(ev){
        if(ev.keyCode=="27"){
            modal.style.display="none" ;
        }
    }
})
