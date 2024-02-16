const pick = require("./_pick");
const GameBoard = require("./../objects/_gameBoard");
const Ship_2 = require('../objects/_ship_2');
const Ship_3 = require('../objects/_ship_3');
const Ship_4 = require('../objects/_ship_4');

// pick buttons
const buttonRotate = document.querySelector("#buttonRotate");
const buttonStartGame = document.querySelector("#buttonStartGame");
const buttonUndo = document.querySelector("#buttonUndo");

//grids
const pickGrids = document.querySelectorAll(".pick-box");

const playerBoard = new GameBoard();
buttonRotate.addEventListener("click", () => {
  playerBoard.rotateShipPosition();
})

pickGrids.forEach((grid) => {
  grid.addEventListener("mouseenter", () => {
    const gridPosition = grid.classList[1];
    const classNames = pick.returnGridClasses(pick.type(playerBoard.getShipNumber()), playerBoard.getRotate(), gridPosition);
    const placementStatus = pick.checkPlacement(classNames);
    const outOfBoundsStatus = pick.checkOutOfBounds(gridPosition, playerBoard.getRotate(), pick.type(playerBoard.getShipNumber()));
    const popNum = pick.getPopNumber(gridPosition, pick.type(playerBoard.getShipNumber()), playerBoard.getRotate());
    if (outOfBoundsStatus == false) {
      if (placementStatus == false) {
        classNames.forEach((className) => {
          if (document.querySelector(`.${className}`) !== null) {
            document.querySelector(`.${className}`).classList.add("pick-danger");
          }
        });
        grid.classList.add("pick-danger");
      }
      else {
        classNames.forEach((className) => {
          document.querySelector(`.${className}`).classList.add("pick-color");
        });
        grid.classList.add("pick-color");
      }
    } else {
      if (placementStatus == false) {
        classNames.forEach((className) => {
          if (document.querySelector(`.${className}`) !== null) {
            document.querySelector(`.${className}`).classList.add("pick-danger");
          }
        });
        grid.classList.add("pick-danger");
      }
      else {
        for (let i = 0; i < popNum; i++) {
          classNames.pop();
        }
        if (classNames.length > 0) {
          classNames.forEach((className) => {
            document.querySelector(`.${className}`).classList.add("pick-danger");
          });
        }
        grid.classList.add("pick-danger");
      }
    }
  });
  grid.addEventListener("mouseleave", () => {
    const gridPosition = grid.classList[1];
    const classNames = pick.returnGridClasses(pick.type(playerBoard.getShipNumber()), playerBoard.getRotate(), gridPosition);
    const placementStatus = pick.checkPlacement(classNames);
    const outOfBoundsStatus = pick.checkOutOfBounds(gridPosition, playerBoard.getRotate(), pick.type(playerBoard.getShipNumber()));
    const popNum = pick.getPopNumber(gridPosition, pick.type(playerBoard.getShipNumber()), playerBoard.getRotate());
    if (outOfBoundsStatus == false) {
      if (placementStatus == false) {
        classNames.forEach((className) => {
          if (document.querySelector(`.${className}`) !== null) {
            document.querySelector(`.${className}`).classList.remove("pick-danger");
          }
        });
        grid.classList.remove("pick-danger");
      }
      else {
        classNames.forEach((className) => {
          document.querySelector(`.${className}`).classList.remove("pick-color");
        });
        grid.classList.remove("pick-color");
      }
    } else {
      if (placementStatus == false) {
        classNames.forEach((className) => {
          if (document.querySelector(`.${className}`) !== null) {
            document.querySelector(`.${className}`).classList.remove("pick-danger");
          }
        });
        grid.classList.remove("pick-danger");
      }
      else {
        for (let i = 0; i < popNum; i++) {
          classNames.pop();
        }
        if (classNames.length > 0) {
          classNames.forEach((className) => {
            document.querySelector(`.${className}`).classList.remove("pick-danger");
          });
        }
        grid.classList.remove("pick-danger");
      }
    }
  });
  grid.addEventListener("click", () => {
    const gridPosition = grid.classList[1];
    const classNames = pick.returnGridClasses(pick.type(playerBoard.getShipNumber()), playerBoard.getRotate(), gridPosition);
    const placementStatus = pick.checkPlacement(classNames);
    const outOfBoundsStatus = pick.checkOutOfBounds(gridPosition, playerBoard.getRotate(), pick.type(playerBoard.getShipNumber()));
    const errorText = document.querySelector("#error-text");
    if (outOfBoundsStatus == false) {
      if (placementStatus == false) {
        errorText.textContent = "THERE IS A SHIP PLACED THERE";
        setTimeout(() => {
          errorText.textContent = "";
        }, 1500);
      } else {
        classNames.forEach((className) => {
          document.querySelector(`.${className}`).classList.add("selected-grid");
        });
        grid.classList.add("selected-grid");
      }
    }
    else {
      errorText.textContent = "YOU ARE OUT OF BOUNDS";
      setTimeout(() => {
        errorText.textContent = "";
      }, 1500);
    }
  });
});
