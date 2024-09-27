

    // Step 1: Select the canvas element by its ID
    const canvas = document.getElementById('basicCanvas');
    
    // Step 2: Get the 2D drawing context that lets us draw on canvas
    const context = canvas.getContext('2d');
    
    // Drawing a filled rectangle
    context.fillStyle = 'blue';   // Set the fill color to blue
    context.fillRect(150, 150, 100, 100);  // Draw a rectangle at (50, 50) with width 150 and height 100(x,y,width,height)

    // // Drawing a stroked (outlined) rectangle
    context.strokeStyle = 'red';  // Set the stroke color to red
    context.lineWidth = 5;        // Set the line width for the stroke
    context.strokeRect(200, 400, 200, 200);  // Draw an outlined rectangle

    // // Drawing a line
    context.beginPath();  // Start a new path (necessary for lines and shapes)
    context.moveTo(0, 0);  // Set the starting point of the line at (50, 200)
    context.lineTo(500, 500);  // Draw a line to (400, 200)
    context.strokeStyle = 'green';  // Set the stroke color to green
    context.lineWidth = 3;  // Set the line width
    context.stroke();  // Render the line
    
    // // Drawing a circle (using arc method)
    // context.beginPath();  // Start a new path
    // // context.moveTo(200,350)
    // context.arc(200, 350, 50, Math.PI,2*Math.PI);  // Draw a circle with center (200, 350) and radius 50
    // context.fillStyle = 'purple';  // Set the fill color to purple
    // context.fill();  // Fill the circle with the chosen color
  