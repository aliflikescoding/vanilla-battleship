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

  return {
    getHorizontalClass: getHorizontalClass,
    getVerticalClass: getVerticalClass
  };
})();

module.exports = pick