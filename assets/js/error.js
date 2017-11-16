
document.querySelector('#username').onchange = validateInput;
document.querySelector('#email').onchange = validateInput;

function validateInput(){
  var email = document.getElementById('email')
  var spa = email.parentElement.children[1]
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
      {

        //document.getElementById('testlabel').innerText = 'valid email';
        //email.parentElement.children[1].className = "hint--right"
        email.parentElement.className = "form-group has-success has-feedback"


      }

else    {
  
        email.parentElement.children[1].className = "hint--right"
        console.log(email.parentElement.children[1]['aria-label'])
        email.parentElement.className = "form-group has-error has-feedback"
        console.log(email.parentElement.children[1]);
  }
  return false;
}

//.right-addon .glyphicon { right: 0px;}
