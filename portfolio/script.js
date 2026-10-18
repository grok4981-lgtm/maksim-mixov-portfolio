const hoursInput = document.querySelector('#hours');
const rangeInput = document.querySelector('#range');
const totalOutput = document.querySelector('#total');

function updateHours(value) {
  const hours = Math.min(500, Math.max(1, Number(value) || 1));
  hoursInput.value = hours;
  rangeInput.value = Math.min(80, hours);
  totalOutput.textContent = `${new Intl.NumberFormat('ru-RU').format(hours * 300)} ₽`;
}

hoursInput.addEventListener('input', () => updateHours(hoursInput.value));
rangeInput.addEventListener('input', () => updateHours(rangeInput.value));
document.querySelector('#minus').addEventListener('click', () => updateHours(Number(hoursInput.value) - 1));
document.querySelector('#plus').addEventListener('click', () => updateHours(Number(hoursInput.value) + 1));

const revealTargets = document.querySelectorAll('.section-title, .project, .about, .calculator');
revealTargets.forEach((element) => element.classList.add('reveal'));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((element) => observer.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add('visible'));
}
