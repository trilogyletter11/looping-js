var gunung = {
  a: "Rinjani",
  b: "Bromo",
  c: "Semeru",
};

for (var key in gunung) {
  document.write("Nama gunung " + key + " adalah " + gunung[key]);
  console.log("Nama gunung " + key + " adalah " + gunung[key]);
}
