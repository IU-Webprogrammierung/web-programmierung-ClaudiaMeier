
//NAVIGATION 
function showSidebar(){
   const sidebar = document.querySelector(".sidebar")
   sidebar.style.display = "flex"
}
function hideSidebar() {
   const sidebar = document.querySelector(".sidebar")
   sidebar.style.display = "none"
}

document.addEventListener("click", function(event) {
   const sidebar = document.querySelector(".sidebar");
   const menuButton = document.querySelector(".menu_btn");
   
   if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
       hideSidebar();
   }
});


//BACK TO TOP BUTTON
let mybutton = document.getElementById("back_btn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
