class Load extends Phaser.Scene{
    constructor(){
        super('loadscene')
    }

    preload(){
        this.load.image('player', './assets/image/Booford.png')
        this.load.image('tilesetImage', './assets/image/tileset.png')
        this.load.image('tomato', './assets/image/Tomtato.png')
        this.load.image('bird', './assets/image/Bird.png')
        this.load.audio('jump', './assets/audio/jump.mp3')
        this.load.audio('death', './assets/audio/womp-womp.mp3')
        this.load.audio('levelup', './assets/audio/kaching.mp3')
        this.load.tilemapTiledJSON('tilemap1JSON', './assets/image/levelone.json')
    }

    create(){
        this.scene.start('titlescene')
    }
}