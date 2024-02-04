let paintColor = "red";
const paint = (() => {
  return {
    changeColorToBlue: () => {
      paintcolor: "Blue";
      return paintColor;
    },
    changeColorToGreen: () => {
      paintcolor: "Green";
      return paintColor;
    },
  };
})();
console.log(paint.changeColorToBlue());
