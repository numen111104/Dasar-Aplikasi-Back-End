// eslint-disable-next-line require-jsdoc
function hitungLuasPersegi(sisi) {
  const luasPersegi = sisi * sisi;
  const kelilingPersegi = sisi * 4;
  const rumusNgasalPersegi = 2 * sisi / 3 ** 3 / 9 + 120 - 45;

  return [luasPersegi, kelilingPersegi, rumusNgasalPersegi];
};

const [luasPersegi, kelilingPersegi, rumusNgasalPersegi] = hitungLuasPersegi(5);

console.log(luasPersegi);
console.log(kelilingPersegi);
console.log(rumusNgasalPersegi);
