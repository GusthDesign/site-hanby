/* ── Navbar scroll shadow ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 12);
});

/* ── Mobile menu ── */
const burger   = document.getElementById('navBurger');
const navInner = document.querySelector('.nav-inner');

burger.addEventListener('click', () => {
  const open = navInner.classList.toggle('menu-open');
  burger.setAttribute('aria-expanded', open);
  const spans = burger.querySelectorAll('span');
  if (open) {
    spans[0].style.transform = 'translateY(8px) rotate(45deg)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

document.querySelectorAll('#navLinks a').forEach(a => {
  a.addEventListener('click', () => {
    navInner.classList.remove('menu-open');
    burger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

/* ── Hero: animação de entrada ── */
window.addEventListener('DOMContentLoaded', () => {
  const heroCenter = document.querySelector('.hero-center');
  if (heroCenter) {
    heroCenter.style.opacity = '0';
    heroCenter.style.transform = 'translateY(32px)';
    heroCenter.style.transition = 'opacity .9s ease, transform .9s ease';
    requestAnimationFrame(() => {
      setTimeout(() => {
        heroCenter.style.opacity = '1';
        heroCenter.style.transform = 'translateY(0)';
      }, 120);
    });
  }

  // cards da base entram com delay
  document.querySelectorAll('.hcard').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity .6s ease ${300 + i * 100}ms, transform .6s ease ${300 + i * 100}ms`;
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 300 + i * 100);
  });
});

/* ── Scroll reveal para demais seções ── */
const revealEls = document.querySelectorAll(
  '.srv-card, .sobre-texto, .num-card, .cta-inner'
);

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('revealed');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach((el, i) => {
  el.classList.add('will-reveal');
  el.style.transitionDelay = `${(i % 3) * 80}ms`;
  io.observe(el);
});

const style = document.createElement('style');
style.textContent = `
  .will-reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity .55s ease, transform .55s ease;
  }
  .revealed {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);
