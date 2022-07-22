sus= "";
lol= "";
lwx= "";
lwy= "";
rwx= "";
rwy= "";
lwscore= 0;
song= "";
rwscore= 0;
stat= "";

function preload() {
    sus= loadSound("Amogus.mp3");
    lol= loadSound("buntystay.mp3");
}

function setup() {
    video= createCapture(VIDEO);
    posenet= ml5.poseNet(video, modlod);
    posenet.on("pose", gotpose);
}


function draw() {
    image(video, 0, 0, 600, 500);
    fill('#bad5ff');
    stroke('#3383ff');
    stat.isPlaying();
    if(rwscore > 0.2) {
        circle(rwx, rwy, 30);
        song.stop();
        if(stat == "false") {
            lol.play();
            document.getElementById("songname").innerHTML= "Song Name: Bunty Stay";
        }
    }
    song.isPlaying()
    if(lwscore > 0.2) {
        circle(lwx, lwy, 30);
        stat.stop();
        if(song == "false") {
            sus.play();
            document.getElementById("songname").innerHTML= "Song Name: Among Us";
        }
    }
}

function modlod() {
    console.log("posenet is ready!!!! (^~^)/")
}

function gotpose(results) {
    if(results.length > 0) {
        lwx= results[0].pose.leftWrist.x;
        lwy= results[0].pose.leftWrist.y;
        console.log("left wrist x= " + lwx + "left wrist y= " + lwy);
        rwx= results[0].pose.rightWrist.x;
        rwy= results[0].pose.rightWrist.y;
        console.log("right wrist x= " + rwx + "right wrist y= " + rwy);
        lwscore= results[0].pose.keypoints[9].score;
        rwscore= results[0].pose.keypoints[10].score;
    }
}