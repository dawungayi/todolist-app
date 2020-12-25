export class Todo {
    // fields
    // for optional fields, we write id?: number
    id: number;
    title: string;
    completed: boolean;

    constructor(id: number, title: string, completed: boolean) {
        this.id = id;
        this.title = title;
        this.completed = completed; 
    }
}