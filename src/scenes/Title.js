class Title extends Phaser.Scene{
    constructor(){
        super('titlescene')
    }

    create(){
        this.add.sprite(game.config.width/2, 140, 'title')

        this.startbutton = this.add.sprite(game.config.width/2, game.config.height/1.9, 'startbutton')
        .setInteractive()
        .on('pointerdown', () => this.scene.start('levelone'))
        
        this.creditbutton = this.add.sprite(game.config.width/2, game.config.height/1.3, 'creditbutton')
        .setInteractive()
        .on('pointerdown', () => this.scene.start('creditscene'))
    }

    update(){
        
    }
}