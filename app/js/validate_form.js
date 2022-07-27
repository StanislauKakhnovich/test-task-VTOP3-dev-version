let nameUser = document.querySelector('#name');
let lastNameUser = document.querySelector('#last-name');
let emailUser = document.querySelector('#email');
let passwordUser = document.querySelector('#password');
let confirmPasswordUser = document.querySelector('#confirm-password');
let buttonUp = document.querySelector('.btn-signup');


let emptyFieldName = function(){
    if(nameUser.value.trim() == '') {
        nameUser.previousElementSibling.style.display = 'inline-block';
        nameUser.style.borderBottomColor = 'red';
        return false;
       } else {
        nameUser.previousElementSibling.style.display = 'none';
        nameUser.style.borderBottomColor = '#F2F2F2';
        return true;
       }  
};

let emptyFieldLastName = function(){
    if(lastNameUser.value.trim() == '') {
        lastNameUser.previousElementSibling.style.display = 'inline-block';
        lastNameUser.style.borderBottomColor = 'red';
        return false;
       } else {
        lastNameUser.previousElementSibling.style.display = 'none';
        lastNameUser.style.borderBottomColor = '#F2F2F2';
        return true;
       }  
};

// let emptyField = function(fieldInput){
//     this = fieldInput;
//     if(this.value.trim() == '') {
//         this.previousElementSibling.style.display = 'inline-block';
//         this.style.borderBottomColor = 'red';
//        } else {
//         this.previousElementSibling.style.display = 'none';
//         this.style.borderBottomColor = '#F2F2F2';
//        }  
// };


nameUser.addEventListener('input', emptyFieldName);
lastNameUser.addEventListener('input', emptyFieldLastName);
nameUser.addEventListener('blur', emptyFieldName);
lastNameUser.addEventListener('blur', emptyFieldLastName);

let validateEmailUser = () => {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let address = emailUser.value;
    if(reg.test(address) == false) {
        emailUser.previousElementSibling.style.display = 'inline-block';
        emailUser.style.borderBottomColor = 'red';
        emailUser.style.color = 'red';
        return false;
    } else {
        emailUser.previousElementSibling.style.display = 'none';
        emailUser.style.borderBottomColor = '#F2F2F2';
        emailUser.style.color = 'black';
        return true;
    }
 }

emailUser.addEventListener('input', validateEmailUser);
emailUser.addEventListener('blur', validateEmailUser);

let validatePasswordUser = () => {
    let reg = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[0-9a-zA-Z]{8,}$/;
    let password = passwordUser.value;
    if(reg.test(password) == false) {
        passwordUser.previousElementSibling.style.display = 'inline-block';
        passwordUser.style.borderBottomColor = 'red';
        passwordUser.style.color = 'red';
        return false;
    } else {
        passwordUser.previousElementSibling.style.display = 'none';
        passwordUser.style.borderBottomColor = '#F2F2F2';
        passwordUser.style.color = 'black';
        return true;
    }
 }

 passwordUser.addEventListener('input', validatePasswordUser);
 passwordUser.addEventListener('blur', validatePasswordUser);

 let validateConfirmPasswordUser = () => {
    let password = passwordUser.value;
    let confirmPassword = confirmPasswordUser.value;
    if (!password) {
        confirmPasswordUser.previousElementSibling.style.display = 'inline-block';
        confirmPasswordUser.style.borderBottomColor = 'red';
        confirmPasswordUser.style.color = 'red';
        return false;
    }
    else if (password!=confirmPassword) {
        confirmPasswordUser.previousElementSibling.style.display = 'inline-block';
        confirmPasswordUser.style.borderBottomColor = 'red';
        confirmPasswordUser.style.color = 'red';
        return false;
    } else {
        confirmPasswordUser.previousElementSibling.style.display = 'none';
        confirmPasswordUser.style.borderBottomColor = '#F2F2F2';
        confirmPasswordUser.style.color = 'black';
        return true;
    }
 }

 confirmPasswordUser.addEventListener('input', validateConfirmPasswordUser);
 confirmPasswordUser.addEventListener('blur', validateConfirmPasswordUser);

let arrValidateFunction = [emptyFieldName, emptyFieldLastName, validateEmailUser, validatePasswordUser, validateConfirmPasswordUser];

let submitForm = () =>{
    let copy = [...arrValidateFunction];
    copy = copy.filter(func=>func());
    console.log(copy);

    if(copy.length!=5) console.log('Not ok');
    else console.log('Ok');
}

buttonUp.addEventListener('click', submitForm);

