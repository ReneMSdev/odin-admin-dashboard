// YOUR PROJECTS
const cardIcons = [
  'icons/star-plus-outline.svg',
  'icons/eye-plus-outline.svg',
  'icons/share-variant-outline.svg',
];

// array containing card information
const projectsArray = [
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
projectsArray.forEach((project) => {
  const card = createCard(project);
  projectsContainer.appendChild(card);
});

// ANNOUNCEMENTS
// array containing announcement information
const announcementsArray = [
  {
    title: 'Site Maintenance',
    description:
      'Vestibulum venenatis lacus sed accumsan consequat neque sapien. Aliquam neque, ac dignissim urna turpis vitae quam...',
  },
  {
    title: 'Community Share Day',
    description:
      'Nam porta tristique erat, quis fermentum orci efficitur vitae. Suspendisse nibh lorem, placerat sed...',
  },
  {
    title: 'Updated Privacy Policy',
    description:
      'Curabitur quis tristique nibh. Cras eu molestie velit, nec mattis justo. Nulla non ligula nisl...',
  },
];

// container for Announcements
const announcementContainer = document.getElementById('announcement-container');

// function to create announcement
function createAnnouncement(annContent) {
  const announcement = document.createElement('div');
  announcement.classList.add('announcement');

  // add announcement content
  announcement.innerHTML = `
    <p class="announcement-header">${annContent.title}</p>
    <p class="announcement-description">${annContent.description}</p>
  `;

  return announcement;
}

// render the announcements with dividers
announcementsArray.forEach((announcement, index) => {
  const content = createAnnouncement(announcement);
  announcementContainer.appendChild(content);

  // add divider if it's not the last announcement
  if (index < announcementsArray.length - 1) {
    const divider = document.createElement('hr');
    divider.classList.add('announcement-divider');
    announcementContainer.appendChild(divider);
  }
});

// TRENDING
// array containing trending information
const trendingArray = [
  {
    profile: 'profiles/profile2.png',
    userTag: '@james',
    projectName: 'World Peace Builder',
  },
  {
    profile: 'profiles/profile3.png',
    userTag: '@morgan',
    projectName: 'Super Cool Project',
  },
  {
    profile: 'profiles/profile4.png',
    userTag: '@kendall',
    projectName: 'Life Changing App',
  },
  {
    profile: 'profiles/profile5.png',
    userTag: '@alex',
    projectName: 'No Traffic Maker',
  },
];

// container for trending content
const trendingContainer = document.getElementById('trending-container');

// function to create trending item
function createTrendingItem(trendingItem) {
  // create trending item
  const item = document.createElement('div');
  item.classList.add('trending-item');

  // add the item's content
  item.innerHTML = `
    <div class="trending-profile">
      <img src="${trendingItem.profile}" alt="profile" class="profile-small">
    </div>
    <div class="trending-text">
      <p class="trending-user">${trendingItem.userTag}</p>
      <p class="trending-project-name">${trendingItem.projectName}</p>
    </div>
  `;

  return item;
}

// render trending items
trendingArray.forEach((item) => {
  const content = createTrendingItem(item);
  trendingContainer.appendChild(content);
});
