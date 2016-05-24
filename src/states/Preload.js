class Preload extends Phaser.State {

	preload() {
		/* Preload required assets */
    	this.game.load.image('mountains-back', 'assets/mountains-back.png');
    	this.game.load.image('mountains-mid1', 'assets/mountains-mid1.png');
    	this.game.load.image('mountains-mid2', 'assets/mountains-mid2.png');
    	
    	this.game.load.image('sun', 'assets/sun.png');
        this.game.load.image('moon', 'assets/moon.png');

    	this.game.load.tilemap('tilemap', 'assets/tiles.json', null, Phaser.Tilemap.TILED_JSON);
    	this.game.load.spritesheet('tiles', 'assets/ninja-tiles64.png', 64, 64);

    	this.game.load.image('player', 'assets/player.png');
	}

	create() {
		//NOTE: Change to GameTitle if required
		this.game.state.start("Main");
	}

}

export default Preload;
