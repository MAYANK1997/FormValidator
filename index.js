const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordMatches = false;

const users = [];

function validateForm(){
 
    isValid = form.checkValidity();
    if(!isValid){

    message.textContent = 'Please fill out all the fields.'
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;

    }

    if(password1El.value===password2El.value){

        passwordMatches = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    }
    else{

        passwordMatches = true;
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        message.textContent = 'Make sure passwords match.'
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }

    if(isValid && passwordMatches){

        message.textContent = 'Successfully Registered!'
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';

    }


}


function storeFormData(){

  const user = {
    
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.url.value,
    password: form.password.value


  };

  users.push(user);

}

function processFormData(e){

e.preventDefault();
validateForm();
if(isValid && passwordMatches){
    storeFormData();
    
}


}

form.addEventListener('submit',processFormData);