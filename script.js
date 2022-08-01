import Player from "./modules/player.js";
import Possession from "./modules/possession.js";

// Initializing players
let plr1 = new Player(`محمد`, document.querySelector(`#player1`));
let plr2 = new Player(`أحمد`, document.querySelector(`#player2`));

// Initializing Possessions
let possArr = [...document.querySelectorAll(`.step`)];
console.log(possArr);

let possessions = {};

possessions["10,10"] = new Possession("Parking", possArr[0], 150, 15);
possessions["9,10"] = new Possession("Omar Aziz", possArr[1], 200, 20);
possessions["8,10"] = new Possession("Forsa", possArr[2], 300, 20);

