
export class ListItem
{
    description : string;
    completed   : boolean;

    constructor( description: string )
    {
        this.description = description;
        this.completed   = false;
    }
}