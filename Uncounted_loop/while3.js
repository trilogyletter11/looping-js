let lagi = true;

while (lagi) {
  const jawaban = window.prompt("Tahun berapa Indonesia merdeka?");
  if (jawaban === "1945") {
    window.alert("BENAR! Anda hebat!");
  } else {
    window.alert("SALAH! Belajar lagi!");
  }

  lagi = window.confirm("Main lagi?");
}
