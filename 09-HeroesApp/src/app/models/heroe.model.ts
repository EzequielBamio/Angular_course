export class HeroeModel
{
    id?: string;
    name: string;
    power: string;
    alive: boolean;

    constructor()
    {
        this.name = '';
        this.power = '';
        this.alive = true;
    }
}