document.addEventListener('DOMContentLoaded', () => {
    const pages = ['landing', 'introduction', 'projects', 'contact'];

    function navigateTo(pageId) {
        // Hide all pages
        document.querySelectorAll('div[id$="-page"]').forEach(page => {
            page.classList.add('hidden');
        });

        // Show the selected page
        document.getElementById(pageId)?.classList.remove('hidden');

        // Display projects if navigating to the projects page
        if (pageId === 'projects-page') {
            displayProjects();
        }
    }

    // Dummy projects for demonstration
    const projects = [
        { name: 'Project 1', description: 'This is a description of Project 1.', link: '#', image: 'https://via.placeholder.com/150' },
        { name: 'Project 2', description: 'This is a description of Project 2.', link: '#', image: 'https://via.placeholder.com/150' },
        { name: 'Project 3', description: 'This is a description of Project 3.', link: '#', image: 'https://via.placeholder.com/150' }
    ];

    function displayProjects() {
        const container = document.getElementById('project-container');
        if (container) {
            container.innerHTML = '';
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