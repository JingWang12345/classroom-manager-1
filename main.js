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

const classroom1 = new ClassRoom([student1, student2, student3, student4]);

let students1 = classroom1.students;

console.log(students1);

function displayClassroom(students){

document.getElementById('student-list').innerHTML = '';

for (let i = 0; i < students.length; i++) {
    const element = students[i];
    let studentList = document.getElementById('student-list');
    let newLi = document.createElement('li');
    studentList.appendChild(newLi);
 
     const studentName = document.createTextNode(element.name+' '+element.surname);
    newLi.appendChild(studentName)   
    
   
    const rimuoviButton = document.createElement('button');

    const buttonText = document.createTextNode('Rimuovi');

    rimuoviButton.appendChild(buttonText);
    rimuoviButton.addEventListener('click', (event) => removeStudent(element));
    newLi.appendChild(rimuoviButton);
    studentList.appendChild(newLi);
   
}
}

function shuffleTheClassroom(){
    
        for (let i = students1.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = students1[i];
            students1[i] =students1[j];
            students1[j] = temp;

        }
        displayClassroom(students1)
    }


function addStudentToClassroom(){
    const students = classroom1.students
const inputName = document.getElementById('input-name');
const inputSurname = document.getElementById('input-surname');
const newStudent = new Student(inputName.value, inputSurname.value);
if(inputName.value !== '' && inputSurname.value !== '') {
    students.push(newStudent);
    displayClassroom(classroom1.students)
}

}
function removeStudent(student){
    const studentIndex = students1.indexOf(student);
    students1.splice(studentIndex, 1);
    displayClassroom(students1);
}

displayClassroom(students1)
