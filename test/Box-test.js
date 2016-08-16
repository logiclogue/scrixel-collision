var assert = require('chai').assert;
var Box = require('../src/Box');


describe('Box', function () {
    var box;

    describe('#constructor', function () {
        box = new Box(3, 2);

        it('should set correct x and y values', function () {
            assert.equal(box.x, 0);
            assert.equal(box.y, 0);
        });

        it('should set correct width and height', function () {
            box.width = 3;
            box.height = 2;
        });
    });
});
