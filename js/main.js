function getRandomNumber (min, max) {
  if (min >= 0 && max >= 0) {
    if (min > max) {
      [min, max] = [max, min];
    }
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  } else {
    throw new Error('Отрицательное значение запрещено');
  }
}
getRandomNumber(0,2);


function checkMaxLength (string, maxLength) {
  const stringLength = string.length;
  return stringLength <= maxLength;
}
checkMaxLength('hello', 10);
