$(document).ready(function () {

    // for choosing login or registration
    $("#registration").hide();
    $('#main_login').on('click', function () {
        $("#login").show();
        $("#registration").hide();
    });
    $('#main_register').on('click', function () {
        $("#registration").show();
        $("#login").hide();
    });
    
    
    //validation and log in  
    $("#login_btn").click(function () {
        var email_log = $("#email_log").val();
        var password_log = $("#password_log").val();
        var email_regex = /^[\w%_\-.\d]+@[\w.\-]+.[A-Za-z]{2,6}$/; // regex email check
        var password_regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/; //regex password check

        if (email_log == "" || password_log == "") {
            $("#login_error").html("Please fill the fields.");
                
        }
        else {
            if (!email_regex.test(email_log)) {
                $("#login_error").html("Please fill all the fields.");
            }
            else {
                $.ajax({
                    method: "post",
                    url: "login_form.php",
                    data: {
                        type: 1,
                        email: email_log,
                        password: password_log
                    },
                    //dataType: "json",
                    success: function (response) {
                        // $("#login_error").html(data);
                        if (response == "success") {
                            window.location.href = "home.php";
                        }
                        else {
                            $("#login_error").html("Invalid email or password.");
                        }
                    }
                });
                //return true;
            }
        }
    });

    //validation and register
    $("#register_btn").click(function () {
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var username = $("#username").val();
        var email = $("#email_reg").val();
        var password = $("#password_reg").val();
        var email_regex = /^[\w%_\-.\d]+@[\w.\-]+.[A-Za-z]{2,6}$/; // regex email check
        var password_regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/; //regex password check
        var valid = true;
            
        $("#register_error").hide();
        $("#email_error_message").hide();
        $("#password_error_message").hide();

        if (firstname == "" || lastname == "" || username == "" || email == "" || password == "") {
            $("#register_error").html("Please fill the fields.");
            $("#register_error").show();
            valid = false;
        }
        else {
            if (username.length < 6 || username.indexOf(" ") !== -1) {
                $("#username_error_message").html("Invalid username. Username must contain at least 6 characters and no space.");
                $("#username_error_message").show();
                valid = false;
            }
            if (!email_regex.test(email)) {
                $("#email_error_message").html("Invalid email.");
                $("#email_error_message").show();
                valid = false;
            }
            if (!password_regex.test(password)) {
                $("#password_error_message").html("Invalid password.");
                $("#password_error_message").show();
                valid = false;
            }
        }
        if (valid == true) {
            $("#email_error_message").hide();
            $("#password_error_message").hide();
            $("#username_error_message").hide();
            $.ajax({
                method: "post",
                url: "login_form.php",
                data: {
                    type: 2,
                    firstname: firstname,
                    lastname: lastname,
                    username: username,
                    email: email,
                    password: password
                },
                success: function (response) {
                    if (response == "fail_user") {
                        $("#register_error").html("Username ID already exists.");
                        $("#register_error").show();
                    }
                    else if (response == "fail_email") {
                        $("#register_error").html("Email ID already exists.");
                        $("#register_error").show();
                    }
                    else {
                        //window.location.href = "login.html"; 
                        //$('#password_reg').val('');
                        $("#register_error").html("Registration success. You can login now.");
                        $("#register_error").show();

                        //clear input fields
                        $('#firstname').val('');
                        $('#lastname').val('');
                        $('#username').val('');
                        $('#email_reg').val('');
                        $('#password_reg').val('');
                    }
                }
            });
        }
    });
});


