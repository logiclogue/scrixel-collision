var assert = require('chai').assert;
var Box = require('../src/Box');
var Group = require('../src/Group');
var CollisionManager = require('../src/CollisionManager');


describe('CollisionManager', function () {
    var boxA = new Box(2, 2);
    var boxB = new Box(3, 4);
    var groupA = new Group();
    var groupB = new Group();
    var collision;

    describe('#constructor(Group, Group)', function () {
        it('should set groupA and groupB', function () {
            collision = new CollisionManager(groupA, groupB);

            assert.equal(collision.groupA, groupA);
            assert.equal(collision.groupB, groupB);
        });

        it('should throw error if boxes passed', function () {
            var collision = CollisionManager.bind(undefined, boxA, boxB);

            assert.throws(collision, ReferenceError);
        });

        it('should throw error if groups aren\'t passed', function () {
            assert.throws(CollisionManager, ReferenceError);
        });
    });
});
