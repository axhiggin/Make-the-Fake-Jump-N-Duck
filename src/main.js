// Name: Aidan Higgins
// Title: Jump N' Duck
// The game I tried to copy: https://phineasandferb.fandom.com/wiki/Jump_N%27_Duck
// 5+ major components:
//     Physics system: uses physics for collision and player movement, set world boundaries
//     Cameras: adjusts camera zoom and follows the player
//     Animations: initializes and uses animations on the player, including idle, walk, and jump
//     Tilemap: used tilemaps I made using tiled, implemented collision with different layers
//     Text objects: used text objects in the credits scene
//     Sprite classes: extended Phaser.Physics.Arcade.Sprite in 2 prefabs, one for the player and one for the enemies
//     Timers: used timers to perform a countdown at the start of level 1
//     Particles: shoots out particles on the winning screen at the end of the game

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
    scene: [ Load, Title, LevelOne, LevelTwo, LevelThree, Credits, YouWon ]
}

let game = new Phaser.Game(config)

//globals
let spaceKey, keyA, keyD, keyR
let hasbeen
let width = game.config.width
let height = game.config.height
let playerSpeed = 50