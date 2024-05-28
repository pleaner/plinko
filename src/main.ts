import { Game } from "./game.ts";

const game = new Game(100, 10, [0, 1, 2, 5, 10]);


  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Plinko</h1>
    <div>
      <button id="play" type="button" >Play</button>
    </div>
    </div>
    `



