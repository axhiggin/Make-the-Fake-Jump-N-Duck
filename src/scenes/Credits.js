class Credits extends Phaser.Scene{
    constructor(){
        super('creditscene')
    }

    create(){
        let config = {
            fontFamily: 'yu gothic',
            fontSize: '100px',
            color: 0x000001,
        }

        let config2 = {
            fontFamily: 'yu gothic',
            fontSize: '30px',
            color: 0x000001,
        }

        this.add.text(320, 100, 'Credits', config)

        this.add.text(330, 250, 'Art, Game Design: Me', config2)

        this.add.text(280, 300, 'Inspiration: Phineas and Ferb', config2)

        this.add.text(300, 350, 'Sound Effects: pixabay.com', config2)

        this.add.text(90, 400, 'Music: https://www.youtube.com/watch?v=rQqr10MC_uw', config2)

        this.menubutton = this.add.sprite(750, 550, 'backtomenu')
        .setInteractive()
        .on('pointerdown', () => this.scene.start('titlescene'))
    }

    update(){
        
    }
}