export default {
  data() {
    return {
      isCarouselInitialized: false,
    };
  },
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
                      <span class="navbar_span nav-font">首頁</span>
                  </a>
              </li>
              <li class="nav-item">
                  <a href="#/work" class="nav-link " aria-current="page">

                      <span class="navbar_span nav-font">作品集</span>
                  </a>
              </li>
              <li class="nav-item">
                  <a href="#serve" class="nav-link anchor" aria-current="page">

                      <span class="navbar_span nav-font">服務項目</span>
                  </a>
              </li>
              <li class="nav-item">
                  <a href="#blog" class="nav-link anchor" aria-current="page">

                      <span class="navbar_span nav-font">精選文章</span>
                  </a>
              </li>
              <li class="nav-item">
                  <a href="#callme" class="nav-link anchor " aria-current="page">

                      <span class="navbar_span nav-font">聯絡我</span>
                  </a>
              </li>
          </ul>
      </div>
  </div>
</nav>



<div class="row featurette">
  <div class="col-md-5 title">
      <h2 class="featurette-heading">嗨！我是 陳冠宇</h2>
      <p class="title-p">具有一年經驗的前端學習者<br></p>
      <span class="title-span">熱衷於網頁製作，勤奮的學習</span>
      <div class="title-icon">
          <a href="https://www.instagram.com/chen012355/"><i class="bi bi-instagram icon"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100000503690781&locale=zh_TW"><i
                  class="bi bi-facebook icon"></i></a>
          <a href="https://github.com/chenyu-0721/Readme"><i class="bi bi-github icon"></i></a>
      </div>
  </div>
  <div class="col-md-7 ">
      <img src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="img-fluid title-img">
  </div>
</div>




<h1 class="text-center project-Introduction-title">作品介紹</h1>


<div class="project-Introduction-perfume-img">
  <div class="position-relative">
      <div class="bg-light bg-opacity-50 box">
          <h2 class="box-title">香水購物平台</h2>
          <p class="box-content">精緻香氛，尊享品質，網上選購便利。</p>
          <div class="box-bigtag border-bottom ps-2">
              <span class="box-tag">Node.js express</span>
              <span class="box-tag">響應式設計</span>
              <span class="box-tag">Bootstrap</span>
          </div>
          <div class="d-flex justify-content-center box-button-top">
              <a class="btn btn-dark box-button" href="https://github.com/chenyu-0721/perfume2.0.github.io"
                  role="button">
                  完整內容
                  <i class="bi bi-arrow-right bi-right"></i>
              </a>
          </div>
      </div>
  </div>
</div>



<div class="project-Introduction-drink-img">
  <div class="position-relative">
      <div class=" bg-light bg-opacity-50  box-drink">
          <h2 class="box-title">快樂飲料店</h2>
          <p class="box-content">色彩繽紛，口感豐富，帶來快樂的飲品體驗。</p>
          <div class="box-bigtag border-bottom ps-2">
              <span class="box-tag">Node.js express</span>
              <span class="box-tag">響應式設計</span>
              <span class="box-tag">Pinia</span>
          </div>
          <div class="d-flex justify-content-center box-button-top">
              <a class="btn btn-dark box-button" href="https://github.com/chenyu-0721/drinkshop.github.io"
                  role="button">
                  完整內容
                  <i class="bi bi-arrow-right bi-right"></i>
              </a>
          </div>
      </div>
  </div>
</div>

<div class="project-Introduction-game-img">
  <div class="position-relative">
      <div class="position-absolute  bg-light bg-opacity-50 box">
          <h2 class="box-title">Capoo vs Rabbit</h2>
          <p class="box-content">機制出招，享受遊戲</p>
          <div class="box-bigtag border-bottom ps-2">
              <span class="box-tag">響應式設計</span>
              <span class="box-tag">Vue</span>
              <span class="box-tag">Bootstrap</span>
          </div>
          <div class="d-flex justify-content-center box-button-top">
              <a class="btn btn-dark box-button" href="https://github.com/chenyu-0721/monster.github.io"
                  role="button">
                  完整內容
                  <i class="bi bi-arrow-right bi-right"></i>
              </a>
          </div>
      </div>
  </div>
</div>

<div class="bg-light">

  <div id="serve">
      <h1 class="text-center project-Introduction-title">服務項目</h1>
  </div>
  <div class="container ">
      <div class="row row-cols-1 g-3  justify-content-center  ">
          <div class="border bg-dark text-white serviceContent-box ">
              前端開發
          </div>
          <div class="border bg-dark text-white serviceContent-box">
              RWD響應式設計
          </div>
          <div class="border bg-dark text-white serviceContent-box">
              Vue框架
          </div>
      </div>
  </div>
  <h1 class="text-center service-Introduction-title">想要瞭解關於我的資訊？</h1>
  <div class="text-center service-button-pd">
      <a class="btn btn-dark service-button" href="#" role="button">
          詳細內容前往
          <i class="bi bi-arrow-right bi-right"></i>
      </a>
  </div>
</div>

<div id="blog">
  <h1 class="text-center project-Introduction-title">精選文章</h1>
</div>
<div class="container owl-carousel">
  <div class="item">
      <img class="featured-img"
          src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
      <span class="featured-content"><a href="https://developer.mozilla.org/zh-TW/docs/Web/HTML">HTML：超文本標記語言
              - MDN Web Docs</a></span>
      <div class="featured-tag-pd">
          <span class="featured-tag">前端開發</span>
      </div>
  </div>
  <div class="item">
      <img class="featured-img"
          src="https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
      <span class="featured-content"><a
              href="https://developer.mozilla.org/zh-TW/docs/Learn/Getting_started_with_the_web/CSS_basics">CSS
              基本- 學習該如何開發Web | MDN</a></span>
      <div class="featured-tag-pd">
          <span class="featured-tag">前端開發</span>
      </div>
  </div>
  <div class="item">
      <img class="featured-img"
          src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
      <span class="featured-content"><a href="https://developer.mozilla.org/zh-TW/docs/Web/JavaScript">JavaScript -
              MDN Web
              Docs</a></span>
      <div class="featured-tag-pd">
          <span class="featured-tag">前端開發</span>
      </div>
  </div>
  <div class="item">
      <img class="featured-img"
          src="https://images.unsplash.com/photo-1555952494-efd681c7e3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
      <span class="featured-content"><a
              href="https://bootstrap5.hexschool.com/docs/5.0/getting-started/introduction/">Bootstrap</a></span>
      <div class="featured-tag-pd">
          <span class="featured-tag">前端開發</span>
      </div>
  </div>
  <div class="item">
      <img class="featured-img" src="/img/vue.jpg">
      <span class="featured-content"><a href="https://vuejs.org/">Vue.js</a></span>
      <div class="featured-tag-pd">
          <span class="featured-tag">前端框架</span>
      </div>
  </div>
  <div class="item">
      <img class="featured-img"
          src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
      <span class="featured-content"><a href="https://hackmd.io/@Heidi-Liu/note-git">Git</a></span>
      <div class="featured-tag-pd">
          <span class="featured-tag">版本控制</span>
      </div>
  </div>
  <div class="item">
      <img class="featured-img"
          src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
      <span class="featured-content"><a href="">Node.js</a></span>
      <div class="featured-tag-pd">
          <span class="featured-tag">後端開發</span>
      </div>
  </div>
  <div class="item">
      <img class="featured-img"
          src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
      <span class="featured-content"><a href="https://owlcarousel2.github.io/OwlCarousel2/">owl.carousel.js</a></span>
      <div class="featured-tag-pd">
          <span class="featured-tag">前端開發</span>
      </div>
  </div>
</div>

<div class="bg-light" id="callme">
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

<div class="goTop">
  <a href="#" class="goTopBtn jq-goTop">
      <i class="bi bi-arrow-up-circle-fill"></i>
  </a>
</div>



  `,
  mounted() {
    $(".owl-carousel").owlCarousel({
      loop: true, // 循環播放
      margin: 10, // 外距 10px
      nav: false, // 箭頭
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1, // 螢幕大小為 0~600 顯示 1 個項目
        },
        700: {
          items: 2, // 螢幕大小為 600~1000 顯示 3 個項目
        },
        1000: {
          items: 3, // 螢幕大小為 600~1000 顯示 3 個項目
        },
      },
    });

    $(".navbar-nav .nav-item .anchor").on("click", function (event) {
      event.preventDefault();

      var targetAnchor = $(this).attr("href");
      var targetPosition = $(targetAnchor).offset().top;

      // 使用动画效果滚动到目标位置
      $("html, body").animate({
        scrollTop: targetPosition,
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
