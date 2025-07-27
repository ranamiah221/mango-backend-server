export enum Season{
    "SUMMER"="SUMMER",
    "WINTER"="WINTER",
}

export enum Unit{
    "KG"="KG",
    "TON"="TON"
}

export interface IMango{
    name:string;
    veriety:string;
    unit:Unit;
    price:number;
    stock:number;
    origin:string;
    season: Season;
} 