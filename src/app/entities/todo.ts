export class Todo {
    public id: number;
    public title: string;
    public description: string;
    public createdAt: string;

    constructor(id: number, title: string, description: string, createdAt: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
      }
}
