document.getElementById("sub-nom").addEventListener("submit", submitNomination);


function submitNomination(e){
    console.log('clicked');
    
    e.preventDefault();

    let id = Math.floor(Math.random() * 10000000);
    let awardCategory = document.querySelector('#awardCategory').value;
    let nomineeDept = document.querySelector('#nomineeDept').value;
    let nomineeName = document.querySelector('#nomineeName').value;
    let shortStatement = document.querySelector('#shortStatement').value; 
    let fullName01 = document.getElementById('fullName').value;
    let studentId = document.querySelector('#studId').value;

   

    firebase.database().ref('awardNominations/' + id).set({
        awardCategory: awardCategory,
        nomineeDept: nomineeDept,
        nomineeName: nomineeName,
        shortStatement: shortStatement,
        fullName: fullName01,
        studentId: studentId
    });

    swal({
    title: "Students Awards Batch8",
    text: "Nomination Submitted",
    icon: "success",
    button: "Return to Dashboard"
    }).then(function () {
    window.location.reload();
    })

}

function nominateNow(){
    document.getElementById('intro').style.display = 'none';
    document.getElementById('allForm').style.display = 'block';

}

const stepMenuOne = document.querySelector('.formbold-step-menu1')
const stepMenuTwo = document.querySelector('.formbold-step-menu2')
const stepMenuThree = document.querySelector('.formbold-step-menu3')



const stepOne = document.querySelector('.formbold-form-step-1')
const stepTwo = document.querySelector('.formbold-form-step-2')
const stepThree = document.querySelector('.formbold-form-step-3')


const formSubmitBtn = document.querySelector('.formbold-btn')
const formBackBtn = document.querySelector('.formbold-back-btn')
const nominationSubmitBtn = document.querySelector('.submitNom')

formSubmitBtn.addEventListener("click", function(event){
event.preventDefault()
if(stepMenuOne.className == 'formbold-step-menu1 active') {
event.preventDefault()

stepMenuOne.classList.remove('active')
stepMenuTwo.classList.add('active')

stepOne.classList.remove('active')
stepTwo.classList.add('active')

formBackBtn.classList.add('active')
formBackBtn.addEventListener("click", function (event) {
event.preventDefault()

stepMenuOne.classList.add('active')
stepMenuTwo.classList.remove('active')

stepOne.classList.add('active')
stepTwo.classList.remove('active')

formBackBtn.classList.remove('active')

})

} else if(stepMenuTwo.className == 'formbold-step-menu2 active') {
event.preventDefault()

stepMenuTwo.classList.remove('active')
stepMenuThree.classList.add('active')

stepTwo.classList.remove('active')
stepThree.classList.add('active')

formBackBtn.classList.remove('active')
formSubmitBtn.style.display = 'none';
nominationSubmitBtn.style.display = 'block';



} 
})









