class ClassRoom {

    constructor(students = []) {
        this.students = students;
    }

    addStudent(student) {
        this.students.push(student);
    }

    removeStudent(student){
        const index = this.students.indexOf(student);
        if (index >= 0) {
            this.students.splice(index, 1);
        }
    }

    shuffleStudents() {
        const tempArray = [];
        while (this.students.length > 0) {
            const randomNumber = Math.random() * this.students.length;
            const randomIndex = Math.floor(randomNumber);
            const arrayOfDeleted = this.students.splice(randomIndex, 1);
            const randomStudent = arrayOfDeleted[0];
            tempArray.push(randomStudent);
        }

        this.students = tempArray;


    }
    // shuffleStudents2(){
    //     let students = this.students;
    //     let j;
    //     let temp;
    //     for (let i = students.length - 1; i > 0; i--) {
    //         j = Math.floor(Math.random() * (i + 1));
    //         temp = students[i];
    //         students[i] = students[j];
    //         students[j] = temp;
    //     }

    // }

    // shuffleStudents2(){
    //     this.students.sort(function() {return 0.5 - Math.random()});
    // }



}