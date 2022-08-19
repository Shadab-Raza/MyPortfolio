var tablinks = document.getElementsByClassName("tab_links");
var tabcontents = document.getElementsByClassName("tab_content");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active_link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active_tab");
    }
    event.currentTarget.classList.add("active_link");
    document.getElementById(tabname).classList.add("active_tab")
}


// For open and close navbar menue in small screen 
let sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}


