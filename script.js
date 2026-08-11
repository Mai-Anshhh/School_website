let teachers = [];

fetch("teachers.json")
    .then(res => res.json())
    .then(data => {
        teachers = data;
        renderTeachers(teachers);
    });

function renderTeachers(teacherArray) {

    const list = document.querySelector("#teacher-list");

    list.innerHTML = "";

    teacherArray.forEach(teacher => {

        list.innerHTML += `
            <li>
                <a href="${teacher.link}" target="_blank">
                    <img src="${teacher.image}">
                    <h2>${teacher.name}</h2>
                    <p>${teacher.description}</p>
                    <p>Experience: ${teacher.Experience}</p>
                    <p>Qualification: ${teacher.Qualification}</p>
                </a>
            </li>
        `;
    });
}