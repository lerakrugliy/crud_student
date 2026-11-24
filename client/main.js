const BASEURL = "http://localhost:3000";

const studentsList = document.querySelector("students_list");

const fetchStudents = () => {
  return fetch(`${BASEURL}/students`)
    .then((response) => response.json())
    .then((post) => console.log(post))
    .catch((error) => console.log(error));
};

fetchStudents()
  .then((students) => {
    console.log(students);
    renderStudens();
  })
  .catch((err) => console.err);

const renderStudens = () => {
  const markap = students
    .map((student) => {
      return `<li><p class="name">name:${student.name}</p><p class="age">age:${student.age}</p><p class="email">email:${student.email}</p></li>`;
    })
    .join("");
  studentsList.insertAdjacentHTML("beforeend", markap);
};
