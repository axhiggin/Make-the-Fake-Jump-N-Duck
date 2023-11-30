class Load extends Phaser.Scene{
    constructor(){
        super('loadscene')
    }

    preload(){
        this.load.image('player', './assets/image/Booford.png')
        this.load.image('tilesetImage', './assets/image/tileset.png')
        this.load.tilemapTiledJSON('tilemap1JSON', './assets/image/levelone.json')
    }

    create(){
        this.scene.start('titlescene')
    }
}