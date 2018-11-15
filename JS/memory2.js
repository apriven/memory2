const cardsArray = [{
    'name': 'Tite',
    'img': 'pics/tite.jpg',
},
{
    'name': 'Ronaldo',
    'img': 'pics/ronaldo.jpg',
},
{
    'name': 'Cassio',
    'img': 'pics/cassio.jpg',
},
{
    'name': 'Paulinho',
    'img': 'pics/paulinho.jpg',
},
{
    'name': 'Tevez',
    'img': 'pics/tevez.jpg',
},
{
    'name': 'Marcelinho',
    'img': 'pics/marcelinho.jpg',
},
];
var firstGuess = '';
var secondGuess = '';
var count = 0;
let previousTarget = null;

const game = document.getElementById('game');

const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

game.appendChild(grid);
let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());


gameGrid.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = item.name;
    card.style.backgroundImage = `url(${item.img})`;
    grid.appendChild(card);
});
grid.addEventListener('click', function (event) {
    let clicked = event.target;
    if (clicked.nodeName === 'SECTION'|| clicked === previousTarget) { return; }
    if (count < 2) {
        count++;
        if (count===1){
            firstGuess=clicked.dataset.name;
            clicked.classList.add('pick');
        }else{
            secondGuess=clicked.dataset.name;
            clicked.classList.add('pick');
        }
      }
      if (firstGuess !== '' && secondGuess !== '') {
        if (firstGuess === secondGuess) {
          match();
          resetGuesses();
        }else{
            resetGuesses();

        } 
      }  
      previousTarget = clicked;
});
const match = () => {
    const pick = document.querySelectorAll('.pick');
    pick.forEach(card => {
      card.classList.add('match');
    });
  }
  const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;
  
    var selected = document.querySelectorAll('.pick');
    selected.forEach(card => {
      card.classList.remove('pick');
    });
  };