import {drawLine, drawRect} from './canvasFunction.js';


export function drawHinh1(ctx) {
    drawLine(ctx, 20, 500, 1000, 500);
    drawLine(ctx, 500, 500, 500, 200);

    // draw rect
    let newPoint = drawRect(ctx, 500, 170, 400, 60, 15, 500, 200, false, true);
    drawRect(ctx, 100, 170, 400, 60, -15, 500, 200, false, true);
    drawRect(ctx, 750, 470, 30, 30);

    drawRect(ctx, 505, 190, 80, 20, 15, 500, 200, false, true)
    drawRect(ctx, 415, 190, 80, 20, -15, 500, 200, false, true)

    // draw distance label
    drawLine(ctx, 500, 510, 750, 510, true);
    drawLine(ctx, 490, 500, 490, 200, true);
    // console.log(newPoint)
    drawLine(ctx, newPoint.newX, newPoint.newY, newPoint.newX, 500, true)
}