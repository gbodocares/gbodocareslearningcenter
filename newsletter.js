document.getElementById("newsletter").addEventListener("submit", newsletter);

function newsletter(e) {
    e.preventDefault();

    let id = Math.floor(Math.random() * 10000000);
    let email = document.querySelector('#email').value;

    firebase.database().ref('newsletter/' + id).set({
        signUpId: id,
        email: email
       
    });

    swal({
        title: "Newsletter",
        text: "Subscription Successful",
        icon: "success",
        button: "Return to home"
    }).then(function () {
        window.location.reload();
    })
}