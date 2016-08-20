function Box(width, height) {
    this._x = 0;
    this._y = 0;
    this.prevX = null;
    this.prevY = null;
    this.width = width;
    this.height = height;
}

(function (static_, proto_, def) {

    def('x', {
        set: function (x) {
            var oldX = this._x;

            this._x = x;

            if (this.prevX === null) {
                this.prevX = x;
            }
            else {
                this.prevX = oldX;
            }
        },
        get: function () {
            return this._x;
        }
    });

    def('y', {
        set: function (y) {
            var oldY = this._y;

            this._y = y;

            if (this.prevY === null) {
                this.prevY = y;
            }
            else {
                this.prevY = oldY
            }
        },
        get: function () {
            return this._y;
        }
    });

}(Box, Box.prototype, Object.defineProperty.bind({}, Box.prototype)));

module.exports = Box;
