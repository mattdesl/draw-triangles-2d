var drawTriangles = require('./')
require('canvas-testbed')(render)

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
