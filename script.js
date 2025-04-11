
//NAVIGATION 
function showSidebar() {
  let sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  let sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

document.addEventListener("click", function(event) {
  let sidebar = document.querySelector(".sidebar");
  let menuButton = document.querySelector(".menu_btn");
  
  if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
      hideSidebar();
  }
});


//BACK TO TOP BUTTON
let back_btn = document.getElementById("back_btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
 if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  back_btn.style.display = "block";
 } else {
  back_btn.style.display = "none";
 }
}

function topFunction() {
 window.scrollTo({
  top: 0,
  behavior: "smooth"
 });
}

//FORM VALIDATION

let regMail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let inputName=document.querySelector('#name');
let inputMail=document.querySelector('#email');

let allErrorDiv=document.querySelectorAll(".errorDiv");

let errorMessageName=[];
let errorMessageMail=[];

inputName.addEventListener("input",checkInputName);
inputMail.addEventListener("input",checkInputMail);

document.forms[0].addEventListener("submit",checkInput);

function checkInput(e){
  e.preventDefault();
  checkInputName();
  checkInputMail();
}

function checkInputName() {

  let errorName=[];

  errorMessageName.length=0;

  errorName.push(checkEmpty(inputName,errorMessageName));
  errorName.push(checkMinMax(inputName,3,100,errorMessageName));

  if(errorName.includes(false)){
    inputName.classList.add("error");
    allErrorDiv[0].textContent=errorMessageName.join("");
  }
  else {
    inputName.classList.remove("error");
    allErrorDiv[0].textContent="";
  }
}

function checkInputMail() {

  let errorMail=[];

  errorMessageMail.length=0;

  errorMail.push(checkEmpty(inputMail,errorMessageMail));
  errorMail.push(checkMinMax(inputMail,3,100,errorMessageMail));
  errorMail.push(checkMail(inputMail,errorMessageMail));

  if(errorMail.includes(false)){
    inputMail.classList.add("error");
    allErrorDiv[1].textContent=errorMessageMail.join("");
  }
  else {
    inputMail.classList.remove("error");
    allErrorDiv[1].textContent="";
  }
}

function checkMinMax(inp,min,max,arrayMessage){
  if(inp.value.length<min){
    arrayMessage[1]="Mindestens "+min+" Zeichen\n";
    return false;
  }
  else if(inp.value.length>max){
    arrayMessage[2]="Maximal "+max+" Zeichen\n";
    return false;
  }
  else {
    arrayMessage[1]="";
    arrayMessage[2]="";
    return true;
  }
}

function checkEmpty(inp,arrayMessage){

  if(inp.value.trim()==="") {
    arrayMessage[0]="Das ist ein Pflichtfeld\n";
    return false;
  }
  else {
    arrayMessage[0]="";
    return true;
  }
}

function checkMail(inp,arrayMessage){
  if(!regMail.test(inp.value)){
    arrayMessage[3]="Format ungültig\n";
    return false;
  }
  else {
    arrayMessage[3]="";
    return true;
  }
}