export class Todo {
    // fields
    // for optional fields, we write id?: number
    id: number;
    title: string;
    isComplete: boolean;

    constructor(id: number, title: string, isComplete: boolean) {
        this.id = id;
        this.title = title;
        this.isComplete = isComplete; 
    }
}