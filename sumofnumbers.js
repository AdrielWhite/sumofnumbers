sumFor = function(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

sumWhile = function(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

sumRecursion = function(list) {
  if (list.length === 1) {
    return list[0];
  }
  return list[0] + sumRecursion(list.slice(1));
}

sumTheSimpleWay = function(list) {
  let sum = 0;
  _.each(list, function (subData) {
    sum += subData;
  });
  return sum;
}