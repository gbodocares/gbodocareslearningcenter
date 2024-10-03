document.getElementById("pre-register").addEventListener("submit", preRegister);

function preRegister(e) {
    e.preventDefault();

    let id = Math.floor(Math.random() * 10000000);
    let fullname = document.querySelector('#fullname').value;
    let phone = document.querySelector('#phone').value;
    let course = document.querySelector('#course').value;

    firebase.database().ref('pre-register/' + id).set({
        signUpId: id,
        phone: phone,
        fullname: fullname,
        course: course
    });

    swal({
        title: "Pre-Registration",
        text: "Sign Up Successful",
        icon: "success",
        button: "Return to home"
    }).then(function () {
        window.location.reload();
    })
}