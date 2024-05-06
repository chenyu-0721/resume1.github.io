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

                     <span class="navbar_span">服務項目</span>
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
         <div class="col">
             <div class="card shadow-sm">
                 <img src="./img/perfumeCover.jpg" class="card-img-top secondImg">
                 <div class="card-body">
                     <span class="SecondTitle">香水購物平台</span>
                     <br>
                     <span class="information">精緻香氛，尊享品質，網上選購便利。</span>
                     <div class="tag-content ">
                         <span class="hashtag">Node.js express</span>
                         <span class="hashtaghashtag">響應式設計</span>
                         <span class="hashtag">Bootstrap</span>
                     </div>
                 </div>
             </div>
         </div>
         <div class="col">
             <div class="card shadow-sm">
                 <img src="./img/drinkCover.jpg" class="card-img-top secondImg">
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
         <div class="col">
             <div class="card shadow-sm">
                 <img src="./img/gameCover.jpg" class="card-img-top secondImg">
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
         <div class="col">
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





`,
};
