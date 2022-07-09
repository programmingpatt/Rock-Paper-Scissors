let x = 0
let y = 0
let z = 0

function computerPlay() {
    let rando = Math.floor(Math.random()*3)+1
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
        return 'computer'
    }
    else if (playerSelect==='rock' && compSelect ==='scissors') {
        return 'player'
    }
    else if (playerSelect==='paper' && compSelect ==='rock') {
        return 'player'
    }
    else if (playerSelect==='paper' && compSelect ==='scissors') {
        return 'computer'
    }
    else if (playerSelect==='scissors' && compSelect ==='rock') {
        return 'computer'
    }
    else if (playerSelect==='scissors' && compSelect ==='paper') {
        return 'player'
    }
    else {
        return 'Cheating is Forbidden!'
    }
}
