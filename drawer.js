import {drawLine, drawRect, drawTextBox, rotationPoint} from './canvasFunction.js';


export function drawHinh1(ctx) {
    drawLine(ctx, 20, 500, 1000, 500);
    drawLine(ctx, 500, 500, 500, 200);

    // draw rect
    let newPoint = drawRect(ctx, 500, 170, 400, 60, 15, 500, 200, false, true, false);
    drawRect(ctx, 100, 170, 400, 60, -15, 500, 200, false, true, true);
    drawRect(ctx, 750, 470, 30, 30);

    drawRect(ctx, 505, 190, 80, 20, 15, 500, 200, false, true, false)
    drawRect(ctx, 415, 190, 80, 20, -15, 500, 200, false, true, true)

    // draw distance label
    drawLine(ctx, 500, 510, 750, 510, true);
    drawLine(ctx, 490, 500, 490, 200, true);
    // console.log(newPoint)
    drawLine(ctx, newPoint.newX, newPoint.newY, newPoint.newX, 500, true)
}

export function drawHinh2(ctx) {
    drawLine(ctx, 20, 600, 1000, 600);
    drawRect(ctx, 140, 90, 780, 200, 2, 440, 140, false, true)
    drawRect(ctx, 140, 165, 150, 40, 2, 440, 140, false, true)
    drawRect(ctx, 100, 240, 300, 360);
    ctx.fillStyle = 'red';
    ctx.fillText('Nhà đặt trạm', 100 + 300 / 4, 320 + 150);
    drawLine(ctx, 90, 240, 90, 600, true)
    drawLine(ctx, 100, 300, 400, 300, false);
    ctx.fillText('Tầng 5', 160, 290);
    let listPoint = [[400, 450], [500, 450], [500, 400], [600, 400], [600, 450], [700, 450], [700, 400], [1000, 400]]
    for(let i = 0; i < listPoint.length - 1; i++) {
        ctx.moveTo(listPoint[i][0], listPoint[i][1]);
        ctx.lineTo(listPoint[i + 1][0], listPoint[i + 1][1]);
        ctx.stroke();
    }
    ctx.fillText('Khu nhà 2-3 tầng', 600, 550)

    ctx.moveTo(900, 400);
    ctx.bezierCurveTo(900, 500, 860, 500, 900, 600);
    ctx.stroke()

    drawLine(ctx, 950, 400, 950, 600, true);
    drawLine(ctx, 300, 240, 300, 300, true);

    
}

export function drawHinh3(ctx) {
    ctx.font = "20px Times New Roman"
    ctx.beginPath();
    ctx.arc(400, 400, 300, 0, 2*Math.PI);
    ctx.stroke()

    let startPoint1 = rotationPoint(100, 400, 60, 400, 400);
    let endPoint1 = rotationPoint(startPoint1.newX, startPoint1.newY, 180, 400, 400);
    ctx.moveTo(startPoint1.newX, startPoint1.newY);
    ctx.lineTo(endPoint1.newX, endPoint1.newY);

    let startPoint2 = rotationPoint(100, 400, -25, 400, 400);
    let endPoint2 = rotationPoint(startPoint2.newX, startPoint2.newY, 180, 400, 400);
    ctx.moveTo(startPoint2.newX, startPoint2.newY);
    ctx.lineTo(endPoint2.newX, endPoint2.newY);
    ctx.stroke();

    ctx.fillStyle = 'red';
    drawTextBox(ctx, 'Khu nhà \nthấp tầng \nvà đất \ntrống', startPoint1.newX - 100, startPoint1.newY + 200, 20)
    drawTextBox(ctx, 'Khu nhà \nthấp tầng \nvà đất \ntrống', startPoint1.newX + 150, startPoint1.newY, 20)
    drawTextBox(ctx, 'Khu nhà \nthấp tầng \nvà đất \ntrống', endPoint2.newX - 50, endPoint2.newY + 150, 20)
    drawTextBox(ctx, 'ruộng', startPoint2.newX + 200, startPoint2.newY + 100, 20)
}