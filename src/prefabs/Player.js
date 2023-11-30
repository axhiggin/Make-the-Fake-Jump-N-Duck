class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture){
        super(scene, x, y, 'player')
        this.parentScene = scene
        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.body.setCollideWorldBounds(true)
        this.setDragX(2000)
        this.setMaxVelocity(300, 320)
        this.setBounce(0)
    }

    create(){
        keyA = this.parentScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keyD = this.parentScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        spaceKey = this.parentScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
    }

    update(){
        if(keyA.isDown){
            this.body.velocity.x -= 30
        }
        if(keyD.isDown){
            this.body.velocity.x += 30
        }
        if(this.body.velocity.y == 0 && Phaser.Input.Keyboard.JustDown(spaceKey)){
            this.body.velocity.y -= 1000
        }
    }
}