var username = document.getElementById("user").value;
var password = document.getElementById("pass").value;

var user1 = "nice";
var pass1 = "nice";

login()
function login(){
    
// TODO: Check This Error
    if (username == user1.toString() && password == pass1.toString()){
        
        swal.fire({
            title: "Login Successful",
            text: "Welcome Mr. Gopinath",
            icon: "success",
            button: "Aww yiss!",
          });

          setTimeout(function(){
                window.location = "confirmation.html";     
        },3000);
    }
    else{
        swal.fire({
            title: "Failed",
            text: "Login Failed. Try Again",
            icon: "error",
            button: "Try Again",
          });
          
    }
}


