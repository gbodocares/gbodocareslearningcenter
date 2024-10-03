function changeImage(){
    firebase.auth().onAuthStateChanged((user) => {
        var docRef = db.collection("students").doc(user.uid);
        const ref = firebase.storage().ref();
        const file = document.getElementById('photo').files[0];
        const kname = +new Date() + "-" + file.name;
        const metadata = {
            contentType: file.type
        };

        const task = ref.child(kname).put(file, metadata);task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            console.log(url);

            docRef.update({
                imageUrl: url
            })
            
            swal({
                title: "Profile Photo Update",
                text: "Photo Updated Successfully",
                icon: "success",
                button: "Return to profile"
            }).then(function () {
                window.location.reload();
            })
            
        }).catch(console.error);

    })

}