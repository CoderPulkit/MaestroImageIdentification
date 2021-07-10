function setup(){
    canvas=createCanvas(350,230);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/l87XB6hbI/model.json',modelLoaded)
}

function modelLoaded(){
   console.log("Model Loaded");  
}

function draw(){
 image(video,0,0,350,230);
 classifier.classify(video,gotResult);
}

function gotResult(error,results){
    if (error){
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_object").innerHTML=results[0].label;
        document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(4);
    }
}