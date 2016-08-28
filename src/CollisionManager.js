var Group = require('./Group');
var Box = require('./Box');
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

    this._collision = new Collision(new Box(), new Box());
}

(function (proto_) {

    /*
     * Tests all of the boxes in each group, against eachother.
     * Executes necessary callbacks.
     */
    proto_.test = function () {
        var collision = this._collision;

        this._forEachBox(function (boxA, boxB) {
            collision.boxA = boxA;
            collision.boxB = boxB;

            if (collision.isTouching()) {
                this.onTouch(boxA, boxB);
            }

            if (collision.isNorth()) {
                this.onNorth(boxA, boxB);
            }

            if (collision.isEast()) {
                this.onEast(boxA, boxB);
            }

            if (collision.isSouth()) {
                this.onSouth(boxA, boxB);
            }

            if (collision.isWest()) {
                this.onWest(boxA, boxB);
            }

            if (collision.isInside()) {
                this.onInside(boxA, boxB);
            }
        }.bind(this));
    };
    

    /*
     * Compares each box to eachother.
     * Calls callback with box from A and B.
     */ 
    proto_._forEachBox = function (callback) {
        this.groupA.boxes.forEach(function (boxA) {
            this.groupB.boxes.forEach(function (boxB) {
                callback(boxA, boxB);
            }.bind(this));
        }.bind(this));
    }

}(CollisionManager.prototype));

module.exports = CollisionManager;
