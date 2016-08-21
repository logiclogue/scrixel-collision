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
        var boxAmax = this._getMax(this.boxA);
        var boxBmax = this._getMax(this.boxB);

        var isNorth = boxAmax[1] >= this.boxB.y;
        var isEast = boxAmax[0] >= this.boxB.x;
        var isSouth = this.boxA.y <= boxBmax[1];
        var isWest = this.boxA.x <= boxBmax[0];

        return isNorth && isEast && isSouth && isWest;
    };

    /*
     * Returns true if boxB is inside boxA.
     */
    proto_.isInside = function () {
        var boxAmax = this._getMax(this.boxA);
        var boxBmax = this._getMax(this.boxB);

        var isNorth = this.boxA.y >= this.boxB.y;
        var isEast = boxAmax[0] <= boxBmax[0];
        var isSouth = boxAmax[1] <= boxBmax[1];
        var isWest = this.boxA.x >= this.boxB.x;

        return isNorth && isEast && isSouth && isWest;
    };


    /*
     * Gets maximum coords of a box.
     * Both x and y.
     */
    proto_._getMax = function (box) {
        return [
            box.x + box.width,
            box.y + box.height
        ];
    };

}(Collision, Collision.prototype));

module.exports = Collision;
