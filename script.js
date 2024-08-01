function controller(event){
    if(event.key == "Enter"){
        if(runWorker==0){
             run();
             runAudio.play();
            flamesLocations.forEach(flames);
        }
        if(backGroundMoveId==0){
             backGroundMove();
        }
       if(scoreWorker==0){
              ScoreUpdate();
        }

    }

    if(event.key == " "){
        if(jumpWorker==0){

            if(runWorker!=0){
                clearInterval(runWorker);
               
                 jump();
                 runAudio.pause();
                 jumpAudio.play();
                 runAudio.play();
                 
            }
        }
    }

    
}



var runImage =  1; 
var runWorker = 0;
var JumpImage = 1;
var jumpWorker = 0;
var Boy_Top_Margine = 395;
var runAudio = new Audio("run.mp3");
runAudio.loop = true;
var deadAudio = new Audio("dead.mp3");
var jumpAudio = new Audio("jump.mp3");
var backGroundMoveId = 0;
var backgroundLocation = 0;
var score_updating = 0;
var newScore = 0;
var currentScore = 0;
var scoreWorker = 0;
var deadWorkerNumber =0;
var deadImageNumber=1;





function run(){
   
  runWorker = setInterval(
    ()=>{
        runImage =  1 + runImage;


        if(runImage == 9){
            runImage = 1;
        }

        document.getElementById("boy").src ="run"+ runImage +".png";
    
    },150
          
);

}



function jump(){

     jumpWorker = setInterval(

      ()=>{
        JumpImage = JumpImage + 1;

        if(JumpImage<8){
            Boy_Top_Margine = Boy_Top_Margine - 20

            document.getElementById("boy").style.marginTop = Boy_Top_Margine + "px"
        }

     
        if(JumpImage>7){
            Boy_Top_Margine = Boy_Top_Margine + 20

            document.getElementById("boy").style.marginTop = Boy_Top_Margine + "px"
            
        }


        if(JumpImage == 13){
            JumpImage = 1;

            clearInterval(jumpWorker);
            run();
           
            jumpWorker= 0;
        }
    
        document.getElementById("boy").src ="jump"+ JumpImage +".png";
      },100

     );


    

}

function backGroundMove(){

    backGroundMoveId = setInterval(

        ()=>{

           

            backgroundLocation = backgroundLocation - 25;
        
            document.getElementById("background").style.backgroundPositionX = backgroundLocation + "px";
                
        },200

    );

}

function ScoreUpdate(){

    scoreWorker = setInterval(
    
        ()=>{
            
    
        score_updating = score_updating + 1;

        document.getElementById("score").innerHTML = score_updating;

        if(score_updating== 500){
            
        }

         //score_updating = currentScore
        
        },100
    );

}

function dead(){

    deadWorkerNumber = setInterval(()=>{
        
   
    deadImageNumber = deadImageNumber +1;

    if(deadImageNumber ==11){
        deadImageNumber=1;
        clearInterval(deadWorkerNumber);
        alert("game Over")
        
        
        window.location.reload();
    }
    document.getElementById("boy").src ="dead"+ deadImageNumber +".png";

},100)
}


var flameWorkerNumber = 0;
var flamesLocations = [500, 1000, 1500, 2000,2500,3000,3500,4000,4500,5000,5500];

function flames(x){

    var i = document.createElement("img")
    i.src = "flame.gif";
    i.className="flame"
    i.style.marginLeft= x + "px";
    document.getElementById("background").appendChild(i);

    flameWorkerNumber = setInterval(() =>{
        if(x == 150){
        if(jumpWorker == 0){

            clearInterval(runWorker);
            runAudio.pause();
            clearInterval(ScoreUpdate);
            clearInterval(backGroundMove);
            dead();
            deadAudio.play();
        }
    }

    x = x-10;
    i.style.marginLeft = x+"px"

    }, 100);
   
}

var times = 0


function hello(){
    
    if(times==0){
    window.location.href="hello.html"
    }
    if(times>=1){
        window.location.href="index.html"
        
    }
    alert(times)
    times = times + 1
    alert(times)
}

function loadWindow(){
    document.getElementById("btn").reload="index.html"

    window.location.reload="index.html"
}
