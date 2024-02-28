const pick = require("./_pick");
const GameBoard = require("./../objects/_gameBoard");
const Bot = require("../objects/_bot");
const Ship_2 = require("../objects/_ship_2");
const Ship_3 = require("../objects/_ship_3");
const Ship_4 = require("../objects/_ship_4");

// pick buttons
const buttonRotate = document.querySelector("#buttonRotate");
const buttonStartGame = document.querySelector("#buttonStartGame");
const buttonUndo = document.querySelector("#buttonUndo");

// pick error boat text
const boatTypeText = document.querySelector("#boatTypeText");
const shipPlacementText = document.querySelector("#shipPlacementText");
const shipTypeText = document.querySelector("#shipTypeText");

//grids
const pickGrids = document.querySelectorAll(".pick-box");
const botGrids = document.querySelectorAll(".bot-box");

//pick area
const blackBackground = document.querySelector(".black-background");
const pickArea = document.querySelector(".pick-area");

//game area
const gameText = document.querySelector("#gameText");

const playerBoard = new GameBoard();
const botBoard = new GameBoard();
let count = 0;

const bot = new Bot();
const botPositionArray = bot.getSpots();
botPositionArray.forEach((position) => {
  const x = position[0];
  const y = position[1];
  const rotateStatus = position[2];
  const shipType = pick.type(position[3]);
  let rotNum;
  if (botBoard.getRotate() == false) {
    rotNum = 0;
  }
  else {
    rotNum = 1;
  }
  if (rotNum !== rotateStatus) {
    botBoard.rotateShipPosition();
  }
  botBoard.placeShip(x, y, shipType);
});

function shipTypeTextChange() {
  if (count <= 4) {
    shipPlacementText.classList.add("hidden");
    if (count == 0) {
      shipTypeText.classList.remove("hidden");
      boatTypeText.textContent = "Carrier";
    } else if (count == 1) {
      shipTypeText.classList.remove("hidden");
      boatTypeText.textContent = "Battleship";
    } else if (count == 2) {
      shipTypeText.classList.remove("hidden");
      boatTypeText.textContent = "Destroyer";
    } else if (count == 3) {
      shipTypeText.classList.remove("hidden");
      boatTypeText.textContent = "Submarine";
    } else if (count == 4) {
      shipTypeText.classList.remove("hidden");
      boatTypeText.textContent = "Patrol Boat";
    }
  } else {
    shipPlacementText.classList.remove("hidden");
    shipTypeText.classList.add("hidden");
  }
}

function changeGameText (condition) {
  if (condition === 1) {
    gameText.textContent = "It is the Player's turn";
  }
  else if (condition === 2) {
    gameText.textContent = "The Player missed...";
  }
  else if (condition === 3) {
    gameText.textContent = "It's a hit! the player has hit a ship!";
  }
  else if (condition === 4) {
    gameText.textContent = "It is the Bot's turn";
  }
  else if (condition === 5) {
    gameText.textContent = "The Bot missed yay!";
  }
  else if (condition === 6) {
    gameText.textContent = "Oh no, It's a hit! the Bot has hit a ship!";
  }
}

buttonStartGame.addEventListener("click", () => {
  const errorText = document.querySelector("#error-text");
  if (count > 4) {
    blackBackground.classList.add("hidden");
    pickArea.classList.add("hidden");
    const playerArray = playerBoard.getShipArray();
    playerArray.forEach((shipPair) => {
      shipPair[1].forEach((coords) => {
        const x = coords[0];
        const y = coords[1];
        document
          .querySelector(`.player-box + .grid-box-${y}${x}`)
          .classList.add("ship-color");
      });
    });
    changeGameText(1);
  } else {
    let stringVar;
    if (count > 1) {
      stringVar = `YOU STILL HAVE ${5 - count} SHIP TO PLACE`;
    } else {
      stringVar = `YOU STILL HAVE ${5 - count} SHIPS TO PLACE`;
    }
    errorText.textContent = stringVar;
    setTimeout(() => {
      errorText.textContent = "";
    }, 1500);
  }
});

buttonRotate.addEventListener("click", () => {
  playerBoard.rotateShipPosition();
});

buttonUndo.addEventListener("click", () => {
  const errorText = document.querySelector("#error-text");
  if (playerBoard.getShipArray().length > 0) {
    const lastElmt =
      playerBoard.getShipArray()[playerBoard.getShipArray().length - 1];
    const shipCoords = lastElmt[1];
    shipCoords.forEach((cords) => {
      const x = cords[0];
      const y = cords[1];
      document
        .querySelector(`.grid-box-${y}${x}`)
        .classList.remove("selected-grid");
      document
        .querySelector(`.grid-box-${y}${x}`)
        .classList.remove("pick-color");
    });
    playerBoard.undoPlacement();
    count -= 1;
    shipTypeTextChange();
  } else {
    errorText.textContent = "THERE ARE NO SHIPS ON THE BOARD";
    setTimeout(() => {
      errorText.textContent = "";
    }, 1500);
  }
});

pickGrids.forEach((grid) => {
  grid.addEventListener("mouseenter", () => {
    const gridPosition = grid.classList[1];
    const classNames = pick.returnGridClasses(
      pick.type(count),
      playerBoard.getRotate(),
      gridPosition
    );
    const placementStatus = pick.checkPlacement(classNames);
    const outOfBoundsStatus = pick.checkOutOfBounds(
      gridPosition,
      playerBoard.getRotate(),
      pick.type(count)
    );
    const popNum = pick.getPopNumber(
      gridPosition,
      pick.type(count),
      playerBoard.getRotate()
    );
    if (pick.checkShipAmount(count) === true) {
      if (outOfBoundsStatus == false) {
        if (placementStatus == false) {
          classNames.forEach((className) => {
            if (document.querySelector(`.${className}`) !== null) {
              document
                .querySelector(`.${className}`)
                .classList.add("pick-danger");
            }
          });
          grid.classList.add("pick-danger");
        } else {
          classNames.forEach((className) => {
            document.querySelector(`.${className}`).classList.add("pick-color");
          });
          grid.classList.add("pick-color");
        }
      } else {
        if (placementStatus == false) {
          classNames.forEach((className) => {
            if (document.querySelector(`.${className}`) !== null) {
              document
                .querySelector(`.${className}`)
                .classList.add("pick-danger");
            }
          });
          grid.classList.add("pick-danger");
        } else {
          for (let i = 0; i < popNum; i++) {
            classNames.pop();
          }
          if (classNames.length > 0) {
            classNames.forEach((className) => {
              document
                .querySelector(`.${className}`)
                .classList.add("pick-danger");
            });
          }
          grid.classList.add("pick-danger");
        }
      }
    } else {
      grid.classList.add("pick-danger");
    }
  });
  grid.addEventListener("mouseleave", () => {
    const gridPosition = grid.classList[1];
    const classNames = pick.returnGridClasses(
      pick.type(count),
      playerBoard.getRotate(),
      gridPosition
    );
    const placementStatus = pick.checkPlacement(classNames);
    const outOfBoundsStatus = pick.checkOutOfBounds(
      gridPosition,
      playerBoard.getRotate(),
      pick.type(count)
    );
    const popNum = pick.getPopNumber(
      gridPosition,
      pick.type(count),
      playerBoard.getRotate()
    );
    if (pick.checkShipAmount(count) === true) {
      if (outOfBoundsStatus == false) {
        if (placementStatus == false) {
          classNames.forEach((className) => {
            if (document.querySelector(`.${className}`) !== null) {
              document
                .querySelector(`.${className}`)
                .classList.remove("pick-danger");
            }
          });
          grid.classList.remove("pick-danger");
        } else {
          classNames.forEach((className) => {
            document
              .querySelector(`.${className}`)
              .classList.remove("pick-color");
          });
          grid.classList.remove("pick-color");
        }
      } else {
        if (placementStatus == false) {
          classNames.forEach((className) => {
            if (document.querySelector(`.${className}`) !== null) {
              document
                .querySelector(`.${className}`)
                .classList.remove("pick-danger");
            }
          });
          grid.classList.remove("pick-danger");
        } else {
          for (let i = 0; i < popNum; i++) {
            classNames.pop();
          }
          if (classNames.length > 0) {
            classNames.forEach((className) => {
              document
                .querySelector(`.${className}`)
                .classList.remove("pick-danger");
            });
          }
          grid.classList.remove("pick-danger");
        }
      }
    } else {
      grid.classList.remove("pick-danger");
    }
  });
  grid.addEventListener("click", () => {
    const gridPosition = grid.classList[1];
    const classNames = pick.returnGridClasses(
      pick.type(count),
      playerBoard.getRotate(),
      gridPosition
    );
    const placementStatus = pick.checkPlacement(classNames);
    const outOfBoundsStatus = pick.checkOutOfBounds(
      gridPosition,
      playerBoard.getRotate(),
      pick.type(count)
    );
    const errorText = document.querySelector("#error-text");
    if (outOfBoundsStatus == false) {
      if (placementStatus == false) {
        errorText.textContent = "THERE IS A SHIP PLACED THERE";
        setTimeout(() => {
          errorText.textContent = "";
        }, 1500);
      } else {
        if (pick.checkShipAmount(count) === true) {
          classNames.forEach((className) => {
            document
              .querySelector(`.${className}`)
              .classList.add("selected-grid");
          });
          grid.classList.add("selected-grid");
          const x = parseInt(gridPosition[10]);
          const y = parseInt(gridPosition[9]);
          const shipType = pick.type(count);
          playerBoard.placeShip(x, y, shipType);
          count += 1;
          shipTypeTextChange();
        } else {
          errorText.textContent = "YOUR SHIPS ARE ALL PLACED";
          setTimeout(() => {
            errorText.textContent = "";
          }, 1500);
        }
      }
    } else {
      errorText.textContent = "YOU ARE OUT OF BOUNDS";
      setTimeout(() => {
        errorText.textContent = "";
      }, 1500);
    }
  });
});

botGrids.forEach((grid) => {
  grid.addEventListener("click", () => {
    const botArray = botBoard.getGrid();
    const gridClass = grid.classList[1];
    const y = parseInt(gridClass[9]);
    const x = parseInt(gridClass[10]);
    if (botArray[y][x] === 1) {
      grid.classList.add("attacked-ship");
    } else {
      grid.classList.add("attacked");
    }
    botBoard.receiveAttack(x, y);
  });
});
