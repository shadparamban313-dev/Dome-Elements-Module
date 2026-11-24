let students = [
    { id: 1, name: "Arun", age: 21, mark: 85, course: "MERN", active: true },
    { id: 2, name: "Rahul", age: 22, mark: 65, course: "Python", active: false },
    { id: 3, name: "Ajay", age: 20, mark: 90, course: "MERN", active: true },
    { id: 4, name: "John", age: 23, mark: 45, course: "Python", active: true },
    { id: 5, name: "Vishnu", age: 21, mark: 75, course: "MERN", active: false }
];
let student = students.map((student, index) => student.name);
console.log(student);

let studentMarks = students.map((student) => student.mark);

let studentLength = studentMarks.length;

let total = 0;

for (let i = 0; i < studentLength; i++) {
    total = total + studentMarks[i];
}

let avgMark = total / studentLength;

console.log("Total:", total);
console.log("Average:", avgMark);

let studentnames = students.map((studentnames, index) => studentnames.name.toUpperCase)
console.log(student);

let values = students.filter((students)=>students.mark>70)
console.log(values);

let merns = students.filter((students)=>students.course=="MERN")
console.log(merns);

let ara1=students.slice(0,3)
console.log(ara1);

let copy=[...students]
console.log(copy);

let [first]=copy
console.log(first.name,first.age,first.mark);


function showTopStudents() {

    let topStudents = students.filter(student => student.mark > 70);

   document.getElementById("studentList").innerHTML =
    topStudents.map(student => `<p>${student.name} - ${student.mark}</p>`).join("")
  
    

}
  let placeed= document.getElementById("placread")
    let place=placeed.getAttribute("placeholder")
    console.log(place);
    placeed.setAttribute("placeholder","Enter Student Name")

function change(){
     placeed.style.backgroundColor = "lightgreen"
}



