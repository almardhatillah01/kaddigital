document.addEventListener("DOMContentLoaded", function () {
    const btnLokasi = document.getElementById("btnLokasi");
    const popupOverlay = document.getElementById("popupOverlay");
    const locationPopup = document.getElementById("locationPopup");

    // Bila tekan butang lokasi, popup keluar
    btnLokasi.addEventListener("click", function () {
        popupOverlay.style.display = "block";
        locationPopup.style.display = "block";
    });

    // Bila klik luar dari popup, popup hilang
    popupOverlay.addEventListener("click", function () {
        popupOverlay.style.display = "none";
        locationPopup.style.display = "none";
    });

    document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("myAudio");
    var button = document.getElementById("toggleMusic");

    button.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            button.textContent = "⏸"; // Tukar ikon ke pause
        } else {
            audio.pause();
            button.textContent = "▶"; // Tukar ikon ke play
        }
    });
});
});
