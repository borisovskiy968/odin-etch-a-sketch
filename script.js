//Set up initial grid of squares
let squaresPerSide = 16;
createGridOfSquares(squaresPerSide);

function createGridOfSquares(squaresPerSide) {
  const container = document.querySelector('.container');
  container.replaceChildren();
  container.style.gridAutoColumns = '1fr';
  container.style.gridAutoRows = '1fr';

  for (let i = 1; i < squaresPerSide + 1; i++) {
    for (let j = 1; j < squaresPerSide + 1; j++) {
      const square = document.createElement('div');
      square.style.gridRow = `${i} / ${i + 1}`;
      square.style.gridColumn = `${j} / ${j + 1}`;
      //Class 'lit' overrides 'off' because it is defined later
      square.classList.add('off');
      square.addEventListener('mouseenter', e => e.target.classList.add('lit'));
      container.appendChild(square);
    }
  }
}

const btnSquaresPerSide = document.querySelector('.btn-squares-per-side');
btnSquaresPerSide.addEventListener('click', setSquaresPerSide);

function setSquaresPerSide(e) {
  //As prompt returns null or string, parseInt parses the string and returns
  //NaN or 1st integer in it (and returns NaN if null given)
  squaresPerSide =
    parseInt(prompt(
      'Please enter the number of squares per side (from 1 to 100):', 16));
  console.log(squaresPerSide);
  if (!isNaN(squaresPerSide) && squaresPerSide >= 1 && squaresPerSide <= 100) {
    createGridOfSquares(squaresPerSide);
  }
}
