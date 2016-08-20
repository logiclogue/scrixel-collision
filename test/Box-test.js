var assert = require('chai').assert;
var Box = require('../src/Box');


describe('Box', function () {
    var box;

    describe('#constructor()', function () {
        box = new Box(3, 2);

        it('should set correct x and y values', function () {
            assert.equal(box.x, 0);
            assert.equal(box.y, 0);
        });

        it('should set prevX and prevY to null', function () {
            assert.equal(box.prevX, null);
            assert.equal(box.prevY, null);
        })

        it('should set correct width and height', function () {
            box.width = 3;
            box.height = 2;
        });
    });

    describe('#set x', function () {
        it('should set x and prevX if prevX is null', function () {
            box.prevX = null;
            box.x = 42;

            assert.equal(box.prevX, 42);
        });

        it('should set x to value given', function () {
            box.x = 10;

            assert.equal(box.x, 10);
        });

        it('should set prevX to the previous x value', function () {
            box.x = 1;
            box.x = 2;

            assert.equal(box.prevX, 1);
            assert.equal(box.x, 2);
        });
    });

    describe('#set y', function () {

    });
});
