// Name: Aidan Higgins
// Title: Jump N' Duck

let config = {
    type: Phaser.AUTO,
    height: 640,
    width: 960,
    backgroundColor: 0xf5f5dc,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            // debug: true,
            gravity: {
                x: 0,
                y: 500
            }
        }
    },
    render:{
        pixelArt: true
    },
    scene: [ Load, Title, Play ]
}

let game = new Phaser.Game(config)

//globals
let keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
let keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
let spaceKey = keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
let width = game.config.width
let height = game.config.height
let playerSpeed = 50