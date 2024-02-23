/* 
  함수 작성 2 : 화살표 함수
*/

document.addEventListener("DOMContentLoaded", () =>{
  console.log("DOMContentLoaded ok");

  const bt3 = document.createElement("button");
  const bt3Txt = document.createTextNode("버튼3");
  bt3.appendChild(bt3Txt);
  

  const bt4 = document.createElement("button");
  const bt4Txt = document.createTextNode("버튼4");
  bt4.appendChild(bt4Txt);

  document.querySelector("#btArea2").append(bt3);
  document.querySelector("#btArea2").append(bt4);

  bt3.setAttribute("id", "bt3");
  bt4.setAttribute("id", "bt4");

  bt3.addEventListener("click", () => {
    handleClick(3);
  });
  bt4.addEventListener("click", () => {
    handleClick(4);
  });
}) ;


const handleClick = (n) => {
  let msg ;
  if (n == 1) msg = "<h2>안녕하세요.</h2>" ;
  else if (n == 2) msg = "<h2>안녕히 가세요</h2>" ;
  else if (n == 3) msg = `<h2>버튼 ${n}</h2>`;
  else msg = `<h2>누르기 ${n}</h2>`;
  document.querySelector("#msgArea").innerHTML = msg ;
}


/* 
  함수 작성 1
*/
/*
function handleClick(n) {
  // 메세지 영역 가져오기 1
  // document.getElementById("msgArea").innerHTML = "안녕하세요" ;

  // 메세지 영역 가져오기 2
  // document.querySelector("#msgArea").innerHTML = "<h2>버튼" + n + "이 눌러졌습니다.</h2>" ;

  document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n} 이 눌러졌습니다.</h2>` ;
} 
*/

