document.addEventListener("DOMContentLoaded", function () {
    const btnLokasi = document.getElementById("btnLokasi");
    const popupOverlay = document.getElementById("popupOverlay");
    const locationPopup = document.getElementById("locationPopup");
    const btnTutup = document.getElementById("btnTutup");

    // Bila butang lokasi ditekan, popup muncul
    btnLokasi.addEventListener("click", function () {
        popupOverlay.style.display = "block";
        locationPopup.style.display = "block";
    });

    // Bila butang tutup ditekan, popup hilang
    btnTutup.addEventListener("click", function () {
        popupOverlay.style.display = "none";
        locationPopup.style.display = "none";
    });

    // Klik luar popup untuk tutup
    popupOverlay.addEventListener("click", function () {
        popupOverlay.style.display = "none";
        locationPopup.style.display = "none";
    });
});
