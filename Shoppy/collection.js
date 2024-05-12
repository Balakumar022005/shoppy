var collect=document.querySelector(".collection");
var divv=collect.querySelectorAll("div");
var inp=document.getElementById("productC");
inp.addEventListener("keyup",function(){
    var value=event.target.value.toUpperCase();
    for(var i=0;i<divv.length;i++)
    {
    var search_val= divv[i].querySelector("p").textContent;
    if(search_val.toUpperCase().indexOf(value) <0)
    {
       divv[i].style.display="none";
    }
    else{
       divv[i].style.display="block";

    }                                   }
})
