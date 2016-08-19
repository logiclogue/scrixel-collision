var Box = require('./Box');


function Collision(boxA, boxB) {
    var isBoxAInstance = boxA instanceof Box;
    var isBoxBInstance = boxB instanceof Box;

    if (!isBoxAInstance || !isBoxBInstance) {
        throw new ReferenceError('not instance of box');
    }

    this.boxA = boxA;
    this.boxB = boxB;
}

(function (static_, proto_) {

    /*
     * Returns true or false depending on whether the two boxes are touching.
     */
    proto_.isTouching = function () {
        if (this._isNorthOverlap() && this._isEastOverlap() &&
            this._isSouthOverlap() && this._isWestOverlap()) {
            return true;
        }

        return false;
    };

    /*
     * Returns true if boxB is inside boxA.
     */
    proto_.isInside = function () {

    };


    /*
     * If the south face of boxB is overlapping the north face of boxA.
     */
    proto_._isNorthOverlap = function () {
        if (this.boxA.y + this.boxA.height >= this.boxB.y) {
            return true;
        }

        return false;
    };

    /*
     * If the west face of boxB is overlapping the east face of boxA.
     */
    proto_._isEastOverlap = function () {
        if (this.boxA.x + this.boxA.width >= this.boxB.x) {
            return true;
        }

        return false;
    };

    /*
     * If the north face of boxB is overlapping the south face of boxA.
     */
    proto_._isSouthOverlap = function () {
        if (this.boxA.y <= this.boxB.y + this.boxB.height) {
            return true;
        }
        
        return false;
    };

    /*
     * If the east face of boxB is overlapping the west face of boxA.
     */
    proto_._isWestOverlap = function () {
        if (this.boxA.x <= this.boxB.x + this.boxB.width) {
            return true;
        }

        return false;
    };

}(Collision, Collision.prototype));

module.exports = Collision;
