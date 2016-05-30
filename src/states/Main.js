import DayCycle from 'objects/DayCycle';

class Main extends Phaser.State {

	create() {

		//Enable Arcade Physics
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.plugins.add(Phaser.Plugin.ArcadeSlopes);

        //Set the games background colour
        this.game.stage.backgroundColor = '#f76943';

        //Adding the Tilemap
		this.map = this.game.add.tilemap('tilemap');
		this.map.addTilesetImage('ninja-tiles', 'tiles');

        //Config DayCycle Plugin
        /*this.dayCycle = new DayCycle(this.game, 50000);
 
        let bgBitMap = this.game.add.bitmapData(this.game.width, this.game.height);
 		
        bgBitMap.ctx.rect(0, 0, this.game.width, this.game.height);
        bgBitMap.ctx.fillStyle = '#b2ddc8';
        bgBitMap.ctx.fill();
 
        this.backgroundSprite = this.game.add.sprite(0, 0, bgBitMap);
 		
        this.sunSprite = this.game.add.sprite(50, -250, 'sun');
        this.moonSprite = this.game.add.sprite(this.game.width - (this.game.width / 4), this.game.height + 500, 'moon');
 		*/
 		//Parallax Images
		/*this.buildingsBack = this.game.add.tileSprite(0, 0, 
			this.map.widthInPixels, 
			this.game.cache.getImage('buildings-back').height, 
			'buildings-back'
		);*/

		this.buildingsMiddle = this.game.add.tileSprite(0, 0,
			this.map.widthInPixels, 
			this.game.cache.getImage('buildings-middle').height, 
			'buildings-middle'
		);

		this.buildingsFront = this.game.add.tileSprite(0, 0,
			this.map.widthInPixels, 
			this.game.cache.getImage('buildings-front').height, 
			'buildings-front'
		);
 
        /*let backgroundSprites = [
            {sprite: this.backgroundSprite, from: 0x1f2a27, to: 0xB2DDC8},
            {sprite: this.mountainsBack, from: 0x2f403b, to: 0x96CCBB},
            {sprite: this.mountainsMid1, from: 0x283632, to: 0x8BBCAC},
            {sprite: this.mountainsMid2, from: 0x202b28, to: 0x82AD9D}
        ];
 
        this.dayCycle.initShading(backgroundSprites);
        this.dayCycle.initSun(this.sunSprite);
        this.dayCycle.initMoon(this.moonSprite);*/

        //Adding Ground & collisions
		this.ground = this.map.createLayer('collision');
		this.ground.resizeWorld();
		 
		this.game.slopes.convertTilemapLayer(this.ground, {
		    2:  'FULL',
		    3:  'HALF_BOTTOM_LEFT',
		    4:  'HALF_BOTTOM_RIGHT',
		    6:  'HALF_TOP_LEFT',
		    5:  'HALF_TOP_RIGHT',
		    15: 'QUARTER_BOTTOM_LEFT_LOW',
		    16: 'QUARTER_BOTTOM_RIGHT_LOW',
		    17: 'QUARTER_TOP_RIGHT_LOW',
		    18: 'QUARTER_TOP_LEFT_LOW',
		    19: 'QUARTER_BOTTOM_LEFT_HIGH',
		    20: 'QUARTER_BOTTOM_RIGHT_HIGH',
		    21: 'QUARTER_TOP_RIGHT_HIGH',
		    22: 'QUARTER_TOP_LEFT_HIGH',
		    23: 'QUARTER_LEFT_BOTTOM_HIGH',
		    24: 'QUARTER_RIGHT_BOTTOM_HIGH',
		    25: 'QUARTER_RIGHT_TOP_LOW',
		    26: 'QUARTER_LEFT_TOP_LOW',
		    27: 'QUARTER_LEFT_BOTTOM_LOW',
		    28: 'QUARTER_RIGHT_BOTTOM_LOW',
		    29: 'QUARTER_RIGHT_TOP_HIGH',
		    30: 'QUARTER_LEFT_TOP_HIGH',
		    31: 'HALF_BOTTOM',
		    32: 'HALF_RIGHT',
		    33: 'HALF_TOP',
		    34: 'HALF_LEFT'
		});
		 
		this.map.setCollisionBetween(2, 34, true, 'collision');

		//Add Player
		this.player = this.game.add.sprite(64, 832, 'player');
		this.game.physics.arcade.enable(this.player);
		this.player.body.gravity.y = 500;
		 
		this.game.slopes.enable(this.player);
		this.game.camera.follow(this.player);

		this.controls = this.input.keyboard.addKeys({
			'up': Phaser.KeyCode.W,
			'left': Phaser.KeyCode.A,
			'right': Phaser.KeyCode.D
		});		

   	}

	update() {

		this.game.physics.arcade.collide(this.player, this.ground);

		//Parallax parameters
	    //this.mountainsBack.tilePosition.x -= 0.05;
	    //this.mountainsMid1.tilePosition.x -= 0.3;
	    //this.mountainsMid2.tilePosition.x -= 0.75;

		if (this.controls.left.isDown){
			if(this.player.body.touching.down){
				this.player.body.velocity.x -= 10;
			} else {
				this.player.body.velocity.x -= 2;
			}
		}

		if (this.controls.right.isDown){
			if(this.player.body.touching.down){
				this.player.body.velocity.x += 10;
			} else {
				this.player.body.velocity.x += 2;
			}
		}

		if (this.controls.up.isDown && this.player.body.touching.down) {
			this.player.body.velocity.y -= 400;
		}

		if (this.player.body.bottom >= this.world.bounds.bottom) {
		    this.state.start("Main");
		}

	}

}

export default Main;
