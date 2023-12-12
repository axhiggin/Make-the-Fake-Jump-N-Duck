class LevelOne extends Phaser.Scene{
    constructor(){
        super('levelone')
    }

    create(){
        //prevent player from moving during countdown timer
        this.canMove = false

        //add keyboard input for reset
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)

        //create map
        this.map = this.add.tilemap('tilemap1JSON')
        const tileset = this.map.addTilesetImage('tileset', 'tilesetImage')

        //layers
        this.bgLayer = this.map.createLayer('Background', tileset, 0, 0)
        this.platLayer = this.map.createLayer('Platforms', tileset, 0, 0)
        this.endLayer = this.map.createLayer('Endlevel', tileset, 0, 0)
        this.deathLayer = this.map.createLayer('Death', tileset, 0, 0)

        //add player (make sure to call it player for enemy colliders)
        this.player = new Player(this, 10, game.config.height/1.2)
        this.player.create()
        
        //add enemies
        this.enemy1 = new Enemy(this, 890, 500, 'bird', 890, 400)
        this.enemy2 = new Enemy(this, 300, 336, 'tomato', 260, 336)

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
            this.scene.start('leveltwo')
        })
        

        //camera settings
        this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels)
        this.cameras.main.startFollow(this.player, false, 0.5, 0.5)
        this.cameras.main.setZoom(3, 3)
        this.physics.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels)

        //absolutely horrendous countdown code (please ignore)
        this.countdownConfig = {fontSize: '100px', color: 0x000001}

        this.three = this.add.text(120, game.config.height/1.3, '3', this.countdownConfig)
        this.sound.play('coin', {volume: 0.1})
        this.countdown = this.time.delayedCall(1000, () => {
            this.three.destroy()    
            this.two = this.add.text(120, game.config.height/1.3, '2', this.countdownConfig)
            this.sound.play('coin', {volume: 0.1})
            this.countdown = this.time.delayedCall(1000, () => {
                this.two.destroy()
                this.one = this.add.text(120, game.config.height/1.3, '1', this.countdownConfig)
                this.sound.play('coin', {volume: 0.1})
                this.countdown = this.time.delayedCall(1000, () => {
                    this.one.destroy()
                    this.start = this.add.text(10, game.config.height/1.3, 'START', this.countdownConfig)
                    //let the player move once the countdown is done
                    this.canMove = true
                    this.countdown = this.time.delayedCall(1000, () => {
                        this.start.destroy()
                    })
                })
            })
        })
    }

    update(){
        //call update on the instantiated sprites
        if(this.canMove){
            this.player.update()
        }
        this.enemy1.update()
        this.enemy2.update()
        // console.log(this.player.x, this.player.y)

        if(keyR.isDown){
            this.scene.restart()
        }
    }
}