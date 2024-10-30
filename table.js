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
        console.log(doc.data());
        Users.push(doc.data());
        console.log(Users)
        var count = 1;
        var classDataTable = Users.map((data) => {
        // var studentId = data.studentId;
        var studentNames = data.data.firstname + ' ' + data.surname;
        var totalMark = data.attendance + data.test + data.softSkillAtt + data.softSkillProject + data.finalProject;
        console.log(typeof(Users))
            return `<div>
            
            <tr>
                <td>${count++}</td>
                <td>${studentNames}</td>
                <td>${totalMark}</td>
            </tr>
            
            </div>
            `
        }).join(' ')
        
        //cities.push(doc.data().name);
        document.getElementById('classDataTable').innerHTML = classDataTable;
    });
});
