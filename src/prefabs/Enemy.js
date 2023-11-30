class Enemy extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, xto, yto){
        super(scene, x, y, texture)
        this.parentScene = scene
        scene.add.existing(this)
        scene.physics.add.existing(this)

        //keep track of start x,y and end x,y
        this.xto = xto
        this.yto = yto
        this.xfrom = x
        this.yfrom = y

        this.body.setAllowGravity(false)
        this.reached = false

        //add collider if there is a player
        if(scene.player){
            scene.physics.add.collider(scene.player, this, () => {
                scene.sound.play('death', {volume: 0.1})
                scene.scene.restart()
            })
        }
    }

    update(){
        //go back and forth between original x,y and xto, yto
        if(!this.reached){
            this.parentScene.physics.moveTo(this, this.xto, this.yto)
            if(Phaser.Math.Distance.Between(this.x, this.y, this.xto, this.yto) < 1){
                this.reached = true
            }
        }
        else{
            this.parentScene.physics.moveTo(this, this.xfrom, this.yfrom)
            if(Phaser.Math.Distance.Between(this.x, this.y, this.xfrom, this.yfrom) < 1){
                this.reached = false
            }
        }
    }
}