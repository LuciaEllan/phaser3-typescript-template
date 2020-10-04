
export class GameScene extends Phaser.Scene {
  private mockupScreen: Phaser.GameObjects.Container;
  private background: Phaser.GameObjects.Rectangle;
  private welcomeText: Phaser.GameObjects.Text;

  constructor() {
    super({
      key: "GameScene"
    });
  }

  init(): void {
  }

  preload(): void {
  }

  create(): void {
    this.mockupScreen = this.add.container(0, 0)
    this.background = this.add.rectangle(400, 300, this.cameras.main.width, this.cameras.main.height, 0xffddff)
    this.welcomeText = this.add.text(400, 300, 'Welcome, this is a template.', { color: 'black', fontSize: '2rem', fontFamily: 'Sans Serif' })

    this.mockupScreen.add(this.background)
    this.mockupScreen.add(this.welcomeText)

    this.welcomeText.setOrigin(0.5, 0.5)
  }

  update(): void {
  }
}
