function filterSearch(array, state) {
  let lower = state.toLowerCase();
  return array.filter((item) =>
    item.description
      .split(" ")
      .find((word) => word.toLowerCase().includes(lower))
  );
}
