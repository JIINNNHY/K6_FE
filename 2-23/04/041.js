const img = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
const dBt = document.querySelector("#vImg")
const btnImg = document.createElement("img");

document.addEventListener("DOMContentLoaded", () => {
    
    const bt = document.createElement("button");
    const btImg = document.createTextNode("주사위 굴리기");
    bt.appendChild(btImg);
    
    document.querySelector("#bt").append(bt);
    
    bt.addEventListener("click", () => {
        handleClick(1);
    });
    
});

const handleClick = (n) => {
    const cImg = img[Math.floor(Math.random() * Image.length)];
    btnImg.src = `./img/${cImg}`;
}
