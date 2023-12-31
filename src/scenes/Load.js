class Load extends Phaser.Scene{
    constructor(){
        super('loadscene')
    }

    preload(){
        this.load.spritesheet('player', './assets/image/Buford.png', {frameWidth: 32, frameHeight: 32})

        this.load.image('tilesetImage', './assets/image/tileset.png')
        this.load.image('tomato', './assets/image/Tomtato.png')
        this.load.image('bird', './assets/image/Bird.png')
        this.load.image('title', './assets/image/title.png')
        this.load.image('startbutton', './assets/image/startbutton.png')
        this.load.image('creditbutton', './assets/image/creditbutton.png')
        this.load.image('rightarrow', './assets/image/rightarrow.png')
        this.load.image('downarrow', './assets/image/downarrow.png')
        this.load.image('backtomenu', './assets/image/backtomenu.png')

        this.load.audio('jump', './assets/audio/jump.mp3')
        this.load.audio('death', './assets/audio/womp-womp.mp3')
        this.load.audio('levelup', './assets/audio/kaching.mp3')
        this.load.audio('bgm', './assets/audio/bgm.mp3')
        this.load.audio('coin', './assets/audio/coin.mp3')
        this.load.audio('yay', './assets/audio/yay.mp3')

        this.load.tilemapTiledJSON('tilemap1JSON', './assets/image/levelone.json')
        this.load.tilemapTiledJSON('tilemap2JSON', './assets/image/leveltwo.json')
        this.load.tilemapTiledJSON('tilemap3JSON', './assets/image/levelthree.json')
    }

    create(){
        //play music
        game.bgm = game.sound.add('bgm', {loop: true, volume: 0.05})
        game.bgm.play()
        this.scene.start('titlescene')
    }
}