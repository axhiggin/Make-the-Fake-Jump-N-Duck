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
            debug: true,
            gravity: {
                x: 0,
                y: 500
            }
        }
    },
    render:{
        pixelArt: true
    },
    scene: [ Load, Title, LevelOne ]
}

let game = new Phaser.Game(config)

//globals
let spaceKey, keyA, keyD
let width = game.config.width
let height = game.config.height
let playerSpeed = 50