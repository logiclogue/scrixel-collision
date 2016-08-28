function Box(width, height) {
    this._x = 0;
    this._y = 0;
    this.prevX = null;
    this.prevY = null;
    this.width = width;
    this.height = height;
}

Box.prototype = {
    set x(x) {
        var oldX = this._x;

        this._x = x;

        if (this.prevX === null) {
            this.prevX = x;
        }
        else {
            this.prevX = oldX;
        }
    },
    get x() {
        return this._x;
    },

    set y(y) {
        var oldY = this._y;

        this._y = y;

        if (this.prevY === null) {
            this.prevY = y;
        }
        else {
            this.prevY = oldY
        }
    },
    get y() {
        return this._y;
    }
};

module.exports = Box;
