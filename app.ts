interface Service {
    Renew(): void;
    Login(): void;
    Cancel(): void;
}

class NewFlix implements Service {
    Renew(): void {
        console.log("Renew NewFlix");
    }
    Login(): void {
        console.log("Login to NewFlix");
    }
    Cancel(): void {
        console.log("Cancel NewFlix");
    }
}

class CamaronPrime implements Service {
    Renew(): void {
        console.log("Renew CamaronPrime");
    }
    Login(): void {
        console.log("Login to CamaronPrime");
    }
    Cancel(): void {
        console.log("Cancel CamaronPrime");
    }
}

class OBH implements Service {
    Renew(): void {
        console.log("Renew OBH");
    }
    Login(): void {
        console.log("Login to OBH");
    }
    Cancel(): void {
        console.log("Cancel OBH");
    }
}

enum ServiceType{
    Renew,
    Login,
    Cancel
}

const button = document.getElementById("btn")!;
const service = <HTMLSelectElement>document.getElementById("service");
const task = <HTMLSelectElement>document.getElementById("task");
let selectedService: Service;
let currentOperation: ServiceType;

service.addEventListener("change", (e) => {
    switch (service.value) {
        case '1': selectedService = new NewFlix(); break;
        case '2': selectedService = new CamaronPrime(); break;
        case '3': selectedService = new OBH(); break;
    }
});

task.addEventListener("change", (e) => {
    switch (task.value) {
        case '1': currentOperation = ServiceType.Renew; break;
        case '2': currentOperation = ServiceType.Login; break;
        case '3': currentOperation = ServiceType.Cancel; break;
    }
});

button.addEventListener("click", (e) => {
    switch (currentOperation) {
        case ServiceType.Renew: selectedService.Renew(); break;
        case ServiceType.Login: selectedService.Login(); break;
        case ServiceType.Cancel: selectedService.Cancel(); break;
    }
}); 