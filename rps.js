let rando = Math.floor(Math.random() * 3) + 1;

function computerPlay(rando) {
    if (rando == 1) {
        return 'Rock'}
    else if (rando == 2) {
        return 'Paper'}
    else if (rando == 3) {
        return 'Scissors'}
}

console.log(computerPlay(rando))