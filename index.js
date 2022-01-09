$(document).ready(function () {
  owl_carousel();
  function owl_carousel() {
    $(".owl-carousel").owlCarousel({
        loop: false,
        margin: 20,
        dots:false,
        responsive: {
          0: {
            items: 1,
            dots:true,
          },
          768:{
            items: 2,
            navText:['<img src="image/prev.png">','<img src="image/next.png">'],
            nav: true,
          },
          1200: {
            items: 4,
          },
        },
      });
  }

  
  const step_card = `
      <div class="search-step">
          <div class="text-center">
              <span class="title-status focus-text">วิธีค้นหาเอกสารที่ได้รับการรับรอง</span>
          </div>
          <div class="underline scale-center"></div>
          <div class="container-card">
              <div class="owl-carousel owl-theme ani-fade-in">
                  <div class=" step-card hvr-grow-shadow">
                      <div class="images-card w-100">
                          <img src="image/step1.png" alt="">
                      </div>
                      <span class="title-card">ขั้นตอนที่ 1</span>
                      <p class="details-card">กรอกรหัส / ID เอกสาร</p>
                  </div>
                  <div class=" step-card hvr-grow-shadow">
                      <div class="images-card w-100">
                          <img src="image/step2.png" alt="">
                      </div>
                      <span class="title-card">ขั้นตอนที่ 2</span>
                      <p class="details-card">กดปุ่มค้นหา / กด Enter</p>
                  </div>
                  <div class=" step-card hvr-grow-shadow">
                      <div class="images-card w-100">
                          <img src="image/step3.png" alt="">
                      </div>
                      <span class="title-card">ขั้นตอนที่ 3</span>
                      <p class="details-card">ผลลัพธ์ที่ได้จะปรากฏด้านล่าง</p>
                  </div>
                  <div class=" step-card hvr-grow-shadow">
                      <div class="images-card w-100">
                          <img src="image/step4.png" alt="">
                      </div>
                      <span class="title-card">ขั้นตอนที่ 4</span>
                      <p class="details-card">กดปุ่ม “ไปยังเอกสาร” เพื่อเข้าถึงเอกสาร</p>
                  </div>
              </div>
          </div>
      </div>
  `;
  function search_file() {
        let search_id = $("#searchBar").val();
        const read_file = `
                <div class="read-file-wrapper">
                    <span class="title-status focus-text text-center">เอกสาร #${search_id}</span>
                    <div class="underline scale-center"></div>
                    <div class="d-flex justify-content-center file ani-fade-in">
                        <img src="image/file.png" alt="" class="">
                    </div>
                    <div class="text-center read-file">
                    <span class="d-block">คุณสามารถเข้าถึง / ดาวน์โหลด เอกสาร</span>
                    <span class="d-block">ผ่านปุ่ม “ไปยังเอกสาร” ด้านล่าง</span>
                    </div>
                    <button class="btn-read d-flex align-items-center mx-auto mt-3 mt-sm-4">
                        <a href="https://check.unco-op.co.th/CHECK-CUSTOMER/CHECK-AND-VERIFY/${search_id}/${search_id}.pdf" target="_blank">
                        <span class="text-light">ไปยังเอกสาร</span>
                        </a>
                    </button>
                </div>
            `;
        const not_found = `
                    <div class="not-found-wrapper w-100">
                        <span class="title-status focus-text">ไม่พบรหัส หรือ ID เอกสาร</span>
                        <div class="underline scale-center "></div>
                        <div class="d-flex justify-content-center fadeInUp mt-3">
                            <img src="image/not-found.png" alt="" class="not-found ">
                        </div>
                    </div>
            `;
        if (isNaN(search_id) || search_id == "") {
            $(".js-wrapper").empty();
            $(".js-wrapper").append(not_found);
        } else {
            $(".js-wrapper").empty();
            $(".js-wrapper").append(read_file);
        }
    };
    function clear() {
        $("#searchBar").val("");
        $(".js-wrapper").empty();
        $(".js-wrapper").append(step_card);
        owl_carousel();
    };
  
  $("#searchBar").keyup(function (event) {
    let search_id = $("#searchBar").val();
    //keycode enter
    if (event.keyCode == 13) {
      search_file();
      $('.search-button').addClass('scale');
      setTimeout(function () {
        $('.search-button').removeClass('scale');
      },100)
    }
    //keycode backspace
    if (event.keyCode == 8 && (search_id == "" || search_id.length == 0)) {
      clear();
      $('.clear-search').addClass('scale');
        setTimeout(function () {
          $('.clear-search').removeClass('scale');
        },100)
    }
  });

  $(".search-button").on("click", function () {
    search_file();
  });

  $(".clear-search").on("click", function () {
    clear();
  });
  
});

// var animation = bodymovin.loadAnimation({
//   container: document.getElementById('file-bm'),
//   renderer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: ''
// })