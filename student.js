export let students = [
    { id: 1, name: "Arun", age: 21, mark: 85, course: "MERN", active: true },
    { id: 2, name: "Rahul", age: 22, mark: 65, course: "Python", active: false },
    { id: 3, name: "Ajay", age: 20, mark: 90, course: "MERN", active: true },
    { id: 4, name: "Anu", age: 23, mark: 75, course: "React", active: false },
    { id: 5, name: "Kiran", age: 21, mark: 95, course: "Python", active: true }
];

// Function to get all students
export function getStudents() {
    return students;
}

// Function to search student by name
export function searchStudent(name) {
    return students.find(
        (student) => student.name.toLowerCase() === name.toLowerCase()
    );
}