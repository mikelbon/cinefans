"use strict";
class NewFlix {
    Renew() {
        console.log("Renew NewFlix");
    }
    Login() {
        console.log("Login to NewFlix");
    }
    Cancel() {
        console.log("Cancel NewFlix");
    }
}
class CamaronPrime {
    Renew() {
        console.log("Renew CamaronPrime");
    }
    Login() {
        console.log("Login to CamaronPrime");
    }
    Cancel() {
        console.log("Cancel CamaronPrime");
    }
}
class OBH {
    Renew() {
        console.log("Renew OBH");
    }
    Login() {
        console.log("Login to OBH");
    }
    Cancel() {
        console.log("Cancel OBH");
    }
}
const button = document.getElementById("btn");
const service = document.getElementById("service");
const task = document.getElementById("task");
let selectedService;
service.addEventListener("change", (e) => {
    switch (service.value) {
        case '1':
            selectedService = new NewFlix();
            break;
        case '2':
            selectedService = new CamaronPrime();
            break;
        case '3':
            selectedService = new OBH();
            break;
    }
});
task.addEventListener("change", (e) => {
    switch (task.value) {
        case '1':
            selectedService.Login();
            break;
        case '2':
            selectedService.Renew();
            break;
        case '3':
            selectedService.Cancel();
            break;
    }
});
