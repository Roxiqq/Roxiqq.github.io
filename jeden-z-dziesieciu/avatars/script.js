let punkty = 0;
let zycia = 3;

function startGame() {
  document.getElementById("pytanie").innerText = "Czy Ziemia krąży wokół Słońca?";
}

function sprawdzOdpowiedz(dobra) {
  if (dobra) {
    punkty += 1;
    document.getElementById("punkty").innerText = "Punkty: " + punkty;
  } else {
    zycia -= 1;
    const serca = "❤️".repeat(zycia);
    document.getElementById("zycia").innerText = "Życia: " + serca;

    if (zycia <= 0) {
      document.getElementById("pytanie").innerText = "Koniec gry!";
    }
  }
}

