const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

// Draw a red rectangle
context.fillStyle = "pink";
context.fillRect(0, 0, 500, 500);

// Draw a blue line
context.beginPath();
context.moveTo(0, 0);
context.lineTo(500, 500);
context.strokeStyle = "green";
context.lineWidth = 5;
context.stroke();
context.closePath();

// Draw a blue line
context.beginPath();
context.moveTo(500, 0);
context.lineTo(0, 500);
context.strokeStyle = "green";
context.lineWidth = 5;
context.stroke();
context.closePath();

// Draw another blue rectangle (this will cover the first one)
context.fillStyle = 'blue';
context.fillRect(0, 0, 50, 50);

// Draw another blue rectangle (this will cover the first one)
context.fillStyle = 'blue';
context.fillRect(450, 450, 150, 100);

// Draw a purple triangle
context.beginPath();
context.moveTo(240, 50);
context.lineTo(138, 150);
context.lineTo(363, 150);
context.closePath();
context.fillStyle = 'red';
context.fill();

// Draw a purple circle
context.beginPath();
context.arc(250, 250, 150, 0, Math.PI * 2, false);
context.fillStyle = 'purple';
context.fill();
context.closePath();

// Draw a green circle
context.beginPath();
context.arc(250, 250, 50, 0, Math.PI * 2, false);
context.fillStyle = 'green';
context.fill();
context.closePath();


// Draw a purple triangle
context.beginPath();
context.moveTo(300, 250);
context.lineTo(250, 350);
context.lineTo(350, 350);
context.closePath();
context.fillStyle = 'purple';
context.fill();
