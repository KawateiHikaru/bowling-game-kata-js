var expect    = require("chai").expect;
var BowlingGame = require("../js/BowlingGame.js")

describe("BowlingGame", function() {

	var game;

	beforeEach(function(){
		game = new BowlingGame();
	});

	function rollMany (n, pins) {
		for (var i = 0; i < n; i++) {
			game.roll(pins)
		}
	}

	function rollSpare() {
		game.roll(5);
		game.roll(5);
	}

	function rollStrike() {
		game.roll(10);
	}


	describe("Game 1", function() {
		it("handle gutter game", function() {
			var game = new BowlingGame();
			for (var i = 0; i < 20; i++) {
				game.roll(0);
			}
			// console.log(game.score());
			expect(0).to.equal(0);
		});
	});

	describe("Game 2", function() {
		it("handle gutter game", function() {
			rollMany(20, 0);
			expect(game.score()).to.equal(0);
		});

		it("should handle all ones", function() {
			rollMany(20, 1);
			expect(game.score()).to.equal(20);
		});
	});

	describe("Game 3", function() {
		it("handle gutter game", function() {
			rollMany(20, 0);
			expect(game.score()).to.equal(0);
		});

		it("should handle all ones", function() {
			rollMany(20, 1);
			expect(game.score()).to.equal(20);
		});

		it("should handle one spare", function() {
			rollSpare();
			game.roll(3);
			rollMany(17, 0);
			expect(game.score()).to.equal(16);
		});
	});


	describe("Game 4", function() {

		it("should handle gutter game", function() {
			rollMany(20, 0);
			expect(game.score()).to.equal(0);
		});

		it("should handle all ones", function() {
			rollMany(20, 1);
			expect(game.score()).to.equal(20);
		});

		it("should handle one spare", function() {
			rollSpare();
			game.roll(3);
			rollMany(17, 0);
			expect(game.score()).to.equal(16);
		});

		it("should handle one strike", function() {
			rollStrike();
			game.roll(3);
			game.roll(4);
			rollMany(16, 0);
			expect(game.score()).to.equal(24);
		});
	});

	describe("Game 5", function() {

		it("should handle gutter game", function() {
			rollMany(20, 0);
			expect(game.score()).to.equal(0);
		});

		it("should handle all ones", function() {
			rollMany(20, 1);
			expect(game.score()).to.equal(20);
		});

		it("should handle one spare", function() {
			rollSpare();
			game.roll(3);
			rollMany(17, 0);
			expect(game.score()).to.equal(16);
		});

		it("should handle one strike", function() {
			rollStrike();
			game.roll(3);
			game.roll(4);
			rollMany(16, 0);
			expect(game.score()).to.equal(24);
		});

		it("should handle a perfect game", function() {
			rollMany(12, 10);
			expect(game.score()).to.equal(300);
		});
	});
});	