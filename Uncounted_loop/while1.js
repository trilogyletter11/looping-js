var list = "";
var i = 0;

while (i < 10) {
  list += "<li>nomer" + i + "</li>";
  i++;
}

document.getElementById("list").innerHTML = list;
