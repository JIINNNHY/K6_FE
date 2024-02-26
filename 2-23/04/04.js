const handleClick = () => {
    const bts = document.querySelectorAll(".bt");
    const btsNum = [1,1,1];

    for(let [idx,bt] of bts.entries()){
        const n = Math.floor(Math.random() *6) +1;
        bt.setAttribute("src", `./img/${n}.png`);
        btsNum[idx] = n;

        console.log(btsNum);
    }
}



// document.addEventListener("DOMContentLoaded", () => {
//     const bts = document.querySelectorAll(".bt");
//     const btnImg = document.querySelectorAll(".vImg");
    
//     const img = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];


//     bts.forEach((bt, index) => {
//         bt.addEventListener("click", () => {
//                 const cImg = img[Math.floor(Math.random() * img.length)];
//                 btnImg[index].src = `./img/${cImg}`;
//         });
//     });
// });
