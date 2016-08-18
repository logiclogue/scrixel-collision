var assert = require('chai').assert;
var Group = require('../src/Group');
var Box = require('../src/Box');


describe('Group', function () {
    var group;
    var boxA = new Box(2, 2);
    var boxB = new Box(3, 5);
    var boxC = new Box(5, 1);

    describe('#constructor()', function () {
        group = new Group();

        it('should have an empty box array', function () {
            assert.deepEqual(group.boxes, []);
        });
    });

    describe('#addBox()', function () {
        it('should add a box', function () {
            var returnVal = group.addBox(boxA);

            assert.deepEqual(group.boxes, [boxA]);
            assert.equal(returnVal, true);

            group.boxes = [];
        });

        it('shouldn\'t add a non box type', function () {
            var returnVal = group.addBox({});

            assert.deepEqual(group.boxes, []);
            assert.equal(returnVal, false);
        });
    });
});
