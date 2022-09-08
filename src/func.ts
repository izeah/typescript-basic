function multiply(a: number, b: number): number {
    return a * b;
}

function printLogs(...a: any[]): void {
    console.log(...a);
}

type Age = Number;

let age: Age;
age = 40;
printLogs(age.toString());

type HitungFn = (val1: number, val2: number) => number;

const Add: HitungFn = (val1: number, val2: number): number => {
    return val1 + val2;
};
console.log(Add(2, 3));
