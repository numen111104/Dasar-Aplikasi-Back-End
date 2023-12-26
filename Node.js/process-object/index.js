const perkalian = (a,b) => {
    return a*b;
};
const tambah = (a,b) => {
    return a+b;
};
const pengurangan = (a,b) => {
   return a-b;
};
const pembagian = (a,b) => {
    return a/b;
}
console.log(parseInt(perkalian(3,8)+tambah(3,8)-pengurangan(3,8)/pembagian(3,8)));

Object.getOwnPropertyNames(global);