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
        this._forEachBox(function (boxA, boxB) {
            collision.boxA = boxA;
            collision.boxB = boxB;

            if (collision.isTouching()) {
                this.onTouch();
            }

            if (collision.isNorth()) {
                this.onNorth();
            }

            if (collision.isEast()) {
                this.onEast();
            }

            if (collision.isSouth()) {
                this.onSouth();
            }

            if (collision.isWest()) {
                this.onWest();
            }

            if (collision.isInside()) {
                this.onInside();
            }
        });
    };
    

    proto_._forEachBoxA = function (callback) {
        this.groupA.boxes.forEach(callback);
    };

    proto_._forEachBoxB = function (callback) {
        this.groupB.boxes.forEach(callback);
    };

    proto_._forEachBox = function (callback) {
        this.groupA.boxes.forEach(function (boxA) {
            this.groupB.boxes.forEach(function (boxB) {
                callback(boxA, boxB);
            }.bind(this));
        }.bind(this));
    }

}(CollisionManager.prototype));

module.exports = CollisionManager;
