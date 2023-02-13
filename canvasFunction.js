const globalCenterX = 500;
const globalCenterY = 500;
/**
 * Quy định chung
 * điểm nào có x nhỏ hơn là start, có x lớn hơn là end
 * 
 */


/**
 * Tính độ dài đường thẳng
 * @param {*} xStart : hoành độ điểm bắt đầu
 * @param {*} yStart : tung độ điểm bắt đầu
 * @param {*} xEnd : hoành độ điểm kết thúc
 * @param {*} yEnd : tung độ điểm kết thúc
 * @returns : độ dài của đường thẳng
 */
export function distance(xStart, yStart, xEnd, yEnd) {
    return Math.abs(Math.sqrt((xEnd - xStart) ** 2 + (yEnd - yStart) ** 2));
}

/**
 * Trả về toạ độ của một điểm sau phép quay
 * @param {*} xStart : hoành độ điểm ban đầu
 * @param {*} yStart : tung độ điểm ban đầu
 * @param {*} rotateDegree : góc quay theo đơn vị độ
 * @param {*} xCenter : hoành độ tâm quay
 * @param {*} yCenter : tung độ tâm quay
 * @returns 
 */
export function rotationPoint(xStart, yStart, rotateDegree, xCenter, yCenter) {
    rotateDegree = rotateDegree* Math.PI / 180
    let newX = xCenter + (xStart - xCenter) * Math.cos(rotateDegree) - (yStart - yCenter) * Math.sin(rotateDegree);
    let newY = yCenter + (xStart - xCenter) * Math.sin(rotateDegree) + (yStart - yCenter) * Math.cos(rotateDegree);
    return {newX, newY}; 
}

/**
 * Trả về cos của góc giữa hai vector
 * @param {*} x1 : hoành độ điểm bắt đầu vector1
 * @param {*} y1 : tung độ điểm bắt đầu vector1
 * @param {*} x2 : hoành độ điểm kết thúc vector1
 * @param {*} y2 : tung độ điểm kết thúc vector1
 * @param {*} x3 : hoành độ điểm bắt đầu vector2
 * @param {*} y3 : tung độ điểm bắt đầu vector2
 * @param {*} x4 : hoành độ điểm kết thúc vector2
 * @param {*} y4 : tung độ điểm kết thúc vector2
 * @returns 
 */
export function caculateAngle(x1, y1, x2, y2, x3, y3, x4, y4) {
    const cosAngle = ((x2 - x1)* (x4 - x3) + (y2 - y1) * (y4 - y3)) / (Math.sqrt((x2 - x1)**2 + (y2 - y1)**2) * Math.sqrt((x4 - x3)**2 + (y4 - y3)**2));
    return cosAngle;
}

/**
 * vẽ đường thẳng với hai điểm bắt đầu và kết thúc
 * @param {*} ctx : context canvas
 * @param {number} xStart: hoành độ điểm bắt đầu 
 * @param {number} yStart : tung độ điểm bắt đầu
 * @param {number} xEnd : hoành độ điểm kết thúc
 * @param {number} yEnd : tung độ điểm kết thúc
 * @param {boolean} label : đường thẳng có nhãn hay không
 */
export function drawLine(ctx, xStart, yStart, xEnd, yEnd, label=false) {
    ctx.font = "20px Times New Roman"
    ctx.beginPath();
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xEnd, yEnd);

    if(label) {
        const headlen = 6;
        let dx = xEnd - xStart;
        let dy = yEnd - yStart;
        let angle =  Math.atan2(dy, dx);

        ctx.setLineDash([5, 2]);
        ctx.fillStyle = 'red'
        ctx.fillText(distance(xStart, yStart, xEnd, yEnd).toString(), (xEnd + xStart) / 2 + 10, (yStart + yEnd) / 2 - 10);
        
         // draw arrow for line
        ctx.lineTo(xEnd - headlen * Math.cos(angle - Math.PI / 6), yEnd - headlen * Math.sin(angle - Math.PI / 6));
        ctx.moveTo(xEnd, yEnd);
        ctx.lineTo(xEnd - headlen * Math.cos(angle + Math.PI / 6), yEnd - headlen * Math.sin(angle + Math.PI / 6));
    
        ctx.moveTo(xStart, yStart);
        if (caculateAngle(xStart, yStart, xEnd, yEnd, 0, 0, 0, 1) > 0) {
            ctx.lineTo(xStart - headlen * Math.cos(angle - Math.PI / 6), yStart + headlen * Math.sin(angle + Math.PI / 6));
            ctx.moveTo(xStart, yStart);
            ctx.lineTo(xStart - headlen * Math.cos(angle + Math.PI / 6), yStart + headlen * Math.sin(angle + Math.PI / 6));

        } else if(caculateAngle(xStart, yStart, xEnd, yEnd, 0, 0, 0, 1) < 0) {
            angle =  Math.PI - Math.atan2(dy, dx);
            ctx.lineTo(xStart - headlen * Math.cos(angle - Math.PI / 6), yStart + headlen * Math.sin(angle + Math.PI / 6));
            ctx.moveTo(xStart, yStart);
            ctx.lineTo(xStart - headlen * Math.cos(angle + Math.PI / 6), yStart + headlen * Math.sin(angle + Math.PI / 6));
        } else {
            angle =  Math.PI - Math.atan2(dy, dx);
            ctx.lineTo(xStart - headlen * Math.cos(angle - Math.PI / 6), yStart - headlen * Math.sin(angle + Math.PI / 6));
            ctx.moveTo(xStart, yStart);
            ctx.lineTo(xStart - headlen * Math.cos(angle + Math.PI / 6), yStart + headlen * Math.sin(angle + Math.PI / 6));
        }
    }

    ctx.stroke();
    ctx.setLineDash([0,0])
}

/**
 * Vẽ hình chữ nhật
 * @param {*} ctx 
 * @param {*} xTopLeft, yTopLeft: toạ độ trên cùng bên trái
 * @param {*} width : chiều rộng
 * @param {*} height : chiều cao
 * @param {*} rotateDegress : góc quay
 * @param {*} xCenter, yCenter: toạ độ tâm quay
 * @param {boolean} border : có viền hay ko
 * @param {boolean} sizeLabel : label độ dài của từng cạnh
 * @returns 
 */
export function drawRect(ctx, xTopLeft, yTopLeft, width, height, rotateDegress=0, xCenter=0, yCenter=0, border=true, sizeLabel=false) {
    /**
     * xTopLeft, yTopLeft: toạ độ trên cùng bên trái
     * width, height: kích thước của hình chữ nhật
     * rotateDegress: góc quay
     * xCenter, yCenter: toạ độ của tâm quay
     * border: draw rectangle with border
     * sizeLabe: draw label for rectangle
     */
    let newPoint = rotationPoint(xTopLeft + width, yTopLeft + height, rotateDegress, xCenter, yCenter);
    ctx.save()
    if(rotateDegress) {
        ctx.translate(xCenter, yCenter);
        ctx.rotate(rotateDegress * Math.PI / 180);
        ctx.translate(-xCenter, -yCenter)
    }
    if(border) {
        ctx.strokeRect(xTopLeft, yTopLeft, width, height);
    }
    else {
        ctx.fillStyle = 'rgba(195, 201, 200, 0.5)';
        ctx.fillRect(xTopLeft, yTopLeft, width, height);
    }

    if(sizeLabel) {
        drawLine(ctx, xTopLeft, yTopLeft - 10, xTopLeft + width, yTopLeft - 10, true);
        if (xTopLeft < globalCenterX) {
            drawLine(ctx, xTopLeft - 10, yTopLeft, xTopLeft - 10, yTopLeft + height, true)
        } 
        else {
            drawLine(ctx, xTopLeft + width + 10, yTopLeft, xTopLeft + width + 10, yTopLeft + height, true)
        }
    }
    ctx.restore()
    return newPoint;
}
