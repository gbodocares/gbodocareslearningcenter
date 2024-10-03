var studentName = document.getElementById('fullname');
var studentName1 = document.getElementById('studentName1');
var studentName2 = document.getElementById('studentName2');
var studentName3 = document.getElementById('studentName3');
var studentId = document.getElementById('studentId');
var phoneNumber = document.getElementById('phoneNumber');
var studentEmail = document.getElementById('studentEmail');
var studentEmail1 = document.getElementById('studentEmail1');
var address11 = document.getElementById('address11');
var bio11 = document.getElementById('bio11');
var att = document.getElementById('att');
var test = document.getElementById('test');
var ssatt = document.getElementById('ssatt');
var ssproject = document.getElementById('ssproject');
var finalproject = document.getElementById('finalproject');
var total1 = document.getElementById('total1');
var image = document.getElementById('photo');
var image1 = document.getElementById('profileImg1');
var image2 = document.getElementById('profileImg2');
var gender = document.getElementById('gender1');

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      
      var uid = user.uid;
      
      var docRef = db.collection("students").doc(uid);
      // ...
      docRef.get().then((doc) => {
        if (doc.exists) {
            var studentDetails = doc.data();
            console.log("Document data:", studentDetails);
           
            var upper = studentDetails.firstname[0].toUpperCase() + studentDetails.firstname.slice(1) + ' ' + studentDetails.surname[0].toUpperCase() + studentDetails.surname.slice(1);
            var upper1 = studentDetails.firstname[0].toUpperCase() + studentDetails.firstname.slice(1);
            var upper2 =  studentDetails.surname[0].toUpperCase() + studentDetails.surname.slice(1);
          
            studentName.innerHTML = upper;
            studentName1.innerHTML = upper;
            studentName2.innerHTML = upper;
            studentName3.innerHTML = upper;
            studentEmail.innerHTML = studentDetails.email;
            studentId.innerHTML = studentDetails.studentId;
            phoneNumber.innerHTML = studentDetails.phone;
            // studentEmail1.innerHTML = studentDetails.email;
            address11.innerHTML = studentDetails.address;
            bio11.innerHTML = studentDetails.bio;
            att.innerHTML = studentDetails.attendance;
            test.innerHTML = studentDetails.test;
            ssatt.innerHTML = studentDetails.softSkillAtt;
            ssproject.innerHTML = studentDetails.softSkillProject;
            finalproject.innerHTML = studentDetails.finalProject;
            var alltotal = studentDetails.attendance + studentDetails.test + studentDetails.softSkillAtt + studentDetails.softSkillProject + studentDetails.finalProject;
            total1.innerHTML = alltotal;
            gender.innerHTML = studentDetails.gender;
            image.src = studentDetails.imageUrl;
            image1.src = studentDetails.imageUrl;
            image2.src = studentDetails.imageUrl;

            document.getElementById('fname').value = upper1;
            document.getElementById('sname').value = upper2;
            document.getElementById('phone').value = studentDetails.phone;
            // document.getElementById('email').value = studentDetails.email;
            document.getElementById('address').value = studentDetails.address;
            document.getElementById('bio').value = studentDetails.bio;

        } else {
           
            console.log("No such document!");
        }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    
    } else {
      // User is signed out
      // ...
    }
});



