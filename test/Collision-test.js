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
            assert.equal(north(), true);
        });

        it('should return false for other faces', function () {
            assert.equal(collision.isEast(), false);
            assert.equal(collision.isSouth(), false);
            assert.equal(collision.isWest(), false);
        });
    });

    describe('#isEast()', function () {
        it('should return true when boxB is entering through the east face',
        function () {
            assert.equal(east(), true);
        });

        it('should return false for other faces', function () {
            assert.equal(collision.isSouth(), false);
            assert.equal(collision.isWest(), false)
            assert.equal(collision.isNorth(), false)
        });
    });

    
    describe('#isSouth()', function () {
        it('should return true when boxB is entering through the south face',
        function () {
            assert.equal(south(), true);
        });

        it('should return false for other faces', function () {
            assert.equal(collision.isWest(), false)
            assert.equal(collision.isNorth(), false)
            assert.equal(collision.isEast(), false)
        });
    });

    describe('#isWest()', function () {
        it('should return true when boxB is entering through the west face',
        function () {
            assert.equal(west(), true);
        });

        it('should return false for other faces', function () {
            assert.equal(collision.isNorth(), false)
            assert.equal(collision.isEast(), false)
            assert.equal(collision.isSouth(), false)
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


    function north() {
        boxB.x = boxB.x = 0;
        boxB.y = 10;
        boxB.y = boxA.y + boxA.height - 1;

        return collision.isNorth();
    }

    function east() {
        boxB.x = 10;
        boxB.y = 0;
        boxB.x = boxA.width - 1;

        return collision.isEast();
    }

    function south() {
        boxB.y = -10;
        boxB.x = boxB.x = 0;
        boxB.y = 1 - boxB.height;

        return collision.isSouth();
    }

    function west() {
        boxB.x = -10;
        boxB.y = boxB.y = 0;
        boxB.x = 1 - boxB.width;

        return collision.isWest();
    }
});
