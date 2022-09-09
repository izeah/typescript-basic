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

const fullName = (
    firstName: string,
    middleName?: string,
    lastName?: string
): string => {
    return firstName + middleName + lastName;
};

type NoArg = {
    _brand: "NoArg";
    (): void;
};

type OneArg = {
    _brand: "OneArg";
    (x: number): void;
};

// Correct typings
let noArg: NoArg = discriminator(() => {});
let oneArg: OneArg = discriminator((x: number) => {});

function discriminator<T extends (x: any) => any>(myFunc: T) {
    let discriminatedFunc;
    if (myFunc.length === 0) {
        discriminatedFunc = {
            _brand: "NoArg",
            myFunc,
        };
    } else {
        discriminatedFunc = {
            _brand: "OneArg",
            myFunc,
        };
    }
    return discriminatedFunc as unknown as T extends () => any ? NoArg : OneArg;
}
