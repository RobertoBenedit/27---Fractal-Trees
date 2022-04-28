const canvas = document.querySelector("canvas");
const generateButton = document.getElementById(".generate-tree-button");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

function drawTree(startX, starty, len, angle, branchWidth, color1, color2) {
    ctx.beginPath();
    ctx.save();
    ctx.strokeStyle = color1;
    ctx.fillStyle = color2;
    ctx.lineWidth = branchWidth;
    ctx.translate(startX, starty);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -len);
    ctx.stroke();

    if (len < 10) {
        ctx.restore();
        return;
    }

    drawTree(0, -len, len * 0.76, angle + 13, branchWidth);
    drawTree(0, -len, len * 0.76, angle - 13, branchWidth);

    ctx.restore();
}

drawTree(canvas.width / 2, canvas.height - 80, 200, 0, 0.4, "white", "green");
