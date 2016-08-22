var Group = require('./Group');
var Collision = require('./Collision');


function CollisionManager(groupA, groupB) {
    var isGroupAInstance = groupA instanceof Group;
    var isGroupBInstance = groupB instanceof Group;
    
    if (!isGroupAInstance || !isGroupBInstance) {
        throw new ReferenceError('not instance of Group');
    }

    this.groupA = groupA;
    this.groupB = groupB;

    this.onTouch = function () {};
    this.onNorth = function () {};
    this.onEast = function () {};
    this.onSouth = function () {};
    this.onWest = function () {};
    this.onInside = function () {};

    this._collision = new Collision();
}

(function (proto_) {

    /*
     * Tests all of the boxes in each group, against eachother.
     * Executes necessary callbacks.
     */
    proto_.test = function () {

    };

}(CollisionManager.prototype));

module.exports = CollisionManager;
