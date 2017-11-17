
//document.querySelector('#username').onchange = validateInput;
document.querySelector('#email').onchange = validateInput;

function validateInput(){
  var email = document.getElementById('email')
  var spa = email.parentElement.children[1]
  if (email.value == "")
      {
        email.parentElement.className = "form-group"
        email.parentElement.children[1].innerText= "Enter an Email Address!"
      }
  else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
      {
        email.parentElement.children[1].innerText= ""
        email.parentElement.className = "form-group has-success";
      }

   else {
        email.parentElement.children[1].innerText= "Invalid Email"
        //email.parentElement.children[1].style.color = "red";
        email.parentElement.className = "form-group has-error"
      }

  return false;

}
