function speak(){
    var synth = window.speechSynthesis;
    camera = document.getElementById("camera");
    Webcam.attach(camera);
    speak_data = "taking your selfie in 5 seconds";
    
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);

    setTimeout(function(){
        img_id = "selfie1";
        take_snapshot();
        var utter_this = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utter_this);
        save();
    }, 5000);

    setTimeout(function(){
        img_id = "selfie2";
        take_snapshot();
        var utter_this = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utter_this);
        save();
    }, 10000);

    setTimeout(function(){
        img_id = "selfie3";
        take_snapshot();
        save();
    }, 15000);
}


Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});

function take_snapshot(){
    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(img_id == "selfie1"){
            document.getElementById("result1").innerHTML = "<img class = 'img' id = 'selfie1' src='" + data_uri +"'/>";
        }

        if(img_id == "selfie2"){
            document.getElementById("result2").innerHTML = "<img class = 'img' id = 'selfie2' src='" + data_uri +"'/>";
        }

        if(img_id == "selfie3"){
            document.getElementById("result3").innerHTML = "<img class = 'img' id = 'selfie3' src='" + data_uri +"'/>";
        }
    });
}

function save(){
    link = document.getElementById("link");
    image1 = document.getElementById("selfie1").src;
    link.href = image1;
    link.click();
    
    image2 = document.getElementById("selfie2").src;
    link.href = image2;
    link.click();

    image3 = document.getElementById("selfie3").src;
    link.href = image3;
    link.click();
}