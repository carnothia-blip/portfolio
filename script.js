const projects = [
    {
      id: 1,
      title: "Coding app for low-vision children",
      image: "https://www.dummyimg.in/placeholder",
    },
    {
      id: 2,
      title: "Search",
      image: "https://www.dummyimg.in/placeholder",
    },
    {
      id: 3,
      title: "Venice Paddle Tennis",
      image: "https://www.dummyimg.in/placeholder",
    },
    {
      id: 4,
      title: "AR Working Space for Designer",
      image: "https://www.dummyimg.in/placeholder",
    },
    {
      id: 5,
      title: "Data-visualization-rico",
      image: "https://www.dummyimg.in/placeholder",
    },
    {
      id: 6,
      title: "Google UX Design Internship",
      image: "https://www.dummyimg.in/placeholder",
    },
    {
      id: 7,
      title: "Internship",
      image: "https://www.dummyimg.in/placeholder",
    },
    {
      id: 8,
      title: "Personal brand / Business / Visual design",
      image: "https://www.dummyimg.in/placeholder",
    },
];

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
        <div class="project-image-wrapper">
            <img src="${project.image}" alt="${project.title}" class="project-image">
        </div>
        <p class="project-title">${project.title}</p>
    `;
    
    return card;
}

function renderProjects() {
    const grid = document.getElementById('project-grid');
    if (!grid) return;
    
    projects.forEach(project => {
        const card = createProjectCard(project);
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});
