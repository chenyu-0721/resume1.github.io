export default {
  template: ` 

  <nav class="container  container_text navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
      <a class="navbar-brand" href="#"><img class="navbar_img" src="./img/Resume.png"></a>
      <button class="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ms-auto  mb-md-0">
              <li class="nav-item">
                  <a href="#" class="nav-link" aria-current="page">
                      <span class="navbar_span">首頁</span>
                  </a>
              </li>
              <li class="nav-item">
                  <a href="#/work" class="nav-link" aria-current="page">
                      <span class="navbar_span second-title-color">作品集</span>
                  </a>
              </li>
              <li class="nav-item">
                  <a href="#" class="nav-link " aria-current="page">

                      <span class="navbar_span ">服務項目</span>
                  </a>
              </li>
              <li class="nav-item">
                  <a href="#" class="nav-link " aria-current="page">

                      <span class="navbar_span">部落格</span>
                  </a>
              </li>
              <li class="nav-item">
                  <a href="#" class="nav-link " aria-current="page">

                      <span class="navbar_span">聯絡我</span>
                  </a>
              </li>
          </ul>
      </div>
  </div>
</nav>


<section class="py-5 text-center second-img  ">
  <div class="container">
      <div class="row py-lg-5 ">
          <div class="col-lg-6 col-md-8 mx-auto">

              <h1 class="fw-light second-content pt-5">使用者觀賞的旅程中，發現設計者的價值</h1>
              <h1 class="fw-light second-content">我在開發的過程中，看見自己的成長</h1>
          </div>
      </div>
  </div>
</section>



<div class="album second-pd">
  <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
          <div class="col" data-bs-toggle="modal" data-bs-target="#perfume">
              <div class="card shadow-sm">
                  <img src="https://firebasestorage.googleapis.com/v0/b/resume-84d0c.appspot.com/o/perfumeCover.jpg?alt=media&token=b42afeb3-6772-4f1a-a699-f179209c19b3"
                      class="card-img-top secondImg">
                  <div class="card-body">
                      <span class="SecondTitle">香水購物平台</span>
                      <br>
                      <span class="information">精緻香氛，尊享品質，網上選購便利。</span>
                      <div class="tag-content ">
                          <span class="hashtag">Node.js express</span>
                          <span class="hashtag">響應式設計</span>
                          <span class="hashtag">Bootstrap</span>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col" data-bs-toggle="modal" data-bs-target="#drink">
              <div class="card shadow-sm">
                  <img src="https://firebasestorage.googleapis.com/v0/b/resume-84d0c.appspot.com/o/drinkCover.jpg?alt=media&token=86d64a6d-e469-4224-8c1b-49b77342ff87"
                      class="card-img-top secondImg">
                  <div class="card-body">
                      <span class="SecondTitle">快樂飲料店</span><br>
                      <span class="information">色彩繽紛，口感豐富，帶來快樂的飲品體驗。</span>
                      <div class="tag-content">
                          <span class="hashtag">Node.js express</span>
                          <span class="hashtag">響應式設計</span>
                          <span class="hashtag">Pinia</span>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col" data-bs-toggle="modal" data-bs-target="#game">
              <div class="card shadow-sm">
                  <img src="https://firebasestorage.googleapis.com/v0/b/resume-84d0c.appspot.com/o/gameCover.jpg?alt=media&token=eeab175d-7604-49bf-bd39-a34779a77a95"
                      class="card-img-top secondImg">
                  <div class="card-body">
                      <span class="SecondTitle">Capoo vs Rabbit</span><br>
                      <span class="information">機制出招，享受遊戲</span>
                      <div class="tag-content">
                          <span class="hashtag">響應式設計</span>
                          <span class="hashtag">Vue</span>
                          <span class="hashtag">Bootstrap </span>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col" data-bs-toggle="modal" data-bs-target="#back">
              <div class="card shadow-sm">
                  <img src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      class="card-img-top secondImg">
                  <div class="card-body">
                      <span class="SecondTitle">後端程式碼</span>
                      <br>
                      <span class="information">第一次串接後端研究</span>
                      <div class="tag-content">
                          <span class="hashtag">Node.js express</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>



<div class="bg-light">
  <div class="container " style="padding-bottom:40px">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 footer-nav">
          <div class="col-md-4 d-flex">
              <h1 class="footer-title">陳冠宇<br><span class="footer-content">若有前端正職、後端實習工作職缺。<br><span
                          class="footer-content">歡迎與我聯繫！</span><br><span
                          class="footer-tag">chen630602@gmail.com</span>
              </h1>
          </div>

          <ul class="footer-nav-li col-md-4 justify-content-end list-unstyled d-flex flex-direction-column ">
              <li class="ms-3"><a class="text-muted"
                      href="https://www.facebook.com/profile.php?id=100000503690781&locale=zh_TW">
                      <div><button type="button" class="btn btn-outline-dark footer-button"><i
                                  class="bi bi-facebook footer-icon"></i>Facebook</button>
                  </a></li>
              <li class="ms-3"><a class="text-muted" href="https://github.com/chenyu-0721/Readme"><button
                          type="button" class="btn btn-outline-dark footer-button"><i
                              class="bi bi-github footer-icon"></i>Github</button></a></li>
              <li class="ms-3"><a class="text-muted" href="https://www.instagram.com/chen012355/"><button
                          type="button" class="btn btn-outline-dark footer-button"><i
                              class="bi bi-instagram footer-icon"></i>Instagram</button></a></li>
          </ul>
      </footer>
  </div>
</div>



<div class="modal fade" id="perfume"  data-bs-keyboard="false" tabindex="-1"
  aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
      <div class="modal-content">
          <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <div class="project-modal-title">
                  <span class="SecondTitle">香水購物平台</span>
                  <span class="information">精緻香氣，尊享品質，往上選購便利</span>
              </div>

              <div class="project-modal-content">
                  <span>香水購物平台為六角學院單人專題審核標準。<br>主要透過前端畫面網頁設計與後端API串接。</span>
                  <div class="vr"></div>
                  <span>設計規則：香水、淡色系<br>開發方式：Node.js express, RWD, Bootstrap</span>
              </div>
              <div class="bg-light model-bgpd">
                  <div class="d-flex justify-content-center">
                      <div class="enlargeable-container"></div>
                      <img src="https://firebasestorage.googleapis.com/v0/b/resume-84d0c.appspot.com/o/perfume-font.png?alt=media&token=97081478-0f9f-4d6d-9fd1-226569d92c23"
                          class="img-fluid modal-img enlargeable" alt="">
                  </div>

                  <div class="project-modal-title">
                      <span class="SecondTitle">會員畫面</span>
                      <span class="project-modal-img-content">可看到香水的所有商品</span>
                  </div>
                  <div class="d-flex justify-content-center">
                      <div class="enlargeable-container">
                          <img src="https://firebasestorage.googleapis.com/v0/b/resume-84d0c.appspot.com/o/perfume-back.png?alt=media&token=f1914883-89db-46ec-ac02-030e77c6ea2a"
                              class="img-fluid modal-img enlargeable" alt="">
                      </div>
                  </div>
                  <div class="project-modal-title">
                      <span class="SecondTitle">後台畫面</span>
                      <span class="project-modal-img-content">商品可做新增、刪除、編輯</span>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
</div>


<div class="modal fade" id="drink"  data-bs-keyboard="false" tabindex="-1"
aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog modal-xl">
  <div class="modal-content">
      <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <div class="project-modal-title">
              <span class="SecondTitle">快樂飲料店</span>
              <span class="information">色彩繽紛，口感豐富，帶來快樂的飲品體驗。</span>
          </div>

          <div class="project-modal-content">
              <span>快樂飲料店練習製作購物車功能的前端網頁<br>主要透過前端畫面網頁設計並透過假資料進行傳遞。</span>
              <div class="vr"></div>
              <span>設計規則：各式飲料<br>開發方式：Vue, RWD, Bootstrap</span>
          </div>
          <div class="bg-light model-bgpd">
              <div class="d-flex justify-content-center">
                  <div class="enlargeable-container"></div>
                  <img src="https://firebasestorage.googleapis.com/v0/b/resume-84d0c.appspot.com/o/drinkimg1.png?alt=media&token=d85c4309-3160-4249-ac3f-634e92a1f9a1"
                      class="img-fluid modal-img enlargeable" alt="">
              </div>

              <div class="project-modal-title">
                  <span class="SecondTitle">飲料店首頁</span>
                  <span class="project-modal-img-content">會有材料的訊息、門市消息、商品</span>
              </div>
              <div class="d-flex justify-content-center">
                  <div class="enlargeable-container">
                      <img src="https://firebasestorage.googleapis.com/v0/b/resume-84d0c.appspot.com/o/drinkimg2.png?alt=media&token=00ebae69-0dcb-495a-b676-48c2976046d5"
                          class="img-fluid modal-img enlargeable" alt="">
                  </div>
              </div>
              <div class="project-modal-title">
                  <span class="SecondTitle">購物車</span>
                  <span class="project-modal-img-content">商品可調整冰塊甜度、進行刪除</span>
              </div>
          </div>
      </div>
  </div>
</div>
</div>


<class class="modal fade" id="game"  data-bs-keyboard="false" tabindex="-1"
aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog modal-xl">
  <div class="modal-content">
      <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <div class="project-modal-title">
              <span class="SecondTitle">Capoo vs Rabbit</span>
              <span class="information">機制出招，享受遊戲</span>
          </div>

          <div class="project-modal-content">
              <span>想法來自於貓狗大戰中，透過按鈕進行對戰。(面試作品用)<br>主要透過前端畫面網頁設計與Vue框架。</span>
              <div class="vr"></div>
              <span>設計規則：遊戲、咖波 <br>開發方式：Vue, RWD, Bootstrap</span>
          </div>
          <div class="bg-light model-bgpd">
              <div class="d-flex justify-content-center">
                  <div class="enlargeable-container"></div>
                  <img src="https://firebasestorage.googleapis.com/v0/b/resume-84d0c.appspot.com/o/capoo1.png?alt=media&token=5d20c5d4-207a-4fe5-ba57-54183ae2ee49"
                      class="img-fluid modal-img enlargeable" alt="">
              </div>

              <div class="project-modal-title">
                  <span class="SecondTitle">起初頁面</span>
                  <span class="project-modal-img-content">會有對戰訊息，攻擊按鈕，角色</span>
              </div>
              <div class="d-flex justify-content-center">
                  <div class="enlargeable-container">
                      <img src="https://firebasestorage.googleapis.com/v0/b/resume-84d0c.appspot.com/o/capoo2.png?alt=media&token=a8cea5f3-2743-4e64-a036-f1b16cfd46d4"
                          class="img-fluid modal-img enlargeable" alt="">
                  </div>
              </div>
              <div class="project-modal-title">
                  <span class="SecondTitle">遊玩畫面</span>
                  <span class="project-modal-img-content">可透過按鈕進行攻擊，會造成敵我雙方的損血</span>
              </div>
          </div>
      </div>
  </div>
</div>
</class>

<class class="modal fade" id="back"  data-bs-keyboard="false" tabindex="-1"
aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog modal-xl">
  <div class="modal-content">
      <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <div class="project-modal-title">
              <span class="SecondTitle">後端程式碼</span>
              <span class="information">第一次寫Node.js Api</span>
          </div>

          <div class="project-modal-content">
              <span>前端畫面是透過香水購物平台為主<br>主要透過前端畫面網頁設計與後端API串接。</span>
              <div class="vr"></div>
              <span>設計規則：香水、淡色系<br>開發方式：Node.js express, RWD, Bootstrap</span>
          </div>
          <div class="bg-light model-bgpd">
              <div class="d-flex justify-content-center">
                  <div class="enlargeable-container"></div>
                  <img src="https://firebasestorage.googleapis.com/v0/b/resume-84d0c.appspot.com/o/delete.png?alt=media&token=c1a9bef0-271f-4df7-a51e-66327c7f3c97"
                      class="img-fluid modal-img enlargeable" alt="">
              </div>

              <div class="project-modal-title">
                  <span class="SecondTitle">刪除按鈕</span>
                  <span class="project-modal-img-content">點擊刪除時會透過後端將資料刪除</span>
              </div>
              <div class="d-flex justify-content-center">
                  <div class="enlargeable-container">
                      <img src="https://firebasestorage.googleapis.com/v0/b/resume-84d0c.appspot.com/o/patch.png?alt=media&token=bee4cba4-6010-4119-957e-5a6fbc9ebf95"
                          class="img-fluid modal-img enlargeable" alt="">
                  </div>
              </div>
              <div class="project-modal-title">
                  <span class="SecondTitle">編輯按鈕</span>
                  <span class="project-modal-img-content">點擊編輯時會將前端更改的訊息傳至後端並更改內容</span>
              </div>
          </div>
      </div>
  </div>
</div>
</class>

<div class="goTop">
  <a href="#" class="goTopBtn jq-goTop">
      <i class="bi bi-arrow-up-circle-fill"></i>
  </a>
</div>

`,
  mounted() {
    $(document).ready(function () {
      $(".enlargeable").on("click", function () {
        var src = $(this).attr("src");
        var enlargedImage = $("<img>")
          .attr("src", src)
          .addClass("enlarged-image");
        var enlargedContainer = $("<div>")
          .addClass("enlarged-container")
          .append(enlargedImage);
        $("body").append(enlargedContainer);

        enlargedContainer.on("click", function () {
          $(this).remove();
        });
      });
    });
    $(function () {
      $(document).on("click", ".jq-adClose", function (event) {
        event.preventDefault();
        $(".adBox").fadeOut();
      });

      $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
          if ($(".goTop").hasClass("hide")) {
            $(".goTop").toggleClass("hide");
          }
        } else {
          $(".goTop").addClass("hide");
        }
      });

      $(document).on("click", ".jq-goTop", function (e) {
        e.preventDefault();
        $("html,body").animate(
          {
            scrollTop: 0,
          },
          600
        );
      });
    });
  },
};
