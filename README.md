# draw-triangles-2d

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Draws indexed triangles from a simplicial complex using Canvas2D context. 

Positions and cells look like this:

```js
{ positions: [ [25,25], [50, 50], ... ], cells: [ [0,1,2], [1,2,3], ... ] }
```

Demo:

```js
var drawTriangles = require('draw-triangles-2d')

var path = [ [25, 25], [40, 30], [50, 75], [125, 15] ]

//get a thick polyline
var mesh = require('extrude-polyline')({ 
    thickness: 20,
    miterLimit: 1.5
}).build(path)

function render(ctx, width, height) {
    ctx.clearRect(0,0,width,height)

    ctx.beginPath()
    drawTriangles(ctx, mesh.positions, mesh.cells)
    ctx.strokeStyle = 'black'
    ctx.lineJoin = 'bevel'
    ctx.stroke()
}
```

Simplicial complexes are a common ground between various modules, such as [triangulate-contours](https://www.npmjs.org/package/triangulate-contours), [extrude-polyline](https://www.npmjs.org/package/extrude-polyline), etc. 

## Usage

[![NPM](https://nodei.co/npm/draw-triangles-2d.png)](https://nodei.co/npm/draw-triangles-2d/)

#### `draw(context, positions, cells[, start, end])`

Draws the 2D positions and triangle cells (i.e. indices into positions) to the given context. You can specify `start` (inclusive) and `end` (exclusive) indices to only render a sub range of the cells. These values defualt to 0 and the length of `cells`, respectively.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/draw-triangles-2d/blob/master/LICENSE.md) for details.
