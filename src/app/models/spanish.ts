import { Translation } from "../interfaces/Translation";

export class Spanish implements Translation{
    getNavbar(): {} {
        throw new Error("Method not implemented.");
    }
    getTodayCard(): string {
        throw new Error("Method not implemented.");
    }
    getHourlyCard(): string {
        throw new Error("Method not implemented.");
    }
    getWeatherDetails(): string {
        throw new Error("Method not implemented.");
    }
    getWeatherToday(){

        let wt ={
            title : "Tiempo en ",
            subtitle : "Sensación",
            max_min: "Máx/Min",
            humidity: "Humedad",
            pressure: "Presión",
            visibility: "Visibilidad",
            wind : "Wind",
            condensation: "Condensación",
            uvIndex: "Indice UV",
            moonPhase : "Fase Lunar"  
        }
        return wt;
    }


}
