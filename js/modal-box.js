if (localStorage.getItem("modalClosed")) {
  document.getElementById("modal").style.display = "none";
} else {
  document.getElementById("modal").style.display = "flex";
}

document.getElementById("close-modal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
  alert("Zaakceptowano! Okno zostało pomyślnie zamknięte.");
});

document.getElementById("ok-button").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
  alert("Zaakceptowano! Okno zostało pomyślnie zamknięte.");
});

document
  .getElementById("no-show-again-button")
  .addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
    alert(
      "Z przyjemnością informujemy, że Twój wybór został pomyślnie zarejestrowany. Od tej chwili nie będziemy już wyświetlać okna ostrzegawczego. Modalne okno nie będzie już się pojawiać."
    );

    localStorage.setItem("modalClosed", "true");
  });
