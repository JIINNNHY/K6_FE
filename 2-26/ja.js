// const handleClick = (n) => {
//     const img1 = document.querySelector("#img1");
//     const img2 = document.querySelector("#img2");

//     const nc = Math.floor(Math.random() * 6) + 1;
//     img1.setAttribute("src", `/2-23/04/img/${nc}.png`)
//     img2.setAttribute("src", `/2-23/04/img/${n}.png`)

//     if (n == nc) {
//         document.querySelector("#msg").innerHTML = "맞음" ;
//     }
//     else{
//         document.querySelector("#msg").innerHTML = "틀림" ;
//     }
// }

document.addEventListener("DOMContentLoaded", () => {
    const bts = document.querySelectorAll("section button");

    for(let bt of bts) {
        bt.addEventListener("click", () => {
            const nc = Math.floor(Math.random() * 6) + 1;
            const n = bt.innerHTML.slice(-1);
            img1.setAttribute("src", `/2-23/04/img/${nc}.png`)
            img2.setAttribute("src", `/2-23/04/img/${n}.png`)


                if (n == nc) {
        document.querySelector("#msg").innerHTML = "맞음" ;
    }
    else{
        document.querySelector("#msg").innerHTML = "틀림" ;
    }
        });
    }

});