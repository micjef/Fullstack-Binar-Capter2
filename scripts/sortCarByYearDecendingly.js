function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const resultDescending = [...cars]

  // Tulis code-mu disini
  //sort cars by year descendingly
  resultDescending.sort((a, b) => a.year - b.year);
  console.log(resultDescending);

  // Rubah code ini dengan array hasil sorting secara descending
  return resultDescending;
}
