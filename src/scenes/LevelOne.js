class LevelOne extends Phaser.Scene{
    constructor(){
        super('levelone')
    }

    create(){
        //add input

        //create map
        this.map = this.add.tilemap('tilemap1JSON')
        const tileset = this.map.addTilesetImage('tileset', 'tilesetImage')

        //layers
        this.bgLayer = this.map.createLayer('Background', tileset, 0, 0)
        this.platLayer = this.map.createLayer('Platforms', tileset, 0, 0)
        this.endLayer = this.map.createLayer('Endlevel', tileset, 0, 0)
        this.deathLayer = this.map.createLayer('Death', tileset, 0, 0)

        //add player
        this.player = new Player(this, 10, game.config.height/1.2)
        this.player.create()

        // //edit tilelayer properties
        this.platLayer.setCollisionByProperty({
            collides: true
        })
        this.deathLayer.setCollisionByProperty({
            collides: true
        })

        this.endLayer.setCollisionByProperty({
            collides: true
        })

        this.physics.add.collider(this.player, this.platLayer)
        this.physics.add.collider(this.player, this.deathLayer, () => {
            this.scene.restart()
        })
        this.physics.add.collider(this.player, this.endLayer, () => {
            this.scene.start('leveltwo')
        })

        //camera settings
        this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels)
        this.cameras.main.startFollow(this.player, false, 0.5, 0.5)
        this.cameras.main.setZoom(2, 2)
        this.physics.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels)
    }

    update(){
        this.player.update()
    }
}