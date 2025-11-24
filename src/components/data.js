import assembly from '../assets/assembly.png';
import catchme from '../assets/catchme.png';
import rps from '../assets/rps.png';
import tenzies from '../assets/tenzies.png';

const games = [
    {
        id: 1,
        name: 'Tenzies',
        description: 'A fun and fast-paced dice game where players win by rolling ten dice to match the same number.',
        link: 'https://tenziesapp.vercel.app',
        image: tenzies
    },
    {
        id: 2,
        name: 'Rock, Paper & Scissors',
        description: 'A classic hand game played between two players where each player chooses one of the possible moves to defeat the other.',
        link: 'https://rpsbytjs.vercel.app/',
        image: rps
    },
    {
        id: 3,
        name: 'Assembly: Endgame',
        description: 'A thrilling word game where player guesses a secret word within 8 attempts to be safe from the Assembly Invasion.',
        link: 'https://assemblybytjs.vercel.app',
        image: assembly
    },
    {
        id: 4,
        name: 'Catch me if you can',
        description: 'A fun and engaging game where the player catches randomly appearing target on the screen to score points within a time limit.',
        link: 'https://catchmeifyoucanbytjs.vercel.app/',
        image: catchme
    }
]

export default games;