import { ListItem } from './list-item.model';

export class List{

    private static _id:number = 0;
    public id:number;
    public title:string;
    public createdAt:Date;
    public finishedAt:Date;
    public completed:boolean;
    public items:ListItem[];

    constructor(title:string){
        this.id = List._id++;
        this.title = title;
        this.createdAt = new Date();
        this.completed = false;
        this.items = [];
    }

}