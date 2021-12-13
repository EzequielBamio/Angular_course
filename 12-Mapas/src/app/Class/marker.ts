export class Marker{

    public lat: number;
    public lng: number;

    public title: string = 'No title';
    public description: string = 'No description'


    constructor( lat: number, lng: number)
    {
        this.lat = lat;
        this.lng = lng;
    }

}