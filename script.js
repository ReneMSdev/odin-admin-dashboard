const cardIcons = [
  'icons/star-plus-outline.svg',
  'icons/eye-plus-outline.svg',
  'icons/share-variant-outline.svg',
];

// array containing card information
const projects = [
  {
    title: 'Super Cool Project',
    description:
      'Sed tempus ut lacus ut scelerisque. Suspendisse sollicitudin nibh erat, id facilisis felis accumsan nec.',
    icons: cardIcons,
  },
  {
    title: 'Less Cool Project',
    description:
      'Nullam condimentum ipsum ut lectus vehicula consectetur. Quisque sed dolor tincidunt.',
    icons: cardIcons,
  },
  {
    title: 'Impossible App',
    description:
      'In hac habitasse platea dictumst. Vivamus dictum rutrum arcu, a placerat velit sagittis id.',
    icons: cardIcons,
  },
  {
    title: 'Easy Peasy App',
    description:
      'Etiam cursus eros ac efficitur fringilla. Vestibulum dignissim urna eget accumsan aliquam.',
    icons: cardIcons,
  },
  {
    title: 'Ad Blocker',
    description:
      'Quisque eget rutrum nisl. Nam augue justo, cursus vitae metus vel, pharetra hendrerit felis.',
    icons: cardIcons,
  },
  {
    title: 'Money Maker',
    description: 'Praesent convallis, libero quis congue elementum, nunc ante faucibus sapien.',
    icons: cardIcons,
  },
];

// container for project cards
const projectsContainer = document.getElementById('projects-container');

// function to create a card
function createCard(project) {
  // create card div
  const card = document.createElement('div');
  card.classList.add('card');

  // add the card content
  card.innerHTML = `
    <h3 class="card-header">${project.title}</h3>
    <p class="card-description">${project.description}</p>
    <div class="card-icons">
      ${project.icons.map((icon) => `<img src="${icon}" alt="icon" class="icon">`).join('')}
    </div>
  `;

  return card;
}

// render the cards
projects.forEach((project) => {
  const card = createCard(project);
  projectsContainer.appendChild(card);
});
