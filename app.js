const product = { count: 3, price: 12.55, type: "ropa" };

let totalSinIVA = product.count * product.price;

if (product.count <= 0) totalSinIVA = 0;

console.log("El precio sin IVA es " + totalSinIVA);

switch(product.type) {
    case"ropa": console.log("El total es " + (totalSinIVA + totalSinIVA * 0.21)); break;
    case"libros": console.log("El total es " + (totalSinIVA + totalSinIVA * 0.1)); break;
    case"alimentación": console.log("El total es " + (totalSinIVA + totalSinIVA * 0.04)); break;
}

