export function initRevealGlow(selector = '.project-card') {
  const elements = document.querySelectorAll<HTMLElement>(selector);

  elements.forEach((element) => {
    element.addEventListener('pointermove', (event) => {
      const rect = element.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      element.style.setProperty('--mouse-x', `${x}px`);
      element.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}
