class Title extends Phaser.Scene{
    constructor(){
        super('titlescene')
    }

    create(){
        this.add.text(width/2, height/2, 'press space to start', {
            align: 'center',
            fontSize: '60px',
            color: 0x000001
        })
    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(spaceKey)){
            this.scene.start('playscene')
        }
    }
}