

function editProfile(e) {
    event.preventDefault();
    console.log('clicked');
    firebase.auth().onAuthStateChanged((user) => {
        console.log(user.uid);
        if (user) {
            var fname1 =  document.getElementById('fname').value;
            var sname1 =  document.getElementById('sname').value;
            var phone1 =  document.getElementById('phone').value;
            // var email1 = document.getElementById('email').value;
            var address1 = document.getElementById('address').value;
            var bio1 = document.getElementById('bio').value;
            var department1 = document.getElementById('dept1').value;
            var studentId1 = document.getElementById('studentId1').value;

             db.collection("students").doc(user.uid).update({
                firstname: fname1,
                surname: sname1,
                // email: email1,
                bio: bio1,
                studentId: studentId1,
                phone: phone1,  
                dept: department1,
                address: address1
             })
             swal({
                title: "Profile",
                text: "Profile updated successfully",
                icon: "success",
                button: "Back to Profile"
            }).then(function () {
                window.location.reload()
            })
        } else {
          // User is signed out
          // ...
        }
    });
}









