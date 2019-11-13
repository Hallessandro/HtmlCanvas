window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    canvas.height = 480; 
    canvas.width = 640; 

    let painting = false; 

    let img = document.createElement("img");
    img.src = "./mononokeHime.jpg";
    img.addEventListener("load", () => {
        ctx.drawImage(img, 10, 10, 640, 480);
    });

    function startPosition(e){
        painting = true; 
        draw(e);
    }

    function finishedPosition(){
        painting = false; 
        ctx.beginPath();
    }

    function draw(e){
        if(!painting) return;

        ctx.lineWidth = 10;
        ctx.lineCap = "round"; 
        ctx.strokeStyle = "red";

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
});