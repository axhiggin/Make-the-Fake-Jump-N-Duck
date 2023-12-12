class Title extends Phaser.Scene{
    constructor(){
        super('titlescene')
    }

    create(){
        hasbeen = true
        this.add.sprite(game.config.width/2, 140, 'title')

        this.startbutton = this.add.sprite(game.config.width/2, game.config.height/1.9, 'startbutton')
        .setInteractive()
        .on('pointerdown', () => this.scene.start('levelone'))
        
        this.creditbutton = this.add.sprite(game.config.width/2, game.config.height/1.3, 'creditbutton')
        .setInteractive()
        .on('pointerdown', () => this.scene.start('creditscene'))

        this.add.text(310, 570, 'WASD + Space to move', {fontFamily: 'yu gothic', fontSize: '30px'})
        this.add.text(400, 600, 'R to restart game', {fontFamily: 'yu gothic', fontSize: '20px'})
    }

    update(){
        
    }
}