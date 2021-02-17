let studentArr = [];
let proffesorArr = [];

function addStudent() {
    let s = new Student();
    s.age = parseInt(prompt("Enter age: "));
    s.grade = parseInt(prompt("Enter grade: "));
    s.name = prompt("Enter name: ");
    s.id = prompt("Enter id: ");
    studentArr.push(s);
}

function addProffesor() {
    let p = new Proffesor();
    p.age = parseInt(prompt("Enter age: "));
    p.name = prompt("Enter name: ");
    p.state = parseInt(prompt("Enter state (prof=0 ,lecture =1, senior=2)"));
    proffesorArr.push(p);
}

function sortProffosor() {
    let choice = prompt("Enter sort (age/name/state)");

    for (let i = 0; i < proffesorArr.length; i++) {
        for (let j = 0; j < proffesorArr.length - 1; j++) {
            if (proffesorArr[j][choice] > proffesorArr[j + 1][choice]) {
                let swap = proffesorArr[j];
                proffesorArr[j] = proffesorArr[j + 1];
                proffesorArr[j + 1] = swap;
            }
        }
    }
    alert(proffesorArr);
}

function sortStudent() {
    let choice = prompt("Enter sort (age/grade/name/id)");
    for (let i = 0; i < studentArr.length; i++) {
        for (let j = 0; j < studentArr.length - 1; j++) {
            if (studentArr[j][choice] > studentArr[j + 1][choice]) {
                let swap = studentArr[j];
                studentArr[j] = studentArr[j + 1];
                studentArr[j + 1] = swap;
            }
        }
    }
    alert(studentArr);
}
