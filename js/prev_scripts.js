function switchLED(checkbox) {
    var state = checkbox.checked ? 'on' : 'off';
    var endpoint = checkbox.id;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://127.0.0.1:5500/" + endpoint + "/" + state, true);
    xhttp.send();
}

document.getElementById(" alarmForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var alarmTime = document.getElementById("alarmTime").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:5500/set-alarm", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("alarmTime=" + encodeURIComponent(alarmTime));
    document.getElementById("status").innerText = "Alarme programmée pour " + alarmTime;
});

function checkSensorStatus() {
    checkRFIDStatus();
    checkPresenceStatus();
    checkSmokeStatus();
}


function checkRFIDStatus() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const button = document.getElementById('.buttonc');
                if (this.responseText == "RFID triggered") {
                    button.style.backgroundColor = 'rgb(17, 255, 17)'; // Green color
                    button.style.boxShadow = '0px 0px 1px rgb(17, 255, 17) inset, ' +
                                            '0px 0px 2px rgb(17, 255, 17) inset, ' +
                                            '0px 0px 10px rgb(17, 255, 17) inset, ' +
                                            '0px 0px 40px rgb(17, 255, 17), ' +
                                            '0px 0px 100px rgb(17, 255, 17), ' +
                                            '0px 0px 5px rgb(17, 255, 17)';
                } else {
                    button.style.backgroundColor = 'rgb(255, 17, 17)'; // Red color
                    button.style.boxShadow = '0px 0px 1px rgb(255, 17, 17) inset, ' +
                                            '0px 0px 2px rgb(255, 17, 17) inset, ' +
                                            '0px 0px 10px rgb(255, 17, 17) inset, ' +
                                            '0px 0px 40px rgb(255, 17, 17), ' +
                                            '0px 0px 100px rgb(255, 17, 17), ' +
                                            '0px 0px 5px rgb(255, 17, 17)';
                }
        }
    };
    xhttp.open("GET", "http://127.0.0.1:5500/check-rfid", true);
    xhttp.send();
}

function checkPresenceStatus() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.readyState == 4 && this.status == 200) {
            if(this.responseText == "Presence detected"){

            }
            if(this.responseText == "No presence detected"){
                
            }
        }
        }
    };
    xhttp.open("GET", "http://127.0.0.1:5500/check-presence", true);
    xhttp.send();
}

function checkSmokeStatus() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.readyState == 4 && this.status == 200) {
                if(this.responseText == "Smoke detected"){

                }
                if(this.responseText == "No smoke detected"){
                    
                }
            }
        }
    };
    xhttp.open("GET", "http://127.0.0.1:5500/check-smoke", true);
    xhttp.send();
}

// Call checkSensorStatus periodically to update the status
setInterval(checkSensorStatus, 500);