const container = document.querySelector('.container');
container.style.gridAutoColumns = 'minmax(auto, 40px)';
container.style.gridAutoRows = '40px';

for (let i = 1; i < 17; i++) {
  for (let j = 1; j < 17; j++) {
    const square = document.createElement('div');
    square.style.gridRow = `${i} / ${i + 1}`;
    square.style.gridColumn = `${j} / ${j + 1}`;
    //class 'off lit' is equal to 'lit' because of rule order
    square.classList.add('off');
    square.addEventListener('mouseenter', e => e.target.classList.add('lit'));
    container.appendChild(square);
  }
}
