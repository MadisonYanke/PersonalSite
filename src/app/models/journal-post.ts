export class JournalPost {
    id!: number;
    title!: string;
    post!: string;
    date!: Date;

    public JournalPost(title:string, post:string, date:Date){
        this.title = title;
        this.post = post;
        this.date = date;
    }

    public deserialize(input: any){
        Object.assign(this, input);
        return this;
    }
}
