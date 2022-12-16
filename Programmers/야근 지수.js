function noOvertime(no, works) {
  while (no > 0) {
    works = works.sort((a, b) => {
      return b - a;
    });
    works[0] -= 1;
    no--;
  }
  return works
    .map((a) => {
      return a * a;
    })
    .reduce((a, b) => {
      return a + b;
    });
}
