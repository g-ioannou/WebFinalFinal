//show password text in login
$(document).ready(function(){
    $('#check_log').click(function () {
        var password_log = $("#password_log").val();
        if ($('#password_log').attr('type') == 'text') {
            $('#password_log').attr('type', 'password');
        } else {
            $('#password_log').attr('type', 'text');
        }   
    });
});

//show password text in register
$(document).ready(function(){
    $('#check_reg').click(function () {
        var password_reg = $("#password_reg").val();
        if ($('#password_reg').attr('type') == 'text') {
            $('#password_reg').attr('type', 'password');
        } else {
            $('#password_reg').attr('type', 'text');
        }   
    });
}); 

//show box for validate password
$(document).ready(function() {
    $('#password_reg').keyup(function() {
        
        var password_reg = $("#password_reg").val();
        
        //validate the length
        if ( password_reg.length < 8 ) {
            $('#length').removeClass('valid').addClass('invalid');
        } else {
            $('#length').removeClass('invalid').addClass('valid');
        }
        //validate letter
        if ( password_reg.match(/[A-z]/) ) {
            $('#letter').removeClass('invalid').addClass('valid');
        } else {
            $('#letter').removeClass('valid').addClass('invalid');
        }

        //validate capital letter
        if ( password_reg.match(/[A-Z]/) ) {
            $('#capital').removeClass('invalid').addClass('valid');
        } else {
            $('#capital').removeClass('valid').addClass('invalid');
        }

        //validate number
        if ( password_reg.match(/\d/) ) {
            $('#number').removeClass('invalid').addClass('valid');
        } else {
            $('#number').removeClass('valid').addClass('invalid');
        }

        //validate symbol
        if ( password_reg.match(/[!@#$%^&*]/) ) {
            $('#symbol').removeClass('invalid').addClass('valid');
        } else {
            $('#symbol').removeClass('valid').addClass('invalid');
        }


    }).focus(function() {
        $('#password_reg_info').show();
    }).blur(function() {
        $('#password_reg_info').hide();
    });

});