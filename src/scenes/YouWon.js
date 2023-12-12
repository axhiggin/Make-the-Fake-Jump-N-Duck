class YouWon extends Phaser.Scene{
    constructor(){
        super('winscene')
    }

    create(){
        this.add.text(260, 280, "YOU WON!", {fontSize: '100px', color: 0x000001})

        this.add.particles(200, 100, 'tomato', {
            speed: 100,
            lifespan: 2000,
            gravityY: 200,
            scale: 0.5
        });

        this.add.particles(750, 100, 'tomato', {
            speed: 100,
            lifespan: 2000,
            gravityY: 200,
            scale: 0.5
        });

        this.add.particles(475, 100, 'bird', {
            speed: 100,
            lifespan: 2000,
            gravityY: 200,
            scale: 0.5
        });
    

        this.menubutton = this.add.sprite(750, 550, 'backtomenu')
        .setInteractive()
        .on('pointerdown', () => this.scene.start('titlescene'))
    }

    update(){
        
    }
}