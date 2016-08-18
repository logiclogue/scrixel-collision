var assert = require('chai').assert;
var Group = require('../src/Group');
var Box = require('../src/Box');
var Collision = require('../src/Collision');


describe('Collision', function () {
    var boxA = new Box(2, 4);
    var boxB = new Box(1, 1);
    var groupA = new Group();
    var groupB = new Group();

    groupA.addBox(boxA);
    groupB.addBox(boxB);

    describe('#constructor(Group, Group)', function () {
        it('shouldn\'t throw an error if groups are passed', function () {
            var collision = Collision.bind(undefined, groupA, groupB);

            assert.doesNotThrow(collision, ReferenceError);
        });

        it('should throw error if boxes passed', function () {
            var collision = Collision.bind(undefined, boxA, boxB);

            assert.throws(collision, ReferenceError);
        });

        it('should throw error if groups aren\'t passed', function () {
            assert.throws(Collision, ReferenceError);
        });
    });

    describe('#test()', function () {
        
    });
});
