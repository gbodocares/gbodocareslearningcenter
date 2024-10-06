

const loginBtn = document.getElementById("login").onclick = ((e) => {
    e.preventDefault()

    const password = document.getElementById("password-signin").value
    const email = document.getElementById("email-signin").value

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredentials) => {
            sessionStorage.setItem("uid", userCredentials.user.uid)
            window.location.href = "dashboard.html";
        }).catch((error) => {
            swal({
                title: "Sign In",
                text: 'invalid Login Details',
                icon: "error",
                button: "Try again"
            }).then(function () {
                $("#spinner").hide()
                $("#signin").show()
                return false
            })
    })
    
});