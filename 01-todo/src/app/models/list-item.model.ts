export class ListItem{
    
    private id;
    private description:string;
    private completed:boolean;

    constructor(description:string){
        this.description = description;
        this.completed = false;
    }

}