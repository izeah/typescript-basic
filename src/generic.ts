let datas: Map<string, any> = new Map();

datas = datas.set("abis", "aklsdjfaltrue");
console.log(datas);

class List<T> {
    private data: T[];

    constructor() {
        this.data = [];
    }

    add(element: T): void {
        this.data.push(element);
    }

    addMultiple(...elements: T[]): void {
        this.data.push(...elements);
    }

    update(index: number, data: T): void {
        this.data.splice(index, 1, data);
    }

    get(): T[] {
        return this.data;
    }

    getOne(index: number): T {
        return this.data[index];
    }

    delete(index: number): void {
        this.data.splice(index, 1);
    }
}

let names: List<string> = new List();
names.addMultiple("faiz", "mohammad", "hafidza");
names.update(0, "kamilah");
names.delete(2);
console.log(names);
console.log(names.getOne(0));
