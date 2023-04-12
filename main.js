///BONUS
// 1) rimozione dello studente
// 2) sito esteticamente gradevole
// 3) disposizione degli studenti non in lista ma affiancati a due a due
// 4) aggiunta della data di nascita dello studente
// 5) se è il compleanno dello studente il suo nome sarà scritto in modo evidenziato

const student1 = new Student('Simone', 'Maccarone');
const student2 = new Student('Luis Alberto', 'Castro');
const student3 = new Student('Davide', 'Consigliere');
const student4 = new Student('Francesco', 'Badile');

const arrayOfStudents = [student1, student2, student3, student4];

const classroom1 = new ClassRoom(arrayOfStudents);
displayClassroom(classroom1);


// function displayClassroom(classroom){

//     const studentList = document.getElementById('student-list');
//     studentList.innerHTML = '';

//     for (let i = 0; i < classroom.students.length; i++) {
//         const student = classroom.students[i];
//         studentList.innerHTML += `<li class="list-element">${student.name} ${student.surname}<button>cancella</button></li>`
        
//     }

// }


function displayClassroom(classroom) {
    const studentList = document.getElementById('student-list');
    studentList.innerHTML = '';
    for (let i = 0; i < classroom.students.length; i++) {

        const student = classroom.students[i];

        const newLi = document.createElement('li');

        const studentNode = document.createTextNode(student.surname + ' ' + student.name);

        newLi.appendChild(studentNode);

        const deleteBtn = document.createElement('button');

        deleteBtn.classList.add('remove-btn');

        const petFootImg = document.createElement('img');

        petFootImg.classList.add('remove-img');

        petFootImg.src = './assets/pet1.png'

        deleteBtn.addEventListener('click', (event) => removeStudent(element));

        deleteBtn.appendChild(petFootImg);

        newLi.appendChild(deleteBtn);

        studentList.appendChild(newLi);
    }
}


function shuffleTheClassroom() {
    classroom1.shuffleStudents();
    displayClassroom(classroom1);
}


function addStudentToClassroom() {
    const nameInput = document.getElementById('name-input');
    const surnameInput = document.getElementById('surname-input');

    const name = nameInput.value;
    const surname = surnameInput.value;

    if (name !== '' && surname !== '') {
        const newStudent = new Student(name, surname);
        classroom1.addStudent(newStudent);
        displayClassroom(classroom1);
    }

}

function removeStudentFromClassroom(student){
    classroom1.removeStudent(student);
    displayClassroom(classroom1);
}

function colorMainTitle(){
    const mainTitle = document.querySelector('.main-title');
    mainTitle.style.color = 'tomato';
}
