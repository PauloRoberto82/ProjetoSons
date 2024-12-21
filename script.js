
function reproduzirSom(id) {
    const audio = document.getElementById(id);
    audio.currentTime = 0; // Reinicia o som
    audio.play(); // Reproduz o som
}

document.addEventListener('keydown', function(event) {
const somMapeado = {
    'Q': 'q1',
    'W': 'w2',
    'E': 'e3',
    'R': 'r4',
    'T': 't5',
    'Y': 'y6',
    'U': 'u7',
    'I': 'i8',
    'O': 'o9',
    'P': 'p0',
    'A': 'a1',
    'S': 's2',
    'D': 'd3',
    'F': 'f4',
    'G': 'g5',
    'H': 'h6',
    'J': 'j7',
    'K': 'k8',
    'L': 'l9',
    'Ç': 'ç0',
    'Z': 'z1',
    'X': 'x2',
    'C': 'c3',
    'V': 'v4',
    'B': 'b5',
    'N': 'n6',
    'M': 'm7',
    ',': 'bb',
    '.': 'nn',
    ';': 'mm',
};

const somId = somMapeado[event.key];
if (somId) {reproduzirSom(somId);}
});
