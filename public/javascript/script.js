  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }


    const validator = () =>{
      if (document.contactForm.name.value === ""){
        alert('please enter your name')
      } else if(document.contactForm.email.value === ""){
        alert('please enter an email')
      } else if(document.contactForm.message.value ===""){
        alert('please enter an email')
      }

    }
    