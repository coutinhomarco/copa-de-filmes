/* eslint-disable no-undef */
const checaVencedor = (array) => {
  return array.map((__, index) => (
    array[index].nota > array[array.length - 1 - index].nota ?  array[index] : array[array.length - 1 - index]
  ));
};

module.exports = checaVencedor;