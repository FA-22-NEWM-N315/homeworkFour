function init() {
    $("login").on("click", function(e) {
        e.preventDefault();

        let em = $("#email").val();
        let pw = $("#password").val();


        if(em == "") {
            alert("Please enter your email")
            console.log("email");
        }else if (pw == "") {
            alert("Please enter your password")
            console.log("password");
        }else{
            Swal.fire(
                'Awesome!',
                'You have successfully logged in!',
                'Happy Watching!'
              )

              console.log("success");
        }
    });
}



function initListeners() {}
 
$(document).ready(function () {
    init();
});