var Group = require('./Group');


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
}

module.exports = CollisionManager;
