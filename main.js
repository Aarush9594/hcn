function start() {
  navigator.mediaDevices.getUserMedia({audio:true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ZR86teOv8/model.json',modelready);
}

function modelready() {
    console.log("Teachable Machine model is loaded")
    classifier.classify(gotresult)
}

function gotresult(error,result) {
    if (error) {
        console.error(error)
    } 
    else {
        console.log(result)
        document.getElementById("result_label").innerHTML = "I can hear - " + result[0].label
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (result[0].confidence*100).toFixed(2);
        r=Math.floor(Math.random()*255)+1
        console.log(r)
        g=Math.floor(Math.random()*255)+1
        console.log(g)
        b=Math.floor(Math.random()*255)+1
        console.log(b)
        document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")"
        document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")"
        img1 = document.getElementById("alien1")
        img2 = document.getElementById("alien2")
        img3 = document.getElementById("alien3")
        img4 = document.getElementById("alien4")
        if (result[0].label=="Background Noise") {
            img1.src="aliens-01.gif"
            img2.src="aliens-02.png"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png"
        } 
        else if (result[0].label=="Clap")  {
            img1.src="aliens-01.png"
            img2.src="aliens-02.gif"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png"
        }
        else if (result[0].label=="Bell")  {
            img1.src="aliens-01.png"
            img2.src="aliens-02.png"
            img3.src="aliens-03.gif"
            img4.src="aliens-04.png"
        }
        else if (result[0].label=="Voice")  {
            img1.src="aliens-01.png"
            img2.src="aliens-02.png"
            img3.src="aliens-03.png"
            img4.src="aliens-04.gif"
        }
    }   
}