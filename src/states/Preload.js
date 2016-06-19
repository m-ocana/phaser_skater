class Preload extends Phaser.State {

	preload() {
		/* Preload required assets */
        /* Background layers */
    	this.game.load.image('buildings-back', 'assets/buildings-back.png');
    	this.game.load.image('buildings-middle', 'assets/buildings-middle.png');
    	this.game.load.image('buildings-front', 'assets/buildings-front.png');

        /* Tilemap */
    	this.game.load.tilemap('tilemap', 'assets/test-tile-map.json', null, Phaser.Tilemap.TILED_JSON);
    	this.game.load.spritesheet('tiles', 'assets/ninja-tiles64.png', 64, 64);

        /* Player */
        this.game.load.spritesheet('player', 'assets/skater-sprites.png',64,128);
	}

	create() {
		//NOTE: Change to GameTitle if required
		this.game.state.start("Main");
	}

}

export default Preload;
