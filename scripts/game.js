(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _statesBoot = require('states/Boot');

var _statesBoot2 = _interopRequireDefault(_statesBoot);

var _statesPreload = require('states/Preload');

var _statesPreload2 = _interopRequireDefault(_statesPreload);

var _statesGameTitle = require('states/GameTitle');

var _statesGameTitle2 = _interopRequireDefault(_statesGameTitle);

var _statesMain = require('states/Main');

var _statesMain2 = _interopRequireDefault(_statesMain);

var _statesGameOver = require('states/GameOver');

var _statesGameOver2 = _interopRequireDefault(_statesGameOver);

var Game = (function (_Phaser$Game) {
	_inherits(Game, _Phaser$Game);

	function Game() {
		_classCallCheck(this, Game);

		_get(Object.getPrototypeOf(Game.prototype), 'constructor', this).call(this, window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO);

		this.state.add('Boot', _statesBoot2['default'], false);
		this.state.add('Preload', _statesPreload2['default'], false);
		this.state.add('GameTitle', _statesGameTitle2['default'], false);
		this.state.add('Main', _statesMain2['default'], false);
		this.state.add('GameOver', _statesGameOver2['default'], false);

		this.state.start('Boot');
	}

	return Game;
})(Phaser.Game);

new Game();

},{"states/Boot":2,"states/GameOver":3,"states/GameTitle":4,"states/Main":5,"states/Preload":6}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boot = (function (_Phaser$State) {
	_inherits(Boot, _Phaser$State);

	function Boot() {
		_classCallCheck(this, Boot);

		_get(Object.getPrototypeOf(Boot.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(Boot, [{
		key: "preload",
		value: function preload() {}
	}, {
		key: "create",
		value: function create() {
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			this.game.state.start("Preload");
		}
	}]);

	return Boot;
})(Phaser.State);

exports["default"] = Boot;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameOver = (function (_Phaser$State) {
	_inherits(GameOver, _Phaser$State);

	function GameOver() {
		_classCallCheck(this, GameOver);

		_get(Object.getPrototypeOf(GameOver.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(GameOver, [{
		key: "create",
		value: function create() {}
	}, {
		key: "restartGame",
		value: function restartGame() {
			this.game.state.start("Main");
		}
	}]);

	return GameOver;
})(Phaser.State);

exports["default"] = GameOver;
module.exports = exports["default"];

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameTitle = (function (_Phaser$State) {
	_inherits(GameTitle, _Phaser$State);

	function GameTitle() {
		_classCallCheck(this, GameTitle);

		_get(Object.getPrototypeOf(GameTitle.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(GameTitle, [{
		key: "create",
		value: function create() {}
	}, {
		key: "startGame",
		value: function startGame() {
			this.game.state.start("Main");
		}
	}]);

	return GameTitle;
})(Phaser.State);

exports["default"] = GameTitle;
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = (function (_Phaser$State) {
	_inherits(Main, _Phaser$State);

	function Main() {
		_classCallCheck(this, Main);

		_get(Object.getPrototypeOf(Main.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Main, [{
		key: 'create',
		value: function create() {

			// Enable Arcade Physics
			this.game.physics.startSystem(Phaser.Physics.P2JS);

			// Set variables
			this.game.physics.p2.gravity.y = 1600;
			this.game.stage.backgroundColor = '#f76943';

			// Adding Tilemap
			this.map = this.game.add.tilemap('tilemap');
			this.map.addTilesetImage('ninja-tiles64', 'tiles');

			// Adding background sprites
			this.buildingsMiddle = this.game.add.tileSprite(0, 0, this.map.widthInPixels, this.game.cache.getImage('buildings-middle').height, 'buildings-middle');
			this.buildingsFront = this.game.add.tileSprite(0, 0, this.map.widthInPixels, this.game.cache.getImage('buildings-front').height, 'buildings-front');

			// Creating layers & adding collisions
			this.ground = this.map.createLayer('groundLayer');
			this.ramps = this.map.createLayer('tiledRampsLayer');
			this.map.setCollisionBetween(2, 34, true, 'groundLayer');
			this.game.physics.p2.convertTilemap(this.map, this.ground);
			this.game.physics.p2.convertCollisionObjects(this.map, "ramps");

			// Match canvas to the size of the Tilemap
			this.ground.resizeWorld();

			// Add Player
			this.player = this.game.add.sprite(64, 1024, 'player');
			this.game.physics.p2.enable(this.player);
			// Setting Player parameters
			this.player.anchor.setTo(0.5, 0.5); // set the anchor to the exact middle of the player
			this.player.body.setCircle(64, 0, 0); // set circle around the player with 64px radius
			this.player.body.fixedRotation = true;
			// Adding player animations
			this.player.animations.add('move', [0, 1], 0.5, true);
			this.player.animations.add('jump', [2, 3, 4], 8);
			this.player.animations.add('land', [5, 6], 4);

			// Setting camera & adding controls
			this.game.camera.follow(this.player);
			this.controls = this.game.input.keyboard.createCursorKeys();
		}
	}, {
		key: 'update',
		value: function update() {

			if (this.controls.left.isDown) {
				if (this._touchingDown(this.player)) {
					// flips image to the left
					this.player.animations.play('move');
					this.player.scale.x = -1;
					this.player.body.velocity.x -= 20;
				} else {
					this.player.body.velocity.x -= 2;
					this.player.angle -= 1;
				}
			}

			if (this.controls.right.isDown) {
				if (this._touchingDown(this.player)) {
					this.player.animations.play('move');
					this.player.scale.x = 1;
					this.player.body.velocity.x += 20;
				} else {
					this.player.body.velocity.x += 2;
					this.player.angle += 1;
				}
			}

			if (this.controls.up.isDown && this._touchingDown(this.player)) {
				this.player.animations.play('jump');
				this.player.body.velocity.y -= 400;
			}

			if (this.player.bottom >= this.world.bounds.bottom) {
				this.state.start("Main");
			}

			this._angle(this.player);
		}

		/*
  this function uses the p2 collision calculations that are done on every step to find out if the player collides with something on the bottom - it returns true if a collision is happening
  */
	}, {
		key: '_touchingDown',
		value: function _touchingDown(someone) {
			var yAxis = p2.vec2.fromValues(0, 1);
			var result = false;
			for (var i = 0; i < this.game.physics.p2.world.narrowphase.contactEquations.length; i++) {
				var c = this.game.physics.p2.world.narrowphase.contactEquations[i]; // cycles through all the contactEquations until it finds our "someone"
				if (c.bodyA === someone.body.data || c.bodyB === someone.body.data) {
					var d = p2.vec2.dot(c.normalA, yAxis); // Normal dot Y-axis
					if (c.bodyA === someone.body.data) d *= -1;
					if (d > 0.5) result = true;
				}
			}return result;
		}
	}, {
		key: '_angle',
		value: function _angle(someone) {
			var yAxis = p2.vec2.fromValues(0, 1);
			var result = 1;
			for (var i = 0; i < this.game.physics.p2.world.narrowphase.contactEquations.length; i++) {
				var c = this.game.physics.p2.world.narrowphase.contactEquations[i]; // cycles through all the contactEquations until it finds our "someone"
				if (c.bodyA === someone.body.data || c.bodyB === someone.body.data) {
					var d = p2.vec2.dot(c.normalA, yAxis); // Normal dot Y-axis
					someone.angle = c.normalA[0] * 100;
				}
			}return result;
		}
	}]);

	return Main;
})(Phaser.State);

exports['default'] = Main;
module.exports = exports['default'];

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preload = (function (_Phaser$State) {
  _inherits(Preload, _Phaser$State);

  function Preload() {
    _classCallCheck(this, Preload);

    _get(Object.getPrototypeOf(Preload.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Preload, [{
    key: 'preload',
    value: function preload() {
      /* Preload required assets */
      /* Background layers */
      this.game.load.image('buildings-back', 'assets/buildings-back.png');
      this.game.load.image('buildings-middle', 'assets/buildings-middle.png');
      this.game.load.image('buildings-front', 'assets/buildings-front.png');

      /* Tilemap */
      this.game.load.tilemap('tilemap', 'assets/test-tile-map.json', null, Phaser.Tilemap.TILED_JSON);
      this.game.load.spritesheet('tiles', 'assets/ninja-tiles64.png', 64, 64);

      /* Player */
      this.game.load.spritesheet('player', 'assets/skater-sprites.png', 64, 128);
    }
  }, {
    key: 'create',
    value: function create() {
      //NOTE: Change to GameTitle if required
      this.game.state.start("Main");
    }
  }]);

  return Preload;
})(Phaser.State);

exports['default'] = Preload;
module.exports = exports['default'];

},{}]},{},[1])
//# sourceMappingURL=game.js.map
