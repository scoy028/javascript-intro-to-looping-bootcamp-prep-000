function forLoop(anArr) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      anArr.push("I am 1 strange loop.");
    } else {
      anArr.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
    }
  }
  return anArr;
}