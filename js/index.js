$("body").prepend("<header>");
$("header").load("./inc.html header> div");

fetch("./js/data.json")
  .then((response) => response.json())
  .then((data) => {
    callback(data);
  });

function callback(data) {
  const elMain = document.querySelector("main"),
    elBtn = document.querySelector(".btn"),
    elBtn01 = document.querySelectorAll(".btn01"),
    elBtn02 = document.querySelectorAll(".btn02"),
    elBtn03 = document.querySelectorAll(".btn03"),
    elBtn04 = document.querySelector(".menu img"),
    elFooter = document.querySelector("footer"),
    elImg01 = document.querySelector(".header-right img"),
    elMenu = document.querySelector(".menu"),
    elImgbox01 = document.querySelector(".imgbox01"),
    elImgloop = document.querySelector(".first-box-loop");
  let answer = [];
  function loopIn() {
    for (i = 0; i < data.ciga.length; i++) {
      elImgloop.innerHTML += `<img src="${data.ciga[i].url}" alt="">`;
    }
  }
  loopIn();

  elImg01.addEventListener("click", function () {
    elMenu.classList.toggle("fade");
  }); //버거메뉴 열때
  elBtn04.addEventListener("click", function () {
    console.log("asd");
    elMenu.classList.remove("fade");
  }); //버거메뉴 눌렀을때 열고 닫기

  $(".btn").click(function () {
    elMain.style = `transform:translateY(-${window.innerHeight}px)`;
    $(".first-banner").addClass("fadeout"); //첫번째 섹션 사라지는 이벤트
  }); //첫번째 버튼 클릭시 아래 스크롤

  elBtn01.forEach(function (div, key) {
    div.addEventListener("click", function () {
      elMain.style = `transform:translateY(-${window.innerHeight * 2}px)`;
      $(".second-banner").addClass("fadeout"); //두번째 섹션 사라지는 이벤트
      if (key == 0) {
        answer.push("thin");
      } else {
        answer.push("thick");
      }

      console.log("asd");
    });
  }); //두번째 버튼들 클릭시 아래 스크롤
  elBtn02.forEach(function (div, key) {
    div.addEventListener("click", function () {
      elMain.style = `transform:translateY(-${window.innerHeight * 3}px)`;
      $(".third-banner").addClass("fadeout"); //세번째 섹션 사라지는 이벤트
      if (key == 0) {
        answer.push("yes");
      } else {
        answer.push("no");
      }
    });
  }); //세번째 버튼들 클릭시 아래 스크롤

  let scroll3 = window.innerHeight * 3;
  elBtn03.forEach(function (div, key) {
    div.addEventListener("click", function () {
      $(".popup").addClass("black");
      $(".fourth-banner").addClass("black");
      elMain.style = `transform:translateY(-${
        scroll3 + elFooter.offsetHeight
      }px)`;
      if (key == 0) {
        answer.push("more");
        let test1 = data.test[answer[0]][answer[1]][answer[2]];
        arrFilter(test1);
      } else {
        answer.push("less");
        let test1 = data.test[answer[0]][answer[1]][answer[2]];
        arrFilter(test1);
      }
      $(".circle-box").css("display", "none");
    });
  }); //네번째 버튼들 클릭시

  $(".close").click(function () {
    console.log("asd");
    $(".popup").fadeOut();
    $(".fourth-banner").addClass("black");
  }); //닫기버튼 클릭시
  $(".detail").click(function () {});
  let datas = data.ciga;
  console.log(data.rating);
  function arrFilter(test1) {
    let aa = test1.filter((list) => {
      datas.forEach((data) => {
        if (data.id == list) {
          elImgbox01.innerHTML += `
          <div class="imgbox02">
          <h4>${data.title}</h4>
          <img src="${data.url}" alt="" />
          <p>${data.tag}</p>
          </div>`;
        }
      }); //제이슨 데이터들 뿌려주기
    });
  }
}
