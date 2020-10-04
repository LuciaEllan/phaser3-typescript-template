import "phaser";
import { GameScene } from "./scenes/GameScene";

// https://photonstorm.github.io/phaser3-docs/Phaser.Types.Core.html#.GameConfig
const config: Phaser.Types.Core.GameConfig = {
  width: 800,
  height: 600,
  parent: "game",
  scene: [GameScene],
  input: {
    keyboard: true,
    mouse: true,
    touch: true
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 }
    }
  }
};

export class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

window.addEventListener("load", () => {
  let game = new Game(config);
});
