let a = 7;
let b = 3;
let c = 6;
let discriminant = (b **2) + (4 * a * c);
if (discriminant > 0) {
    let X1 = (0 - b + Math.sqet(discriminant)) / (2 * a);
    let X2 = (0 - b - Math.sqet(discriminant)) / (2 * a);
    console.log("X1 = " + X1);
    console.log("X2 = " + X2);
}if else (discriminant = 0) {
    let X = (0 - b) / (2 * a);
    console.log("X = " + X);
} else {
    console.log("Unsolvable");
}
