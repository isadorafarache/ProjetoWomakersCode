const imgContainer = document.querySelector("#img");
const imgs = document.querySelectorAll("#img img");

let idx = 0;
const totalImgs = imgs.length;
const imgWidth = imgs[0].clientWidth;

function carousel() {
    idx++;

    if (idx >= totalImgs) {
        idx = 0;
        imgContainer.style.transition = "none";
        imgContainer.style.transform = "translateX(0)";
        setTimeout(() => {
            imgContainer.style.transition = "transform 0.5s ease-in-out";
        }, 0);
    } else {
        imgContainer.style.transform = `translateX(${-idx * imgWidth}px)`;
    }
}

imgs.forEach(img => {
    console.log(`Imagem: ${img.naturalWidth}px x ${img.naturalHeight}px`);
});


setInterval(carousel, 1800);
