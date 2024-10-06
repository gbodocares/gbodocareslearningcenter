


const registerBtn = document.getElementById("signup").onclick = ((e) => {
    e.preventDefault()
    console.log('clicked')

    const fname = document.getElementById("fname-signup").value;
    const surname = document.getElementById("surname-signup").value;
    const studentId = document.getElementById("studentId").value;
    const email = document.getElementById("email-signup").value;
    const password = document.getElementById("password-signup").value;
    const gender = document.getElementById('gender').value;
    const department = document.getElementById('dept').value;
    

    console.log(gender);

    //const today = new Date();

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
            db.collection("students").doc(userCredentials.user.uid).set({
                firstname: fname,
                surname: surname,
                email: email,
                gender: gender,
                userId: userCredentials.user.uid,
                bio: '',
                studentId: studentId,
                phone: '',  
                address: '',
                dept: department,
                test: 0,
                imageUrl: '',
                attendance: 0,
                softSkillAtt: 0,
                softSkillProject: 0,
                finalProject: 0,
                total: 0,
                //created_at: today.getFullYear() + "-" + (today.getMonth() +1) + "-" + today.getDate()
            })
            swal({
                title: "Student Account",
                text: "Account Creation Successful",
                icon: "success",
                button: "Proceed to Dashboard"
            }).then(function () {
                window.location.href = "dashboard.html"
            })
        }).catch(error => {
            $("#email").css("border-bottom", "solid red 2px")
            $("#error-email").text(error.message)
            $("#spinner").hide()
            $("#signup").show()
            return false
    })
    

})


