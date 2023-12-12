// Name: Aidan Higgins
// Title: Jump N' Duck
// wiley time and go through sides of platforms, mess around with the movement
//procedurally generated levels??

let config = {
    type: Phaser.AUTO,
    height: 640,
    width: 960,
    backgroundColor: 0x73b164,
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
    scene: [ Load, Title, LevelOne, LevelTwo, LevelThree, Credits ]
}

let game = new Phaser.Game(config)

//globals
let spaceKey, keyA, keyD, keyR
let width = game.config.width
let height = game.config.height
let playerSpeed = 50