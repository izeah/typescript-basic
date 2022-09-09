interface CRUD {
    create(data: any): void | any;
    find(): any;
    findByID(id: number): any;
    update(data: any): void | any;
    delete(data: any): void | any;
}

class Database<Type> implements CRUD {
    contents: Type;

    constructor(value: Type) {
        this.contents = value;
    }

    public create(data: any): any {
        console.log("successfully create data");
        console.log(data);

        return data;
    }

    public update(data: any) {
        this.contents = data;
    }

    public find() {}
    public findByID(id: number) {}
    public delete(data: any) {}
}

let db = new Database("hahaha");
console.log(db.contents);

let res = db.create("testing");
console.log(res);

res = db.update(123);
console.log(db.contents);
