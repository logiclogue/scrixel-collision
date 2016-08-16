var assert = require('chai').assert;
var Box = require('../src/Box');


describe('Box', function () {
    var boxA;
    var boxB;

    describe('#constructor', function () {
        boxA = new Box(3, 2);
        boxB = new Box(2, 2);

        it('should set correct x and y values', function () {
            assert.equal(boxA.x, 0);
            assert.equal(boxA.y, 0);
            assert.equal(boxB.x, 0);
            assert.equal(boxB.y, 0);
        });

        it('should set correct width and height', function () {
            boxA.width = 3;
            boxA.height = 2;
            boxB.width = 2;
            boxB.height = 2;
        });
    });
});
