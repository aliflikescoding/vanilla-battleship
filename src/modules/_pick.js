const pick = (() => {
  function getHorizontalClass (gridPosition, increment) {
    let number = parseInt(gridPosition[10]); 
    const start = gridPosition.substring(0, 10);
    const end = gridPosition.substring(11);
    const updatedNumber = (number + increment).toString();
    return start + updatedNumber + end;
  }

  function getVerticalClass (gridPosition, increment) {
    let number = parseInt(gridPosition[9]); 
    const start = gridPosition.substring(0, 9);
    const end = gridPosition.substring(10);
    const updatedNumber = (number + increment).toString();
    return start + updatedNumber + end;
  }

  function returnGridClasses (shipNum, rotateStatus, gridPosition) {
    const classNames = [];
    if (shipNum == 0 || shipNum == 1) {
      for (let i = 1; i <= 3; i++) {
        if (rotateStatus == false) {
          classNames.push(pick.getHorizontalClass(gridPosition, i));
        }
        else {
          classNames.push(pick.getVerticalClass(gridPosition, i));
        }
      }
    } else if (shipNum == 2 || shipNum == 3) {
      for (let i = 1; i <= 2; i++) {
        if (rotateStatus == false) {
          classNames.push(pick.getHorizontalClass(gridPosition, i));
        }
        else {
          classNames.push(pick.getVerticalClass(gridPosition, i));
        }
      }
    } else {
      for (let i = 1; i <= 1; i++) {
        if (rotateStatus == false) {
          classNames.push(pick.getHorizontalClass(gridPosition, i));
        }
        else {
          classNames.push(pick.getVerticalClass(gridPosition, i));
        }
      }
    }
    return classNames;
  }

  return {
    getHorizontalClass: getHorizontalClass,
    getVerticalClass: getVerticalClass,
    returnGridClasses: returnGridClasses
  };
})();

module.exports = pick