const resetButton = document.getElementById("resetBtn").onclick = ((e) => {
    e.preventDefault();

    var email1 = document.getElementById('resetPassword').value;
    console.log(email1);
    firebase.auth().sendPasswordResetEmail(email1)
  .then(() => {
    swal({
        title: "Password Reset",
        text: "Check your email reset instructions has been sent to your email",
        icon: "success",
        button: "Back to home"
    }).then(function () {
        window.location.href = "index.html"
    })
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

});