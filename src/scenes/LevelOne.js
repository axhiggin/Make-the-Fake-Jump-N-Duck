class LevelOne extends Phaser.Scene{
    constructor(){
        super('levelone')
    }

    create(){
        //add input

        //create map
        const map = this.add.tilemap('tilemapJSON')
        const tileset = map.addTilesetImage('tileset', 'tilesetImage')

        //layers
        const bgLayer = map.createLayer('Background', tileset, 0, 0)
        const platLayer = map.createLayer('Platforms', tileset, 0, 0)
        const endLayer = map.createLayer('Endlevel', tileset, 0, 0)
        const deathLayer = map.createLayer('Death', tileset, 0, 0)

        //add player
        this.player = new Player(this, game.config.width/2, game.config.height/2)
        this.player.create()

        //edit tilelayer properties
        platLayer.setCollisionByProperty({
            collides: true
        })
        deathLayer.setCollisionByProperty({
            collides: true
        })

        //camera settings
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
        this.cameras.main.startFollow(this.player, false, 0.5, 0.5)
        this.cameras.main.setZoom(2, 2)
        this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
    }

    update(){
        this.player.update()
    }
}