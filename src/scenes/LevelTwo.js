class LevelTwo extends Phaser.Scene{
    constructor(){
        super('leveltwo')
    }

    create(){
        //add keyboard input for reset
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)

        //create map
        this.map = this.add.tilemap('tilemap2JSON')
        const tileset = this.map.addTilesetImage('tileset', 'tilesetImage')

        //layers
        this.bgLayer = this.map.createLayer('Background', tileset, 0, 0)
        this.platLayer = this.map.createLayer('Platforms', tileset, 0, 0)
        this.endLayer = this.map.createLayer('Endlevel', tileset, 0, 0)
        this.deathLayer = this.map.createLayer('Death', tileset, 0, 0)

        //add player (make sure to call it player for enemy colliders)
        this.player = new Player(this, 10, 0)
        this.player.create()
        
        //add enemies
        this.enemy1 = new Enemy(this, 375, 50, 'bird', 375, 150)
        this.enemy2 = new Enemy(this, 570, 208, 'tomato', 650, 208)
        this.enemy3 = new Enemy(this, 1028, 190, 'bird', 1028, 50)

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

        //add colliders
        this.physics.add.collider(this.player, this.platLayer)
        this.physics.add.collider(this.player, this.deathLayer, () => {
            this.sound.play('death', {volume: 0.1})
            this.scene.restart()
        })
        this.physics.add.collider(this.player, this.endLayer, () => {
            this.sound.play('levelup', {volume: 0.1})
            this.scene.start('levelthree')
        })
        

        //camera settings
        this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels)
        this.cameras.main.startFollow(this.player, false, 0.5, 0.5)
        this.cameras.main.setZoom(3, 3)
        this.physics.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels)
    }

    update(){
        //call update on the instantiated sprites
        this.player.update()
        this.enemy1.update()
        this.enemy2.update()
        this.enemy3.update()
        // console.log(this.player.x, this.player.y)

        if(keyR.isDown){
            this.scene.restart()
        }
    }
}