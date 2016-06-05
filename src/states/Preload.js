class Preload extends Phaser.State {

	preload() {
		/* Preload required assets */
    	this.game.load.image('buildings-back', 'assets/buildings-back.png');
    	this.game.load.image('buildings-middle', 'assets/buildings-middle.png');
    	this.game.load.image('buildings-front', 'assets/buildings-front.png');
    	
    	//this.game.load.image('sun', 'assets/sun.png');
        //this.game.load.image('moon', 'assets/moon.png');

    	this.game.load.tilemap('tilemap', 'assets/test-tile-map.json', null, Phaser.Tilemap.TILED_JSON);
    	this.game.load.spritesheet('tiles', 'assets/ninja-tiles64.png', 64, 64);

    	//this.game.load.image('player', 'assets/player.png');
        this.game.load.image('player', 'assets/skater-white.png');
	}

	create() {
		//NOTE: Change to GameTitle if required
		this.game.state.start("Main");
	}

}

export default Preload;
