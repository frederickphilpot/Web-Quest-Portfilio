document.addEventListener('DOMContentLoaded', () => {
    const pages = ['landing-page', 'introduction-page', 'projects-page', 'contact-page'];

    function navigateTo(pageId) {
        // Hide all pages
        pages.forEach(page => {
            const element = document.getElementById(page);
            if (element) element.classList.add('hidden');
        });

        // Show the selected page
        const selectedPage = document.getElementById(pageId);
        if (selectedPage) selectedPage.classList.remove('hidden');

        // Display projects if navigating to the projects page
        if (pageId === 'projects-page') {
            displayProjects();
        }
    }

    function displayProjects() {
        const container = document.getElementById('project-container');
        if (container) {
            container.innerHTML = '';
            const projects = [
                { name: 'Project 1', description: 'This is a description of Project 1.', link: '#', image: './images/aroundtheus.PNG' },
                { name: 'Project 2', description: 'This is a description of Project 2.', link: '#', image: './images/coffeehouse.PNG' },
                { name: 'Project 3', description: 'This is a description of Project 3.', link: '#', image: './images/penguin.PNG' }
            ];

            projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project');

                projectElement.innerHTML = `
                    <img src="${project.image}" alt="${project.name}">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}">Learn More</a>
                `;

                container.appendChild(projectElement);
            });
        }
    }

    // Add event listeners to the buttons and links
    document.getElementById('begin-quest-button')?.addEventListener('click', () => navigateTo('introduction-page'));
    document.getElementById('home-link')?.addEventListener('click', () => navigateTo('landing-page'));
    document.getElementById('projects-link')?.addEventListener('click', () => navigateTo('projects-page'));
    document.getElementById('contact-link')?.addEventListener('click', () => navigateTo('contact-page'));
    document.getElementById('gateway-button')?.addEventListener('click', () => {
        window.location.href = 'projects.html';
    });

    // Display projects if on the projects page
    if (window.location.pathname.endsWith('projects.html')) {
        displayProjects();
    }
});
