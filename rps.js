let rando = Math.floor(Math.random() * 3) + 1;

function computerPlay(rando) {
    if (rando == 1) {
        return 'rock'
    }
    else if (rando == 2) {
        return 'paper'
    }
    else if (rando == 3) {
        return 'scissors'
    }
}

function playRound(playerSelect, compSelect) {
    if (playerSelect===compSelect) {
        return 'tie'
    }
    else if (playerSelect==='rock' && compSelect === 'paper') {
        return 'computer wins'
    }
    else if (playerSelect==='rock' && compSelect ==='scissors') {
        return 'player wins'
    }
    else if (playerSelect==='paper' && compSelect ==='rock') {
        return 'player wins'
    }
    else if (playerSelect==='paper' && compSelect ==='scissors') {
        return 'computer wins'
    }
    else if (playerSelect==='scissors' && compSelect ==='rock') {
        return 'computer wins'
    }
    else if (playerSelect==='scissors' && compSelect ==='paper') {
        return 'player wins'
    }
    else {
        return 'Cheating is Forbidden!'
    }
}

const playerSelect = 'rock'
const compSelect = computerPlay(rando)
console.log(playRound(playerSelect, compSelect))