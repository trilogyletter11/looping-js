var foods = ["pizza", "pasta", "soup", "meatball"];

var list = "";

foods.forEach(function (food) {
  list += food + "<br>";
});
document.write(list);
