document.addEventListener("DOMContentLoaded", function() {
    const works = {

        "task1": { "title": "Project 1", "url": "works/task1/index.html" },
        "task2": { "title": "Project 2", "url": "works/task2/index.html" },
        "task3": { "title": "Project 3", "url": "works/task3/index.html" }
    };
    const projectList = document.getElementById('project-list');
    for (const key in works) {
        if (works.hasOwnProperty(key)) {
            const project = works[key];
            const listItem = document.createElement('li');
            const projectLink = document.createElement('a');
            projectLink.href = "#";
            projectLink.textContent = project.title;
            projectLink.addEventListener('click', () => displayProject(project));
            listItem.appendChild(projectLink);
            projectList.appendChild(listItem);
        }
    }
    function displayProject(project) {
        const projectDisplay = document.getElementById('project-display');
        projectDisplay.innerHTML = `
            <h2>${project.title}</h2>
            <iframe src="${project.url}" width="100%" height="500px"></iframe>
        `;
    }
});