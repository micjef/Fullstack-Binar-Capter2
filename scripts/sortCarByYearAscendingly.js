function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const resultAscending = [...cars];

  // Tulis code-mu disini
  // sort cars by year ascendingly
  resultAscending.sort((a, b) => a.year - b.year);

  // Rubah code ini dengan array hasil sorting secara ascending
  return resultAscending;
}
