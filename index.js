const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
let score = 0;

function randomHole() {
  holes.forEach(h => h.classList.remove('mole'));
  const index = Math.floor(Math.random() * holes.length);
  holes[index].classList.add('mole');
}

holes.forEach(hole => {
  hole.addEventListener('click', () => {
    if (hole.classList.contains('mole')) {
      score++;
      scoreDisplay.textContent = score;
      hole.classList.remove('mole');
    }
  });
});

setInterval(randomHole, 1000);
