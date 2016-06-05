import DayCycle from 'objects/DayCycle';

class Main extends Phaser.State {

	create() {

		//Enable Arcade Physics
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        //this.game.physics.setBoundsToWorld();
        this.game.physics.p2.gravity.y = 1600;

        //Set the games background colour
        this.game.stage.backgroundColor = '#f76943';

        //Adding the Tilemap
		this.map = this.game.add.tilemap('tilemap');
		this.map.addTilesetImage('ninja-tiles64', 'tiles');

		// Adding background sprites
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

        //Adding Ground & collisions
		this.ground = this.map.createLayer('groundLayer');
		this.ramps = this.map.createLayer('tiledRampsLayer');
		this.ground.resizeWorld();
		 
		this.map.setCollisionBetween(2,34,true,'groundLayer');
		
		this.game.physics.p2.convertTilemap(this.map, this.ground);
		this.game.physics.p2.convertCollisionObjects(this.map,"ramps");
		
		//Add Player
		this.player = this.game.add.sprite(64, 1024, 'player');

		this.game.physics.p2.enable(this.player);
		this.player.anchor.setTo(0.5,0.5); // set the anchor to the exact middle of the player (good for flipping the image on the same place)
    
    	this.player.body.setCircle(64,0,0);
    	this.player.body.fixedRotation=true;
		//this.player.body.gravity.y = 200;
		 
		//this.game.slopes.enable(this.player);
		this.game.camera.follow(this.player);

		this.controls = this.input.keyboard.addKeys({
			'up': Phaser.KeyCode.W,
			'left': Phaser.KeyCode.A,
			'right': Phaser.KeyCode.D
		});		

   	}

	update() {

		if (this.controls.left.isDown){
			if(this._touchingDown(this.player)){
				// flips image to the left
				this.player.scale.x = -1;
				this.player.body.velocity.x -= 20;
			} else {
				this.player.body.velocity.x -= 2;
				this.player.angle-=1;
			}
		}

		if (this.controls.right.isDown){
			if(this._touchingDown(this.player)){
				this.player.scale.x = 1;
				this.player.body.velocity.x += 20;
			} else {
				this.player.body.velocity.x += 2;
				this.player.angle+=1;
			}
		}

		if (this.controls.up.isDown && this._touchingDown(this.player)) {
			this.player.body.velocity.y -= 400;
		}

		if (this.player.bottom >= this.world.bounds.bottom) {
		    this.state.start("Main");
		}

    this._angle(this.player);
    //if (!this._touchingDown(this.player) ){this.player.angle=0;}

	}

	/*
	this function uses the p2 collision calculations that are done on every step to find out if the player collides with something on the bottom - it returns true if a collision is happening
	*/
	_touchingDown(someone) {
	    var yAxis = p2.vec2.fromValues(0, 1);
	    var result = false;
	    for (var i = 0; i < this.game.physics.p2.world.narrowphase.contactEquations.length; i++) {
	        var c = this.game.physics.p2.world.narrowphase.contactEquations[i];  // cycles through all the contactEquations until it finds our "someone"
	        if (c.bodyA === someone.body.data || c.bodyB === someone.body.data)        {
	            var d = p2.vec2.dot(c.normalA, yAxis); // Normal dot Y-axis
	            if (c.bodyA === someone.body.data) d *= -1;
	            if (d > 0.5) result = true;
	        }
	    } return result;
	}

	_angle(someone) {
    var yAxis = p2.vec2.fromValues(0, 1);
    var result = 1;
    for (var i = 0; i < this.game.physics.p2.world.narrowphase.contactEquations.length; i++) {
        var c = this.game.physics.p2.world.narrowphase.contactEquations[i];  // cycles through all the contactEquations until it finds our "someone"
        if (c.bodyA === someone.body.data || c.bodyB === someone.body.data)        {
            var d = p2.vec2.dot(c.normalA, yAxis); // Normal dot Y-axis
           // if (c.bodyA === someone.body.data) d *= -1;
            someone.angle = c.normalA[0]*100;
            //console.log(c.normalA[0])
        }
    } return result;
}

}

export default Main;
