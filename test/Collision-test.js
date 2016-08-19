var assert = require('chai').assert;
var Box = require('../src/Box');
var Group = require('../src/Group');
var Collision = require('../src/Collision');


describe('Collision', function () {
    var boxA = new Box(3, 4);
    var boxB = new Box(2, 2);
    var groupA = new Group();
    var groupB = new Group();
    var collision = new Collision(boxA, boxB);

    describe('#constructor(Box, Box)', function () {
        it('shouldn\'t throw an error if boxes are passed', function () {
            var collision = Collision.bind(undefined, boxA, boxB);

            assert.doesNotThrow(collision, ReferenceError);
        });

        it('should throw error if groups passed', function () {
            var groupA = new Group();
            var groupB = new Group();
            var collision = Collision.bind(undefined, groupA, groupB);

            assert.throws(collision, ReferenceError);
        });

        it('should throw error if boxes aren\'t passed', function () {
            assert.throws(Collision, ReferenceError);
        });

        it('should assign passed boxes to boxA and boxB', function () {
            assert.equal(collision.boxA, boxA);
            assert.equal(collision.boxB, boxB);
        });
    });

    describe('#isTouching()', function () {
        it('should return true when boxes are touching', touching);

        it('should return false when boxes are outside', outside);

        it('should return true when boxes are inside', inside);
    });
    
    describe('#isNorth()', function () {

    });

    describe('#isWest()', function () {

    });
    
    describe('#isSouth()', function () {

    });

    describe('#isEast()', function () {

    });

    describe('#isInside()', function () {

    });


    function touching() {
        boxA.x = -1;
        boxA.y = -1;

        assert.equal(collision.isTouching(), true);
    }

    function outside() {
        boxA.x = -10;
        boxA.y = 10;

        assert.equal(collision.isTouching(), false);
    }

    function inside() {
        boxA.x = 1;
        boxA.y = 1;

        assert.equal(collision.isTouching(), true);
    }
});
