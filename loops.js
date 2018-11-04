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

function whileLoop(aNum) {
  while (aNum > 0) {
    console.log(aNum);
    aNum--;
  }
  return "done";
}

function doWhileLoop(anArr2) {
  
}