function getRandomNumber (min, max) {
  if (min >= 0 && max >= 0) {
    if (min > max) {
      [min, max] = [max, min];
    }
    const rand = min + Math.random() * (max + 1 - min);
    return(Math.floor(rand));
  } else {
    throw new Error('Отрицательное значение запрещено');
  }
}
getRandomNumber(0,0);


function checkMaxLength (string, maxLength) {
  const stringLength = string.length;
  return stringLength <= maxLength;
}
checkMaxLength('hello', 10);
