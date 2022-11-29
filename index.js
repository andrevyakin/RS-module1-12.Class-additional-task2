class CarService {
    static DefaultWorkingHours = {
        from: '9:00',
        till: '20:00',
    }

    constructor(name, workingHours = CarService.DefaultWorkingHours) {
        this.name = name;
        this.workingHours = workingHours;
    }

    repairCar(carName) {
        if (!carName)
            return console.error("Вам необходимо указать название машины, чтобы ее отремонтировать");

        const currentTime = new Date().getHours();
        if (currentTime >= Number(this.workingHours.from.split(':')[0])
            && currentTime < Number(this.workingHours.till.split(':')[0]))
            return alert(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте пожалуйста.`)
        else return alert(`К сожалению, мы сейчас закрыты. Приходите завтра c ${this.workingHours.from} час. до ${this.workingHours.till} час.`)
    }
}

const carServiceDay = new CarService("Автосервис День");
alert(carServiceDay.name);
carServiceDay.repairCar("Бумер");


const carServiceNight = new CarService("Автосервис Ночь", {from: "21:00", till: "8:00"});
alert(carServiceNight.name);
carServiceNight.repairCar("Тарантас");
