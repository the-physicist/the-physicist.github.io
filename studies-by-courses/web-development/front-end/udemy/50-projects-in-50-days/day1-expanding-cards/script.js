const panels = document.querySelectorAll('.panel');

function removeActivePanel() {
  panels.forEach(panel => panel.classList.remove('active'));
}

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActivePanel();
    panel.classList.add('active');
  });
});
