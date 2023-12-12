class LevelThree extends Phaser.Scene{
    constructor(){
        super('levelthree')
    }

    create(){
        //add keyboard input for reset
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)

        //create map
        this.map = this.add.tilemap('tilemap3JSON')
        const tileset = this.map.addTilesetImage('tileset', 'tilesetImage')

        //layers
        this.bgLayer = this.map.createLayer('Background', tileset, 0, 0)
        this.platLayer = this.map.createLayer('Platforms', tileset, 0, 0)
        this.endLayer = this.map.createLayer('Endlevel', tileset, 0, 0)
        this.deathLayer = this.map.createLayer('Death', tileset, 0, 0)

        //add player (make sure to call it player for enemy colliders)
        this.player = new Player(this, 17, 1200)
        this.player.create()
        
        //add enemies
        this.enemy1 = new Enemy(this, 360, 1050, 'bird', 360, 950)
        this.enemy2 = new Enemy(this, 1080, 860, 'bird', 1080, 780)
        this.enemy3 = new Enemy(this, 310, 700, 'bird', 310, 800)
        this.enemy4 = new Enemy(this, 180, 286, 'bird', 180, 386)
        this.enemy5 = new Enemy(this, 365, 1104, 'tomato', 535, 1104)
        this.enemy6 = new Enemy(this, 543, 944, 'tomato', 625, 944)
        this.enemy7 = new Enemy(this, 595, 528, 'tomato', 625, 528)
        this.enemy8 = new Enemy(this, 520, 272, 'tomato', 550, 272)

        //add arrow signs
        this.add.sprite(695, 944, 'rightarrow')
        this.add.sprite(225, 272, 'rightarrow')
        this.add.sprite(558, 528, 'downarrow')

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
            this.sound.play('yay', {volume: 0.1})
            this.scene.start('winscene')
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
        this.enemy4.update()
        this.enemy5.update()
        this.enemy6.update()
        this.enemy7.update()
        this.enemy8.update()

        // console.log(this.player.x, this.player.y)

        if(keyR.isDown){
            this.scene.restart()
        }
    }
}