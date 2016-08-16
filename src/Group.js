var Box = require('../src/Box');


function Group() {
    this.boxes = [];
}

(function (static_, proto_) {

    proto_.addBox = function (box) {
        if (!(box instanceof Box)) {
            return false;
        }

        this.boxes.push(box);
        
        return true;
    };

}(Group, Group.prototype));

module.exports = Group;
