
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      
      var uid = user.uid;
      
      var docRef = db.collection("students").doc(uid);

      docRef.get().then((doc) => {
            if (doc.exists) {
                var studentDetails = doc.data();
                // console.log("Document data:", studentDetails);
                

                db.collection("students").where("dept", "==", studentDetails.dept)
                .get()
                .then((querySnapshot) => {
                    var Users = [];
               
                
                    querySnapshot.forEach((doc) => {
                        // console.log(doc.data());
                        let allNames = doc.data().firstname + ' ' + doc.data().surname;
                        let allImage = doc.data().imageUrl;
                        let allScores = doc.data().test + doc.data().attendance + doc.data().softSkillAtt + doc.data().softSkillProject + doc.data().finalProject;
                        let studentObj = {
                            personImage: allImage,
                            personName: allNames,
                            personScore: allScores
                        }
                        Users.push(studentObj);
                        Users.sort((a, b) => parseFloat(b.personScore) - parseFloat(a.personScore));
                        console.log(allImage)
                        let count = 1;
                        var classDataTable = Users.map((data) => {
                            return `<div>
                                <tr>
                                    <td>${count++}</td>
                                    <td><img src="${data.personImage}" alt="" /></td>
                                    <td>${data.personName}</td>
                                    <td>${data.personScore}</td>
                                </tr>
                            </div>
                            `
                        }).join(' ');
                        
                        document.getElementById('classDataTable').innerHTML = classDataTable;
                    });
                });
            



            
            }
        })
    }
})

// db.collection("students").where("dept", "==", studentDetails.dept)
//     .get()
//     .then((querySnapshot) => {
//     var Users = [];
   
    
//     querySnapshot.forEach((doc) => {
//         // console.log(doc.data());
//         let allNames = doc.data().firstname + ' ' + doc.data().surname;
//         let allScores = doc.data().test + doc.data().attendance + doc.data().softSkillAtt + doc.data().softSkillProject + doc.data().finalProject;
//         let studentObj = {
//             personName: allNames,
//             personScore: allScores
//         }
//         Users.push(studentObj);
//         Users.sort((a, b) => parseFloat(b.personScore) - parseFloat(a.personScore));
//         console.log(Users)
//         let count = 1;
//         var classDataTable = Users.map((data) => {
//             return `<div>
//                 <tr>
//                     <td>${count++}</td>
//                     <td>${data.personName}</td>
//                     <td>${data.personScore}</td>
//                 </tr>
//             </div>
//             `
//         }).join(' ');
        
//         document.getElementById('classDataTable').innerHTML = classDataTable;
//     });
// });
