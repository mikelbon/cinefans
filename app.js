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
var ServiceType;
(function (ServiceType) {
    ServiceType[ServiceType["Renew"] = 0] = "Renew";
    ServiceType[ServiceType["Login"] = 1] = "Login";
    ServiceType[ServiceType["Cancel"] = 2] = "Cancel";
})(ServiceType || (ServiceType = {}));
const button = document.getElementById("btn");
const service = document.getElementById("service");
const task = document.getElementById("task");
let selectedService;
let currentOperation;
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
            currentOperation = ServiceType.Renew;
            break;
        case '2':
            currentOperation = ServiceType.Login;
            break;
        case '3':
            currentOperation = ServiceType.Cancel;
            break;
    }
});
button.addEventListener("click", (e) => {
    switch (currentOperation) {
        case ServiceType.Renew:
            selectedService.Renew();
            break;
        case ServiceType.Login:
            selectedService.Login();
            break;
        case ServiceType.Cancel:
            selectedService.Cancel();
            break;
    }
});
