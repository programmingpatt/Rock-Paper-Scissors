

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
        const playerSelect = 'Rock'.toLowerCase();
        const compSelect = computerPlay(rando);
        console.log(playRound(playerSelect, compSelect));
    }
}



playGame()

//if (playRound(playerSelect,computerPlay(rando)) == 'computer') {
//    console.log('Loser!')
//}
//else if (playRound(playerSelect,computerPlay(rando)) =='player') {
//    console.log('Winner!')
//}
//else if (playRound(playerSelect,computerPlay(rando))== 'tie') {
//    console.log('Tie!')
//}