document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:8080/api/courses/Computer%20Engineering")
        .then(response => response.json())
        .then(data => {
            let menu = document.getElementById("computer-engineering-menu");
            let semesters = {};

            // Organize data by semester
            data.forEach(course => {
                if (!semesters[course.semester]) {
                    semesters[course.semester] = [];
                }
                semesters[course.semester].push(course.subject);
            });

            // Generate dropdown menu
            for (let sem in semesters) {
                let semItem = document.createElement("li");
                semItem.textContent = sem;
                semItem.style.fontWeight = "bold";
                let subMenu = document.createElement("ul");
                subMenu.style.listStyle = "none";
                subMenu.style.paddingLeft = "10px";

                semesters[sem].forEach(subject => {
                    let subjectItem = document.createElement("li");
                    subjectItem.textContent = subject;
                    subMenu.appendChild(subjectItem);
                });

                semItem.appendChild(subMenu);
                menu.appendChild(semItem);
            }
        })
        .catch(error => console.error("Error fetching data:", error));
});
