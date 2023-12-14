// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
function relocate_enquiry()
{
     location.href = "./Enquiry.html";
} 


// for contact me on main page
function myFunction() {
    var txt;
    if (confirm("We will contact you soon!")) {
      window.location.href="#home";
    } else {
      txt = "";
    }
    document.getElementById("demo").innerHTML = txt;
  }


  // for enquiry submit button
  function sub() {
    var txt;
    if (confirm("Thank you for connecting with us...")) {
      window.location.href="index.html";
    } else {
      txt = "";
    }
    document.getElementById("demo").innerHTML = txt;
  }