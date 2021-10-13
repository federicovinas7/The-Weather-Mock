export interface WeatherResponse{

    id: number,
    name : string,
    code : number,
    dt : number,
    hora :string;
    weather :Weather [],
    main : {
        temp : number,
        feels_like : number,
        temp_min : number,
        temp_max : number,
        pressure : number,
        humidity : number
    },
    visibility :number,
    wind : {
        speed : number,
        deg : number,
    }
    coord: {
        lon: number,
        lat: number
      }

}

export interface Weather{

    id : number,
    main : string,
    description : string,

}


