const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('Email');
const password=document.getElementById('Password');
const password2=document.getElementById('Confirm_Password');
//shoe input error message
function showError(input,message){ 
    const formControl=input.parentElement;// parentElement -> which gets whatever the parents is
    formControl.className='form-control error';// we are overriding the class
    const small = formControl.querySelector('small');
    small.innerText=message;
}
//show success outline
function showSuccess(input) {
    const formControl=input.parentElement;
    formControl.className='form-control success';

}
//check email validation
function isValidEmail(email){
    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };

}
// check required
function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)}must be atleast ${min} characters`);
        
    }
}


// check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()===''){
            console.log(input.id);
            showError(input,`${getFieldName(input)} is required`)
        }
        else{
            showSuccess(input);
        }

    });
        
    

}

// get fieldname
function getFieldName(input){
    return input.id.charAt(0).tuUpperCase() + input.id.slice(1);
}


//event listeners
form.addEventListener('submit',function(e) {
    e.preventDefault();
// first we used if and else statements
// but is was getting too long
// if(username.value===''){
//    showError(username,'username is required');
// }

// else{
//     showSuccess(username);
// }

// if(email.value ===''){
//     showError(email,'email is required');
//  }
//  else{
//      showSuccess(email);
//  }
//  if(password.value ===''){
//     showError(password,'password is required');
//  }
//  else{
//      showSuccess(password);
//  }
//  if(password2.value===''){
//     showError(password2,'password2 is required');
//  }
//  else{
//      showSuccess(password2);
//  }




    checkRequired([username,email,password,password2]);
    checkLength(username,3,15);
    checkLength(password,6,25,);

});



//e.prevent - which actually helps in not actually submitting 