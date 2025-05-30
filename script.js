
$(document).ready(function() {

    var signUp=true
    $("#Warning").hide()
    function ValidateEmail(mail) 
    {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('#Email').val()))
    {
        return (true)
    }
        
        return (false)
    }


    function validatePassword(password) {
        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#\$%\^\&*\)\(+=._-]/.test(password);

        if (password.length < minLength) {
            return "Password must be at least 8 characters long.";
        }
        if (!hasUppercase) {
            return "Password must include at least one uppercase letter.";
        }
        if (!hasLowercase) {
            return "Password must include at least one lowercase letter.";
        }
        if (!hasNumber) {
            return "Password must include at least one number.";
        }
        if (!hasSpecialChar) {
            return "Password must include at least one special character.";
        }

        return "Valid";
    }


  $('#Signup').click(function() {
    if (signUp == true) {
      if($('#FirstName').val()){
        if($('#Numer').val().toString().length==10&&$('#Numer').val()>0){


        
        if(ValidateEmail($('#Email').val())==true){
            if(validatePassword($('#password').val())==="Valid"){
                 $('#Warning').html('Sign Up Successful!')
                $('#Warning').css({
                    'background-color':'green',

                })
                $('#Warning').show(500, function() {
                    setTimeout(() => {
                        $('#Warning').hide(1000);
                    }, 3000);
                });

                

            }else{
                $('#Warning').html(validatePassword($('#password').val()))
                $('#Warning').css({
                    'background-color': 'red',

                })
                $('#Warning').show(500, function() {
                    setTimeout(() => {
                        $('#Warning').hide(1000);
                    }, 3000);
                });
            }

        }else{
            $('#Warning').html("Invalid Email Id")
                $('#Warning').css({
                    'background-color': 'red',

                })
                $('#Warning').show(500, function() {
                    setTimeout(() => {
                        $('#Warning').hide(1000);
                    }, 3000);
                });
        }
        }else{
            
            $('#Warning').html("Invalid Phone Number")
                $('#Warning').css({
                    'background-color': 'red',

                })
                $('#Warning').show(500, function() {
                    setTimeout(() => {
                        $('#Warning').hide(1000);
                    }, 3000);
                });

        }
      }else{
        $('#Warning').html("Please enter your first name")
                $('#Warning').css({
                    'background-color': 'red',

                })
                $('#Warning').show(500, function() {
                    setTimeout(() => {
                        $('#Warning').hide(1000);
                    }, 3000);
                });

      }
      
     

      

    }else{
         $('h1').html("Welcome!👏 New Comer")
         $('.SignUpCard').css({
            'transform-style': 'preserve-3d',
            'transform': 'rotateY(0deg)',
           

        })
        $('#Signin').css({
            'transform-style': 'preserve-3d',
            'transform': 'rotateY(0deg)',
           

        })
        $('#Signup').css({
            'transform-style': 'preserve-3d',
            'transform': 'rotateY(0deg)',
           

        })
        $('#Email').css({
            'transform-style': 'preserve-3d',
            'transform': 'rotateY(0deg)',
           

        })
        $('#password').css({
            'transform-style': 'preserve-3d',
            'transform': 'rotateY(0deg)',
           

        })        
        $('#FirstName').show(500)
        $('#LastName').show(500)
        $('#Numer').show(500)

        signUp=true
    }
  });
  $('#Signin').click(function(){
    if(signUp==true){
        $('h1').html("Hey Look Who is Back!")
        $('#FirstName').hide(500)
        $('#LastName').hide(500)
        $('#Numer').hide(500)
        $('.SignUpCard').css({
            'transform-style': 'preserve-3d',
            'transform': 'rotateY(180deg)',
           

        })
        $('#Signin').css({
            'transform-style': 'preserve-3d',
            'transform': 'rotateY(180deg)',
           

        })
        $('#Signup').css({
            'transform-style': 'preserve-3d',
            'transform': 'rotateY(180deg)',
           

        })
        $('#Email').css({
            'transform-style': 'preserve-3d',
            'transform': 'rotateY(180deg)',
           

        })
        $('#password').css({
            'transform-style': 'preserve-3d',
            'transform': 'rotateY(180deg)',
           

        })     
          
        signUp=false
    }else{
        alert("This is a dummy sign in form") 
    }

  })
});


