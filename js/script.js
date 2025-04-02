document.addEventListener("DOMContentLoaded", function () {
    // ========================
    // 1. Popup Lokasi
    // ========================
    const btnLokasi = document.getElementById("btnLokasi");
    const popupOverlay = document.getElementById("popupOverlay");
    const locationPopup = document.getElementById("locationPopup");

    if (btnLokasi && popupOverlay && locationPopup) {
        btnLokasi.addEventListener("click", function () {
            popupOverlay.classList.add("show");
            locationPopup.classList.add("show");
        });

        popupOverlay.addEventListener("click", function () {
            popupOverlay.classList.remove("show");
            locationPopup.classList.remove("show");
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
            overlayPage.classList.add("fade-out"); // Tambah efek fade-out

            setTimeout(() => {
                overlayPage.style.display = "none"; // Hilangkan selepas animasi
            }, 500);
        });
    }

    // ========================
    // 4. Popup Telefon
    // ========================
    const btnTelefon = document.getElementById("btnTelefon");
    const popupOverlayPhone = document.getElementById("popupOverlayPhone");
    const phonePopup = document.getElementById("phonePopup");

    if (btnTelefon && popupOverlayPhone && phonePopup) {
        btnTelefon.addEventListener("click", function () {
            popupOverlayPhone.classList.add("show");
            phonePopup.classList.add("show");
        });

        popupOverlayPhone.addEventListener("click", function () {
            popupOverlayPhone.classList.remove("show");
            phonePopup.classList.remove("show");
        });
    }

    // ========================
    // 5. Efek Menaip & Sound Effect "Toing!"
    // ========================
    const prankText = document.getElementById("prankText");
    const shakeText = document.getElementById("shakeText");
    const soundEffect = new Audio("Toing.mp3"); // Load sound effect

    if (prankText && shakeText) {
        const text = "Anda di prankkkk 😂";  
        let index = 0;

        function typeEffect() {
            if (index < text.length) {
                prankText.innerHTML += text[index];
                index++;
                setTimeout(typeEffect, 100);
            } else {
                // Bila habis taip, tunjuk teks goyang selepas 1 saat
                setTimeout(() => {
                    shakeText.classList.remove("hidden");

                    // Mainkan sound effect selepas teks muncul
                    soundEffect.play();
                }, 1000);
            }
        }

        typeEffect();
    }
});


//Auto scroll 
let scrolling = true;

function autoScroll() {
    if (scrolling) {
        window.scrollBy(0, 2); // Scroll ke bawah perlahan
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
            scrolling = false; // Henti bila sampai bawah
        } else {
            setTimeout(autoScroll, 10); // Ulangi setiap 10ms
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(autoScroll, 1000); // Tunggu 1s sebelum mula scrolling
});

document.addEventListener("click", () => {
    scrolling = false; // Berhenti scrolling bila diklik
});
