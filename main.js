objects = [];
video = "";

function setup(){
    canvas = createCanvas(420, 420);
    canvas.center();

    video = createCapture(420, 420);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    document.getElementById("input").value;
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}

function draw(){
        image(video, 0, 0, 420, 420);
        if(status != "")
        {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult);
       for(i=0; i < objects.length; i++) {
            for(i = 0; i < objects.length; i++){
                document.getElementById("status").innerHTML = "Status : Objects Detcted";
                
           
           if(objects == person){
               document.getElementById("baby").innerHTML = "Baby Detected";
               x.stop();
           }else{
               ducument.getElementById("baby").innerHTML = "Baby Not Detected";
               x.play();
           }
                
                
                percent = floor(objects[i].confidence * 100);
                text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y +15);
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
                if(objects = start){
                    video.stop();
                    objectDetector.detect(gotResult);
                }
            }
        }
    }
    
    function start()
    {
        objectDetector = ml5.objectDetector('cocossd', modelLoaded);
        document.getElementById("status").innerHTML = "Status : Detecting Objects";
    }
    
    function modelLoaded(){
        console.log("Model Loaded!");
        status = true;
        video.loop();
        video.speed(1);
        video.volume(0);
    }
    
    
    function gotResult(error, results){
        if (error) {
        console.log(error);
        }
        console.log(results);
        objects = results;
    }
    