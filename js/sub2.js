$("body").prepend("<header>");
$("header").load("./inc.html header> div");

fetch("./js/data.json")
  .then((response) => response.json())
  .then((data) => {
    callback(data);
  });

function callback(data) {
  const elBox = document.querySelector(".flexbigbox"),
   elBox01 = document.querySelector(".box01"),
   elImg01 = document.querySelector(".header-right img"),
    elBtn04 = document.querySelector(".menu img");
    elMenu = document.querySelector(".menu");

  let Thick = data.Philip.thick;

  elImg01.addEventListener("click", function () {
    elMenu.classList.toggle("fade");
  });//버거메뉴 열때
  elBtn04.addEventListener("click", function () {
    console.log("asd");
    elMenu.classList.remove("fade");
  }); //버거메뉴 눌렀을때 열고 닫기


  
  /* let Thin = data.Philip.thin; */
  /* console.log(Thin[0].url); */

  /* function thinIn() {
    for (i = 0; i < Thin.length; i++) {
      elBox.innerHTML += `<div class="flexbox">
      <div class="name">${Thin[i].title}</div>
      <div class="img">
        <img src="${Thin[i].url}" alt="" />
      </div>
      <div class="ex">
        <p>${Thin[i].tag}</p>
      </div>
      <div class="rating">
        <p>${Thin[i].rating.replaceAll("\\n", "<br>")}</p>
      </div>
    </div>`;
    }
  }
  thinIn(); */
  function thickIn(){
    for (i = 0; i < Thick.length; i++) {
        elBox01.innerHTML += `<div class="flexbox">
        <div class="name">${Thick[i].title}</div>
        <div class="img">
          <img src="${Thick[i].url}" alt="" />
        </div>
        <div class="ex">
          <p>${Thick[i].tag}</p>
        </div>
        <div class="rating">
          <p>${Thick[i].rating.replaceAll("\\n", "<br>")}</p>
        </div>
      </div>`;
      }
  }
  thickIn();


}