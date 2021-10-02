const Timer = document.getElementById("displayTimer");
var Runningtime = false;
let startTimeout;


var hr = 0;
var mint = 0;
var sec = 0;
var milsec = 0;



function startTimer() {

    //TO START THE STOP WATCH WORK IT MUST BE STAT=true
    if (Runningtime == false) {
        Runningtime = true;


    }

    //THEN HERE WE CALL THE FUNCTION TO REPATE COUNT TIMER
    startTimeout = setInterval(timerCycle, 33);

}


//THAT FUNCTION CALL WHEN PRESS BUTTON STOP
function stopTimer() {

    //HERE CHECKING THE STATE OF TIMER IS RUNN TO STOP TIMER 
    if (Runningtime == true) {

        //CLEAR THE COUNTING TO RESET THE TIMER TO ZERO
        clearInterval(startTimeout);
        startTimeout = null;

        hr = 0;
        sec = 0;
        mint = 0;
        milsec = 0;

        Timer.innerHTML = "00:00:00.000";

    } else
        alert("colock doesnot work");
}



//THIS FUNCTION CALL WHEN PRESS BUTTON START 
function timerCycle() {

    //HERE CONVERT THE VALUE OF TIMER TO integar FOR CONDITION PUT ZERO BEFOR TIMER(hr,mint,sec) WORK 
    milsec = parseInt(milsec);
    sec = parseInt(sec);
    mint = parseInt(mint);
    hr = parseInt(hr);


    milsec += 1;
    if (milsec < 10) {
        milsec = '0' + '0' + milsec;
    } else
    if (milsec < 100)

        milsec = '0' + milsec;


    if (milsec == 999) {
        milsec = 0;
        sec += 1;
    }


    if (sec < 10) {
        sec = '0' + sec;
    }

    if (sec === 60) {
        mint += 1
        sec = 0;
    }
    if (mint < 10) {
        mint = '0' + mint;
    }

    if (mint === 60) {
        hr += 1;
        mint = 0;
        sec = 0;
    }
    if (hr < 10) {
        hr = '0' + hr;
    }

    Timer.innerHTML = hr + ':' + mint + ':' + sec + '.' + milsec;


}

function stop() {
    if (startTimeout) {
        clearInterval(startTimeout);
        startTimeout = 0;
    }
}

function PauseTimer() {
    if (Runningtime) {
        Runningtime = false;
        stop();
    }

}