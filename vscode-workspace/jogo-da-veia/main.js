const coordinatesX = [];
const coordinatesO = [];
let gameRound = 1;

const register = (element) => {
  const coordinates = {
    x: element.getAttribute("x"),
    y: element.getAttribute("y"),
  };
  if (gameRound % 2 != 0 && element.innerHTML == "") {
    element.innerHTML = "X";
    coordinatesX.push(coordinates);
    if (verifier(coordinatesX)) {
      alert("jogador X ganhow");
    }
    gameRound++;
  } else if (gameRound % 2 == 0 && element.innerHTML == "") {
    element.innerHTML = "O";
    coordinatesO.push(coordinates);
    if (verifier(coordinatesO)) {
      alert("jogador X ganhow");
    }
    gameRound++;
  }
};

const verifyCoordinates = (round1, round2, round3) => {
  const result1 =
    round1.x * round2.y + round1.y * round3.x + round2.x * round3.y;
  const result2 =
    round3.x * round2.y + round3.y * round1.x + round2.x * round1.y;

  const aligned = result1 - result2 == 0 ? true : false;
  return aligned;
};

const verifier = (array) => {
  if (array.length < 3) {
    return;
  }

  for (let index = 0; index < array.length; index++) {
    let round1 = index;
    let round2 = index + 1;
    let round3 = index + 2;

    if (round3 >= array.length) {
      round3 = round3 - array.length;
    }

    if (round2 >= array.length) {
      round2 = round2 - array.length;
    }
    if (verifyCoordinates(array[round1], array[round2], array[round3])) {
      return true;
    }
  }
};
