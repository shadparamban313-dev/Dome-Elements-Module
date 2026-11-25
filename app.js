import { students, getStudents, searchStudent } from "./student.js";

// HTML elements
const studentContainer = document.getElementById("studentContainer");
const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");

// Display students
function displayStudents(studentList) {
    studentContainer.innerHTML = "";

    studentList.forEach((student) => {
        studentContainer.innerHTML += `
            <div class="student">
                <h3>${student.name}</h3>
                <p>ID: ${student.id}</p>
                <p>Age: ${student.age}</p>
                <p>Mark: ${student.mark}</p>
                <p>Course: ${student.course}</p>
                <p>Status: ${student.active ? "Active" : "Inactive"}</p>

                <button onclick="toggleStatus(${student.id})">
                    Change Status
                </button>
            </div>
        `;
    });
}

// Display imported student data
displayStudents(getStudents());


// Add new student using spread operator
const newStudent = {
    id: 6,
    name: "Vishnu",
    age: 22,
    mark: 88,
    course: "MERN",
    active: true
};

// Create a new array without modifying original array
let updatedStudents = [...students, newStudent];


// Search student
document.getElementById("searchBtn").addEventListener("click", () => {

    const name = searchInput.value.trim();

    const student = searchStudent(name);

    if (student) {
        searchResult.innerHTML = `
            <h3>${student.name}</h3>
            <p>Age: ${student.age}</p>
            <p>Mark: ${student.mark}</p>
            <p>Course: ${student.course}</p>
            <p>Status: ${student.active ? "Active" : "Inactive"}</p>
        `;
    } else {
        searchResult.innerHTML = "Student not found!";
    }
});


// Change student status
window.toggleStatus = function(id) {

    const student = students.find((student) => student.id === id);

    if (student) {
        student.active = !student.active;

        displayStudents(students);
    }
};