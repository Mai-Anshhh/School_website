let teachers = [];

fetch("json/teachers.json")
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
                    <div>
                    <h2>${teacher.name}</h2>
                    <p>${teacher.description}</p>
                    <p>Post: ${teacher.Post}</p>
                    <p>Classes: ${teacher.classes}</p>
                    </div>
                </a>
            </li>
        `;
    });
}