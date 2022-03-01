function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  const resultDes = [...cars]

  // Tulis code-mu disini
  //sort cars by year descendingly
  resultDes.sort((a, b) => b.year - a.year);
  console.log(resultDes);

  // Rubah code ini dengan array hasil sorting secara descending
  return resultDes;
}
