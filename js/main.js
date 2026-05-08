// Мобильное меню
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Закрывать меню при клике на ссылку
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// Подсветка активного пункта меню при прокрутке
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNav() {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const top = section.offsetTop - 80;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollY >= top && scrollY < bottom) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNav);

// Кнопка "наверх"
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollTopBtn.style.opacity = '1';
    scrollTopBtn.style.visibility = 'visible';
  } else {
    scrollTopBtn.style.opacity = '0';
    scrollTopBtn.style.visibility = 'hidden';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Анимация появления элементов при прокрутке
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Фиксированная шапка — добавляем тень при прокрутке
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('shadow-lg');
  } else {
    header.classList.remove('shadow-lg');
  }
});
