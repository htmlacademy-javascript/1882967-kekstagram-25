function showRandomNumber (minNumber, maxNumber) {
  if (minNumber >= 0 && maxNumber >= 0) {
    return Math.round(Math.random()*(maxNumber - minNumber + 1) + minNumber);
  } else {
    return 'Отрицательное значение запрещено';
  }
}
showRandomNumber(1, 25);


function getMaximumLength (stitchLength, maxLength) {
  stitchLength = stitchLength.length;
  if (stitchLength <= maxLength) {
    return 'true';
  } else {
    return 'false';
  }
}
getMaximumLength('hello', 10);
