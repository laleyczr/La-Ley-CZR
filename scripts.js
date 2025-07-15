// Menu toggle mobile
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Scroll active link
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(li => {
    li.classList.remove('active');
    if (li.getAttribute('href') === '#' + current) {
      li.classList.add('active');
    }
  });
});

// Insert latest YouTube videos dynamically
const videoGrid = document.getElementById('videoGrid');

// Lista de IDs de videos (reemplaza con los tuyos)
const videoIDs = [
  'rSxNYz6J5ps',  // Ejemplo
  'zNdpaz3NOIo',
  '2HsyHxcsDPE'
];

videoIDs.forEach(id => {
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${id}`;
  iframe.frameBorder = '0';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  videoGrid.appendChild(iframe);
});
