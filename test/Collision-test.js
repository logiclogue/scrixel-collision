var assert = require('chai').assert;
var Box = require('../src/Box');
var Group = require('../src/Group');
var Collision = require('../src/Collision');


describe('Collision', function () {
    var boxA = new Box(2, 2);
    var boxB = new Box(3, 4);
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
        it('should return true when boxes are touching', function () {
            boxA.x = -1;
            boxA.y = -1;

            assert.equal(collision.isTouching(), true);
        });

        it('should return false when boxes are outside', function () {
            boxA.x = -10;
            boxA.y = 10;

            assert.equal(collision.isTouching(), false);
        });

        it('should return true when boxes are inside', function () {
            boxA.x = 1;
            boxA.y = 1;

            assert.equal(collision.isTouching(), true);
        });
    });

    boxA.x = 0;
    boxA.y = 0;
    
    describe('#isNorth()', function () {
        it('should return true when boxB is entering through the north face',
        function () {
            boxB.x = boxB.x = 0;
            boxB.y = 10;
            boxB.y = boxA.y + boxA.height - 1;

            assert.equal(collision.isNorth(), true);
        });
    });

    describe('#isEast()', function () {
        it('should return true when boxB is entering through the east face',
        function () {
            boxB.x = 10;
            boxB.y = 0;
            boxB.x = boxA.width - 1;

            assert.equal(collision.isEast(), true);
        });
    });

    
    describe('#isSouth()', function () {
        it('should return true when boxB is entering through the south face',
        function () {
            boxB.x = -10;
            boxB.y = boxB.y = 0;
            boxB.x = -1;

            assert.equal(collision.isSouth(), true);
        });
    });

    describe('#isWest()', function () {
        it('should return true when boxB is entering through the west face',
        function () {
            boxB.x = -10;
            boxB.y = boxB.y = 0;
            boxB.x = 1;

            assert.equal(collision.isWest(), true);
        });
    });

    describe('#isInside()', function () {
        it('should return false when boxes are touching', function () {
            boxA.x = -1;
            boxA.y = -1;
            boxB.x = 0;
            boxB.y = 0;

            assert.equal(collision.isInside(), false);
        });

        it('should return false when boxes are outside', function () {
            boxA.x = -10;
            boxA.y = 10;

            assert.equal(collision.isInside(), false);
        });

        it('should return true when boxes are inside', function () {
            boxA.x = 1;
            boxA.y = 1;

            assert.equal(collision.isInside(), true);
        });
    });
});
