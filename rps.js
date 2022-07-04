let x = 0
let y = 0
let z = 0

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

function playGame() {
    for (let i = 0; i<5;i++) {
        let rando = Math.floor(Math.random() * 3) + 1;
        const playerSelect = prompt('Rock, Paper, or Scissors?').toLowerCase();
        const compSelect = computerPlay(rando);
        console.log(playerSelect + '|' + compSelect)
        if (playRound(playerSelect, compSelect)=='computer') {
            x++;
            console.log('computer')
        }
        else if (playRound(playerSelect, compSelect)=='player') {
            y++;
            console.log('player')
        }
        else if (playRound(playerSelect, compSelect)=='tie') {
            z++
            console.log('tie')
        }
        else {
            x++;
            console.log('Cheater! Win goes to computer!')
        }
    }
if (x>y) {
    console.log('Computer Wins!')
}
else if (x<y) {
    console.log('Player Wins!')
}
else if (x==y) {
    console.log('It is a tie!')
}
else {
    console.log('What Happpened?!')
}
}



playGame()