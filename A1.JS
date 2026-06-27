//logo animation over event....
let ani=document.querySelector(".logoAn");
ani.addEventListener("animationend",()=>{
    ani.style.display="none";
    window.location.href = "./A1H.html";
},{once:true});


