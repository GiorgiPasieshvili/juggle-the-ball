
window.onload = function() {

    var ball;
    var BALL_WIDTH = 70;
    var BALL_HEIGHT = 70;
    var ballL;
    var ballR;
    
    var left;
    var right;
    var up;
    
    var DELAY;
    var score;
    var bestScore;
    var counter = 0;
    var bestCounter = 0;
    var dy;
    var alive = false;
    var txt;
    
    function start(){
        background();
        setScore();
        addBall();
        
        mouseClickMethod(ballUp);
        
        println("Click ball to start juggle ");
    }
    
    
    
    function ballUp(e){
        var elem = getElementAt(e.getX(), e.getY());
    
        if(counter => 0 && counter < 10){
            left = Randomizer.nextInt(-30,-70);
            right = Randomizer.nextInt(30,70);
            up = Randomizer.nextInt(-160,-180);
            DELAY = 18;
            dy = 6;
    
        }
        if(counter > 10 && counter < 20){
            left = Randomizer.nextInt(-50,-90);
            right = Randomizer.nextInt(50,90);
            up = Randomizer.nextInt(-160,-180);
            DELAY = 15; 
            stopTimer(ballDown);
            setTimer(ballDown, DELAY);
            dy = 6;
    
        }
        if(counter > 20 && counter < 30){
            left = Randomizer.nextInt(-70,-110);
            right = Randomizer.nextInt(70,110);
            up = Randomizer.nextInt(-160,-180);
            DELAY = 10; 
            stopTimer(ballDown);
            setTimer(ballDown, DELAY);
            dy = 6;
        }
        if(counter > 30 && counter < 40){
            DELAY = 10; 
            stopTimer(ballDown);
            setTimer(ballDown, DELAY);
            dy = 7;
        }
        if(counter > 40 && counter < 50){
            DELAY = 10; 
            stopTimer(ballDown);
            setTimer(ballDown, DELAY);
            dy = 8;
        }
    
            
    
        if(elem == getElementAt(ballL.getX(), ballL.getY())){
                ball.move(right, up);
                ballL.move(right, up);
                ballR.move(right, up);
                counter++;
                if(counter > bestCounter){
                    bestCounter++;    
                }
                setScore();
                
            if(alive == false){
            ball.setPosition(getWidth()/2-35, getHeight()/2-80);
            ballL.setPosition(ball.getX()+20, ball.getY()+40);
            ballR.setPosition(ball.getX()+50, ball.getY()+40);
            setTimer(ballDown, DELAY);
            alive = true;
            }
        }else if(elem == getElementAt(ballR.getX(), ballR.getY())){
                ball.move(left, up);
                ballL.move(left, up);
                ballR.move(left, up);
                counter++;
                if(counter > bestCounter){
                    bestCounter++;    
                }
                setScore();
                
            if(alive == false){
            ball.setPosition(getWidth()/2-35, getHeight()/2-80);
            ballL.setPosition(ball.getX()+20, ball.getY()+40);
            ballR.setPosition(ball.getX()+50, ball.getY()+40);
            setTimer(ballDown, DELAY);
            alive = true;
            }
        }else if(elem == getElementAt(ball.getX(), ball.getY())){
                ball.move(0, up);
                ballL.move(0, up);
                ballR.move(0, up);
                counter++;
                if(counter > bestCounter){
                    bestCounter++;    
                }
                setScore();
                
            if(alive == false){
            ball.setPosition(getWidth()/2-35, getHeight()/2-80);
            ballL.setPosition(ball.getX()+20, ball.getY()+40);
            ballR.setPosition(ball.getX()+50, ball.getY()+40);
            setTimer(ballDown, DELAY);
            alive = true;
            }
        }
    
    }
    function ballDown(){
        
        ball.move(0, dy);
        ballL.move(0, dy);
        ballR.move(0, dy);
        if(ball.getY() + BALL_HEIGHT > getHeight()){
          stopTimer(ballDown);
          alive = false;
          
        counter = 0;
        }
        var x1 = Randomizer.nextInt(70, 120);
        var x2 = Randomizer.nextInt(getWidth()-170, getWidth()-120);
        
        if(ballL.getX() < 30){
            ball.setPosition(x1, ball.getY());
            ballL.setPosition(ball.getX()+20, ball.getY()+40);
            ballR.setPosition(ball.getX()+50, ball.getY()+40);
        }else if(ballR.getX() > getWidth()-30){
            ball.setPosition(x2, ball.getY());
            ballL.setPosition(ball.getX()+20, ball.getY()+40);
            ballR.setPosition(ball.getX()+50, ball.getY()+40);
        }
    }
    
    function setScore(){
        remove(score);
        score = new Text("Score: " + counter);
        score.setPosition(25, 50);
        add(score);
        
        remove(bestScore);
        bestScore = new Text("Best: " + bestCounter);
        bestScore.setPosition(280, 50);
        add(bestScore);
    }
    
    function background(){
        var copter = new WebImage("images/bg.jpg");
        copter.setSize(getWidth(), getHeight());
        copter.setPosition(0, 0);
        add(copter);
    }
    
    function addBall(){
        ball = new WebImage("images/soccerBall.png");
        ball.setSize(BALL_WIDTH, BALL_HEIGHT);
        ball.setPosition(getWidth()/2-35, getHeight()/2);
        add(ball);
        
        var color = "#ffffff00";   
       
        ballL = new Circle(25);
        ballL.setColor(color);
        ballL.setPosition(ball.getX()+20, ball.getY()+40);
        add(ballL);
        
        ballR = new Circle(25);
        ballR.setColor(color);
        ballR.setPosition(ball.getX()+50, ball.getY()+40);
        add(ballR);
    }
    
            start();
        
    };