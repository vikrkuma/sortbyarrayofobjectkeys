const data = [
  {x: 45, y: 32, z: 10},
  {x: 32, y: 54, z: 10},
  {x: 46, y: 32, z: 10},
  {x: 93, y: 89, z: 11},
  {x: 16, y: 54, z: 11},
  {x: 12, y: 54, z: 11},
];

const sortBy = ['z', 'y', 'x'];

const comparatorFn = (sortBy) => (a, b) => {
  for (let sortByIndex = 0; sortByIndex < sortBy.length; sortByIndex++) {
    var sortKey = sortBy[sortByIndex];

    const sortDirection = a[sortKey] - b[sortKey];

    if (sortDirection == 0) continue;

    return sortDirection;
  }
  return a[sortKey] - b[sortKey];
}

data.slice().sort(comparatorFn(sortBy));
