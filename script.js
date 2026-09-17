const loaderScreen = document.querySelector('.loader-screen');
const signatureText = document.querySelector('.loader-signature-text');
const revealElements = document.querySelectorAll('.reveal');
const counters = document.querySelectorAll('[data-target]');
const yearElement = document.querySelector('.year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

function runLoaderSequence() {
  const loaderTimeline = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

  loaderTimeline
    .to('.loader-name-yusuf', {
      opacity: 1,
      y: 0,
      duration: 1.1,
      ease: 'power3.out'
    })
    .to('.loader-name-yusuf', {
      opacity: 0,
      y: -24,
      filter: 'blur(14px)',
      duration: 0.8,
      delay: 0.5
    })
    .call(() => {
      const name = 'Abdhadeel';
      let index = 0;

      signatureText.textContent = '';

      const typingInterval = setInterval(() => {
        signatureText.textContent = name.slice(0, index + 1);
        index += 1;

        if (index >= name.length) {
          clearInterval(typingInterval);
          gsap.to('.loader-cursor', { opacity: 0, duration: 0.3 });
        }
      }, 140);
    })
    .to('.loader-progress', {
      width: '100%',
      duration: 2.2,
      ease: 'power2.out'
    }, 0.4)
    .to(loaderScreen, {
      opacity: 0,
      duration: 0.9,
      delay: 0.9,
      onComplete: () => loaderScreen.classList.add('is-hidden')
    });
}

if (window.gsap && loaderScreen) {
  gsap.registerPlugin(ScrollTrigger);
  runLoaderSequence();
}

if (revealElements.length && window.gsap) {
  revealElements.forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 48 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%'
        }
      }
    );
  });
}

if (counters.length && window.gsap) {
  counters.forEach((counter) => {
    const target = Number(counter.dataset.target || 0);

    gsap.fromTo(
      counter,
      { textContent: 0 },
      {
        textContent: target,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: counter,
          start: 'top 90%'
        },
        onUpdate: function () {
          counter.textContent = Number(this.targets()[0].textContent).toFixed(0);
        }
      }
    );
  });
}

document.querySelector('.contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  const originalText = button.textContent;

  button.textContent = 'Message Sent';
  button.disabled = true;

  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    event.currentTarget.reset();
  }, 1800);
});

const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 80,
      behavior: 'smooth'
    });
  });
});

if (!window.gsap && loaderScreen) {
  const fallbackText = 'Abdhadeel';
  let index = 0;

  const tickLoader = setInterval(() => {
    signatureText.textContent = fallbackText.slice(0, index + 1);
    index += 1;

    if (index >= fallbackText.length) {
      clearInterval(tickLoader);
      setTimeout(() => loaderScreen.classList.add('is-hidden'), 1200);
    }
  }, 140);
}
