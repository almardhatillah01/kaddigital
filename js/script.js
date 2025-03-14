document.addEventListener("DOMContentLoaded", function () {
    // Popup lokasi
    const btnLokasi = document.getElementById("btnLokasi");
    const popupOverlay = document.getElementById("popupOverlay");
    const locationPopup = document.getElementById("locationPopup");

    if (btnLokasi && popupOverlay && locationPopup) {
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
    }

    // Kawalan muzik
    const audio = document.getElementById("myAudio");
    const button = document.getElementById("toggleMusic");

    if (audio && button) {
        // Cuba paksa autoplay dengan unmute selepas interaksi pertama
        function enableAudio() {
            audio.muted = false;
            audio.play().catch(error => console.log("Autoplay gagal:", error));
            document.removeEventListener("click", enableAudio);
        }

        document.addEventListener("click", enableAudio);

        button.addEventListener("click", function () {
            if (audio.paused) {
                audio.play();
                button.textContent = "⏸"; // Tukar ikon ke pause
            } else {
                audio.pause();
                button.textContent = "▶"; // Tukar ikon ke play
            }
        });
    }
});
