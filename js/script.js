document.addEventListener("DOMContentLoaded", function () {
    // ========================
    // 1. Popup Lokasi
    // ========================
    const btnLokasi = document.getElementById("btnLokasi");
    const popupOverlay = document.getElementById("popupOverlay");
    const locationPopup = document.getElementById("locationPopup");

    if (btnLokasi && popupOverlay && locationPopup) {
        btnLokasi.addEventListener("click", function () {
            popupOverlay.style.display = "block";
            locationPopup.style.display = "block";
        });

        popupOverlay.addEventListener("click", function () {
            popupOverlay.style.display = "none";
            locationPopup.style.display = "none";
        });
    }

    // ========================
    // 2. Kawalan Muzik
    // ========================
    const audio = document.getElementById("myAudio");
    const button = document.getElementById("toggleMusic");

    if (audio && button) {
        // Pastikan volume penuh & loop
        audio.volume = 1.0;
        audio.loop = true;

        // Cuba paksa autoplay selepas interaksi pertama
        function enableAudio() {
            audio.muted = false;
            audio.play().catch(error => console.warn("Autoplay gagal:", error));
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

    // ========================
    // 3. Overlay "Radhi & Akma"
    // ========================
    const overlayPage = document.getElementById("overlayPage");
    const btnBuka = document.getElementById("btnBuka");

    if (overlayPage && btnBuka) {
        btnBuka.addEventListener("click", function () {
            overlayPage.style.display = "none"; // Hilangkan overlay
        });
    }
});
