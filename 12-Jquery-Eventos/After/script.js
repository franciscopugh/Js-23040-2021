/*
$(document).ready(function() { 
    $( "#submitform" ).on( "click", function() {
     

     
    
     
     
     if() {    
            $('#errorusername').show();    
            return false;  
     } 

     if(!validateMail.test(emailid)) {    
             
            return false;       
     } 
     
     if(){    
                
            return false;         
     }

     if(){    
         
        return false;       
     } else {
        alert("successful")
     }
      
    });
});

*/

let validateMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; //fran@fran.com
let validateUser = /^[a-z0-9_-]{5,15}$/;
let validatePassword = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
let validateNumber = /^[0-9]{10}$/;

(() => {
    $('#idForm').on('submit',(e) => {
        e.preventDefault()

        let username = $('#username').val(); //val() = .value
        let emailid = $('#emailid').val();
        let mobilenumber = $('#mobilenumber').val();
        let userpassword = $('#userpassword').val();

        $('.errorMsg').hide();

        if(!validateUser.test(username)) {    
            $('#errorusername').show();    
        } else if(!validateMail.test(emailid)) {
            $('#erroremail').show();
        } else if(!validateNumber.test(mobilenumber)) {
            $('#errormobile').show(); 
        } else if(!validatePassword.test(userpassword)) {
            $('#errorpassword').show();    
        } else {
            alert("Usuario registrado correctamente")
        }
    })
}) 