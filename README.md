# scrixel-collision

AABB collision library for the Scrixel game engine.

## Installation

`npm install --save scrixel-collision`

## Example

### Require

`var ScrixelCollision = require('scrixel-collision')`

### Creating a Boxes

```
var boxA = new ScrixelCollision.Box(5, 10);
var boxB = new ScrixelCollision.Box(2, 3);
```

Where box A will have a width of 5 and a height of 10 and box B will have a
width of 2 and a height of 3.

### Creating a Group

```
var groupA = new ScrixelCollision.Group();
var groupB = new ScrixelCollision.Group();

groupA.addBox(boxA);
groupB.addBox(boxB);
```

Adds `boxA` to `groupA` and adds `boxB` to `groupB`.

### Testing a Collision

```
var collision = new ScrixelCollision.CollisionManager(groupA, groupB);

collision.onTouch = function () {
    console.log('A groupA box is colliding with a groupB box');
};

collision.test();
```

It will console.log if a box from `groupA` is colliding with `groupB`.

## Tests

In `scrixel-collision` root directory, run:

```
npm install
npm test
```

## Author

Jordan Lord

## License

GPLv3. See [LICENSE.md](LICENSE.md).
