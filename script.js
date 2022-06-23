 inputTime = {
     hours: 0,
     minutes: 0,
     seconds: 0,
     intervalID: 0,
 }


timeInserted = () => {
    inputTime[event.target.name] = event.target.value
}

countDown = () => {  
   
    if( inputTime.seconds == 0){
        if(inputTime.minutes > 0){
           inputTime.minutes--;
           inputTime.seconds = 60;
        }else if( inputTime.hours > 0){
           inputTime.hours--;
           inputTime.minutes = 59;
           inputTime.seconds = 60;
        }else{
            alert("Time is up")
            location.reload();
            clearInterval(inputTime.intervalID)
            return
        }
    }
    inputTime.seconds--;   
}

insertTime = () => {
  countDown()
  let times = document.getElementById("time");
  times.innerHTML = `<p>${inputTime.hours}</p> <strong>:</strong> <p>${inputTime.minutes}</p> <strong>:</strong>
                          <p>${inputTime.seconds}</p>`;
};

onStart = () => {
    let times = document.getElementById("time")
    let intervalID = setInterval(insertTime, 1000)
    inputTime.intervalID = intervalID;
    document.getElementById("start").classList.add("invisible")
    document.getElementById("reset").classList.remove("invisible");
    document.getElementById("pause").classList.remove("invisible");
    document.getElementById("inputs").classList.add("invisible")
    times.innerHTML = `<p>${inputTime.hours}</p> <strong>:</strong> <p>${inputTime.minutes}</p> <strong>:</strong>
                          <p>${inputTime.seconds}</p>`;
}


onReset = () => {
    inputTime.hours = 0;
    inputTime.minutes = 0;
    inputTime.seconds = 0;
    location.reload()
     
}
onPause = () => {
   clearInterval(inputTime.intervalID);
    document.getElementById("start").classList.remove("invisible");
    document.getElementById("pause").classList.add("invisible");
};