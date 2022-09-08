// string
let nama = "izeah";
// number
let umur: number = 25;
// boolean
let isMarried: boolean = true;
// any
let heroes: any = "iron man";
heroes = 20;
// array of number
let arr: Array<number> = [1, 2, 3];
// also can be written like this
let arr2: number[] = [1, 2, 3];
console.log(heroes);
console.log(arr);
console.log(arr2);

// array dengan 2 data type yang diperbolehkan
let arr3: Array<string | number> = ["makan", 100];
console.log(arr3);

// tuples => semacam array tapi dengan data type dan element yang dibatasi sesuai deklarasi
let tpls2: [string, number];
tpls2 = ["tidur", 200];
console.log(tpls2);

// enums => data type yang menampung kumpulan data constant
// numeric enums
enum Months {
    "JANUARI" = 1,
    "FEBRUARI",
    "MARET",
    "APRIL",
    "MEI",
    "JUNI",
    "JULI",
    "AGUSTUS",
    "SEPTEMBER",
    "OKTOBER",
    "NOVEMBER",
    "DESEMBER",
}
console.log(Months[12]);
