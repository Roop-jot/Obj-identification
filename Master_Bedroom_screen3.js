img = "";
status = "";
function preload()
{
    img = loadImage('Master_bedroom.jpg');
}
function setup()
{
    canvas = createCanvas(640, 390);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw()
{
    image(img, 0, 0, 640, 420);
    fill('#0080ff');
    text("Master Bedroom", 45, 75);
    noFill();
    stroke("#ff3300"); 
    rect(30, 60, 450, 350);
}
function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}