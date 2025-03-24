var banners = [
    "imgs/banner-2.png",
    "imgs/banner-3.png",
    "imgs/banner-4.png",
    "imgs/banner-5.png"
];
var j = 0;
var autoSlide;

function next() {
    j = (j + 1) % banners.length;
    document.getElementById("anh").src = banners[j];
}

function prv() {
    j = (j - 1 + banners.length) % banners.length;
    document.getElementById("anh").src = banners[j];
}

function auto() {
    next();
    autoSlide = setTimeout(auto, 2000); // Chuyển ảnh mỗi 2 giây
}

function stopAuto() {
    clearTimeout(autoSlide);
}

function toggleAuto() {
    var btn = document.getElementById("auto-btn");
    if (btn.innerText === "Bắt đầu") {
        auto();
        btn.innerText = "Dừng";
    } else {
        stopAuto();
        btn.innerText = "Bắt đầu";
    }
}
