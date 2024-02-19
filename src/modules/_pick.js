const pick = (() => {
  function getHorizontalClass(gridPosition, increment) {
    let number = parseInt(gridPosition[10]);
    const start = gridPosition.substring(0, 10);
    const end = gridPosition.substring(11);
    const updatedNumber = (number + increment).toString();
    return start + updatedNumber + end;
  }

  function getVerticalClass(gridPosition, increment) {
    let number = parseInt(gridPosition[9]);
    const start = gridPosition.substring(0, 9);
    const end = gridPosition.substring(10);
    const updatedNumber = (number + increment).toString();
    return start + updatedNumber + end;
  }

  function type(shipNum) {
    if (shipNum == 0 || shipNum == 1) {
      return 4;
    } else if (shipNum == 2 || shipNum == 3) {
      return 3;
    } else {
      return 2;
    }
  }

  function checkOutOfBounds(gridPosition, rotateStatus, shipType) {
    if (rotateStatus == false) {
      let number = parseInt(gridPosition[10]);
      if (number - 1 + shipType > 9) {
        return true;
      } else {
        return false;
      }
    } else {
      let number = parseInt(gridPosition[9]);
      if (number - 1 + shipType > 9) {
        return true;
      } else {
        return false;
      }
    }
  }

  function checkShipAmount(amount) {
    if (amount > 5) {
      return false;
    } else {
      return true;
    }
  }

  function checkPlacement(classNames) {
    const arr = [];
    classNames.forEach((className) => {
      const element = document.querySelector(`.${className}`);
      if (element !== null) {
        arr.push(element.classList.contains("selected-grid"));
      }
    });
    if (arr.includes(true)) {
      return false;
    } else {
      return true;
    }
  }

  function getPopNumber(gridPosition, shipType, rotateStatus) {
    if (rotateStatus == false) {
      let number = parseInt(gridPosition[10]);
      return number - 1 + shipType - 9;
    } else {
      let number = parseInt(gridPosition[9]);
      return number - 1 + shipType - 9;
    }
  }

  function returnGridClasses(shipType, rotateStatus, gridPosition) {
    const classNames = [];
    if (shipType == 4) {
      for (let i = 1; i <= 3; i++) {
        if (rotateStatus == false) {
          classNames.push(pick.getHorizontalClass(gridPosition, i));
        } else {
          classNames.push(pick.getVerticalClass(gridPosition, i));
        }
      }
    } else if (shipType == 3) {
      for (let i = 1; i <= 2; i++) {
        if (rotateStatus == false) {
          classNames.push(pick.getHorizontalClass(gridPosition, i));
        } else {
          classNames.push(pick.getVerticalClass(gridPosition, i));
        }
      }
    } else if (shipType == 2) {
      for (let i = 1; i <= 1; i++) {
        if (rotateStatus == false) {
          classNames.push(pick.getHorizontalClass(gridPosition, i));
        } else {
          classNames.push(pick.getVerticalClass(gridPosition, i));
        }
      }
    }
    return classNames;
  }

  return {
    getHorizontalClass: getHorizontalClass,
    getVerticalClass: getVerticalClass,
    returnGridClasses: returnGridClasses,
    type: type,
    checkOutOfBounds: checkOutOfBounds,
    checkShipAmount: checkShipAmount,
    getPopNumber: getPopNumber,
    checkPlacement: checkPlacement,
  };
})();

module.exports = pick;
