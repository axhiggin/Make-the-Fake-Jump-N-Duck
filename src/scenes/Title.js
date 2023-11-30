class Title extends Phaser.Scene{
    constructor(){
        super('titlescene')
    }

    create(){
        spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        this.add.text(game.config.width/3, game.config.height/2, 'press space to start', {
            align: 'left',
            fontSize: '20px',
            color: 0x000001
        })
    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(spaceKey)){
            this.scene.start('levelone')
        }
    }
}