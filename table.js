// function sortAsc(arr) {
//     return arr.slice().sort((a, b) => a - b);
//}

// const array = [5, 3, 9, 1, 7];
// const sortedArray = sortAsc(array);
// console.log("Sorted Array (Ascending):", sortedArray);

db.collection("students").where("dept", "==", "ui/ux design")
    .get()
    .then((querySnapshot) => {
    var Users = [];
   
    
    querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        let allNames = doc.data().firstname + ' ' + doc.data().surname;
        let allScores = doc.data().test + doc.data().attendance + doc.data().softSkillAtt + doc.data().softSkillProject + doc.data().finalProject;
        let studentObj = {
            personName: allNames,
            personScore: allScores
        }
        Users.push(studentObj);
        Users.sort((a, b) => parseFloat(b.personScore) - parseFloat(a.personScore));
        console.log(Users)
        let count = 1;
        var classDataTable = Users.map((data) => {
            return `<div>
                <tr>
                    <td>${count++}</td>
                    <td>${data.personName}</td>
                    <td>${data.personScore}</td>
                </tr>
            </div>
            `
        }).join(' ');
        // var count = 1;
        // var allScores = [];
        // var classDataTable = Users.map((data) => {
        // // var studentId = data.studentId;
        
        // var studentNames = data.firstname + ' ' + data.surname;
        // var totalMark = data.attendance + data.test + data.softSkillAtt + data.softSkillProject + data.finalProject;
        // allScores.push(totalMark);
        // allScores.sort(function(a, b){return b - a});

        // console.log("all scores" + allScores);

        // // console.log(('alltotal:' + allScores))
        //     return `<div>
            
        //     <tr>
        //         <td>${count++}</td>
        //         <td>${studentNames}</td>
        //         <td>${totalMark}</td>
        //     </tr>
            
        //     </div>
        //     `
        // }).join(' ')
        
        //cities.push(doc.data().name);
        document.getElementById('classDataTable').innerHTML = classDataTable;
    });
});
