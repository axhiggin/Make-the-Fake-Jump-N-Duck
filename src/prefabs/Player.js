class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture){
        super(scene, x, y, 'player')
        //set up physics for the player
        this.parentScene = scene
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.body.setSize(15 , 32).setOffset(7, 0)
        this.body.setCollideWorldBounds(true)
        this.body.checkCollision.up = false
        this.setDragX(2000)
        this.setMaxVelocity(300, 320)
        this.setBounce(0)
        this.depth = 100

        //load animations
        this.anims.create({
            key: 'walk',
            frameRate: 6,
            repeat: -1,
            frames: this.parentScene.anims.generateFrameNumbers('player', {
                frames: [0, 1, 2, 3]
            }),
        })
        this.anims.create({
            key: 'idle',
            frameRate: 0,
            repeat: 0,
            frames: this.parentScene.anims.generateFrameNumbers('player', {
                frames: [0]
            }),
        })
        this.anims.create({
            key: 'jump',
            frameRate: 0,
            repeat: 0,
            frames: this.parentScene.anims.generateFrameNumbers('player', {
                frames: [4]
            }),
        })

        this.play('idle')
    }

    create(){
        //add input
        keyA = this.parentScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keyD = this.parentScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        spaceKey = this.parentScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

        
    }

    update(){
        //make input do something
        if(keyA.isDown){
            this.body.velocity.x -= 20
            this.setFlipX(true);

        }
        if(keyD.isDown){
            this.body.velocity.x += 20
            this.setFlipX(false);
        }
        //JUMP!
        if(this.body.velocity.y == 0 && Phaser.Input.Keyboard.JustDown(spaceKey)){
            this.body.velocity.y -= 1000
            this.parentScene.sound.play('jump', {volume: 0.1})
        }

        
        //set animations (mini finite state machine)
        if(this.body.velocity.y != 0){
            this.play('jump')
        }
        else if(this.body.velocity.x != 0){
            this.play('walk', true)
        }
        else{
            this.play('idle')
        }

    }
}