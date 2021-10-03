// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!!!';
// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);
const hiddenNumber = Math.trunc(Math.random()*20)+1;
const fkh = ['it to hight your fucking dumb!!!',
            'still to hight your dumb!',
            'still hight, fucking dumb!',
            'it still hight, why are you so dumb',
            'U are my most stupid player'
];

const fkl = ['it to low your fucking dumb!!!',
            'still to low your dumb!',
            'higher, fucking dumb!',
            'it still low, why are you so dumb',
            'U are my most stupid player'
];

let Score = 20;
document.querySelector('.check').addEventListener('click',
function() {
    const guessNumber =Number(document.querySelector('.guess').value);

    if (!guessNumber) {
        document.querySelector('.message').textContent ='1 to 20 number your fucking!!! Why are you so dumb man?';
    }
    else if (guessNumber === hiddenNumber){
        document.querySelector('.message').textContent ='ohh it correct,your fucking dumb!';
        document.querySelector('.number').textContent = hiddenNumber;
        document.querySelector('.highscore').textContent = Score;
        document.querySelector('body').style.backgroundColor = '#60b347';
    }
    else if (guessNumber > hiddenNumber){
        const fkn = Math.trunc(Math.random()*5);
        document.querySelector('.message').textContent = fkh[fkn];
        if (Score>=0){
            Score--;
            document.querySelector('.score').textContent = Score;
        }
        else if (Score<0){
            document.querySelector('.message').textContent = 'your failed, LOSER!!!';
        };
    }
    else if (guessNumber < hiddenNumber){
        const fkn = Math.trunc(Math.random()*5);
        document.querySelector('.message').textContent = fkl[fkn];
        if (Score>=0){
            Score--;
            document.querySelector('.score').textContent = Score;
        }
        else if (Score<0){
            document.querySelector('.message').textContent = 'your failed, LOSER!!!';
        }
    }
});
