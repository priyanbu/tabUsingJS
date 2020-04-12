

function doSignup(){
  event.preventDefault();
  let data = {};
  let form = document.getElementById('signup-form').elements;
  for(let i =  0; i < (form.length - 1); i++){
    if(form[i].type == 'checkbox'){
     data[form[i].name] = form[i].checked;
    }else{
      data[form[i].name] = form[i].value;
    }
  }
  console.log('data',data);
  formClear();
}
function myFunction() {
  event.preventDefault();
  let firstname = document.getElementById("firstname").value
  let lastname = document.getElementById("lastname").value
  let password = document.getElementById("password").value
  let mail = document.getElementById("mail").value;
  let policyAgree = document.getElementById("policy-agree").checked;
  let data = {
    firstname,
    lastname,
    password,
    mail,
    policyAgree
  }
  console.log(" user data to signup",data);
  // doApiCall(data);
  formClear();
}

function formClear(){
  document.getElementById("firstname").value = '';
  document.getElementById("lastname").value = '';
  document.getElementById("password").value = '';
  document.getElementById("mail").value = '';
  document.getElementById("policy-agree").checked = null
}


// tab script

function doActive(activeParam){
  let signup = document.querySelector('.tab-content .signup');
  let signin = document.querySelector('.tab-content .signin');
  console.log('activeParam',activeParam);

  if(activeParam){
    signup.style.display = "block";
    signin.style.display = "none";
  }else{
    signup.style.display = "none";
    signin.style.display = "block";
  }

}
doActive(true);

let tabSignup = document.querySelector('.tabs .signup');
let tabSignin = document.querySelector('.tabs .signin');

tabSignup.addEventListener('click', () => {
  tabSignup.classList.add('active');
  tabSignin.classList.remove('active');
  doActive(true);
});
tabSignin.addEventListener('click', () => {
  tabSignin.classList.add('active');
  tabSignup.classList.remove('active');
  doActive(false);
});

