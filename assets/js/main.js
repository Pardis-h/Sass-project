AOS.init();
function myNav(){
    var x = document.getElementById("mynav");
    if(x.className === "menu-burger"){
        x.className += " d-block";
    }
    else{
        x.className = "menu-burger";
    }
}