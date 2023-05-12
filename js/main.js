window.addEventListener("scroll", function (event) {
    var scrollTop = this.document.documentElement.scrollTop
    if (scrollTop > 100) {
        $("#header").addClass("fixed");
    } else  {
        $("#header").removeClass("fixed");
    }
}); 

var listBanner = ["./img/Banner/web-1.png", "./img/Banner/web-2.png", "./img/Banner/web-3.jpg", "./img/Banner/web-4.png"]

var banner = document.querySelector("#main .banner .owl-carousel")

banner.innerHTML = listBanner.reduce((result, element, index) => {
    return result += `<div class="item">
                            <div class="img" style="background-image: url(${element});">
                                <a class="linkBanner" href="#"></a>
                                <div class="content">
                                    <a href="#"> 
                                        <p><img src="./img/Banner/Asset-1.png" alt="..."></p>
                                        <p>Đăng kí lắp đặt</p>
                                    </a>
                                    <a href="#">
                                        <p><img src="./img/Banner/Asset-2.png" alt="..."></p>
                                        <p>Gia hạn thuê bao</p>
                                    </a>
                                    <a href="#">
                                        <p><img src="./img/Banner/Asset-3.png" alt="..."></p>
                                        <p>Tìm đại lý gần nhất</p>
                                    </a>
                                </div>
                            </div>
                        </div>`
}, "")

$('#main .banner .owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    margin: 0,
    items: 1,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
})

var listNewsHot = [
    { img: "./img/NewsHot/1.png", title: "GIỚI THIỆU KÊNH HƯỚNG DẪN KHÁCH HÀNG – KÊNH 11", time: "11/04/2023" },
    { img: "./img/NewsHot/2.jpg", title: "THÔNG BÁO: TRUYỀN HÌNH AVG CẬP NHẬT DANH SÁCH KÊNH TỪ 29/3/2023", time: "28/03/2023" },
    { img: "./img/NewsHot/3.png", title: "THÔNG BÁO: TRUYỀN HÌNH AVG CẬP NHẬT DANH SÁCH KÊNH TỪ 29/3/2023", time: "14/03/2023" },
    { img: "./img/NewsHot/4.jpg", title: "HƯỚNG DẪN KHÔI PHỤC MẬT KHẨU APP ZIZI", time: "03/03/2023" },
    { img: "./img/NewsHot/5.png", title: "CHÀO XUÂN QUÝ MÃO – NHẬN BÃO QUÀ TẶNG", time: "16/01/2023" },
    { img: "./img/NewsHot/6.png", title: "TIẾN VỀ ĐẠI LỄ – TẶNG 50% KHI GIA HẠN CƯỚC", time: "28/04/2023" },
    { img: "./img/NewsHot/7.png", title: "TRỌN VẸN SEA GAMES 32 TRÊN TRUYỀN HÌNH AVG", time: "26/04/2023" },
    { img: "./img/NewsHot/8.png", title: "DỊCH VỤ SHIP COD THẺ CÀO NẠP CƯỚC TRUYỀN HÌNH AVG", time: "20/04/2023" }
]

var newsHot = document.querySelector("#main .news-hot .owl-carousel")

newsHot.innerHTML = listNewsHot.reduce((result, element) => {
    return result += `<div class="item">
                            <a href="#">
                                <img src="${element.img}" alt="">
                                <div>
                                    <p>${element.title}</p>
                                    <i class="bi bi-calendar3-week"></i> <span> ${element.time}</span>
                                </div>
                            </a>
                        </div> `
}, "")

$('#main .news-hot .owl-carousel').owlCarousel({
    loop: true,
    slideBy: 3,
    margin: 30,
    dots: false,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    navContainer: ".nav-news-hot",
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

var listSlide = ["./img/Slide/j1.jpg","./img/Slide/j2.jpg","./img/Slide/j3.jpg","./img/Slide/j4.jpg","./img/Slide/j5.jpg","./img/Slide/j6.jpg","./img/Slide/j7.jpg","./img/Slide/j8.jpg","./img/Slide/j9.jpg","./img/Slide/j10.jpg","./img/Slide/j11.jpg","./img/Slide/j12.jpg","./img/Slide/j13.jpg","./img/Slide/j14.jpg","./img/Slide/p1.png","./img/Slide/p2.png","./img/Slide/p3.png","./img/Slide/p4.png","./img/Slide/p5.png","./img/Slide/p6.png","./img/Slide/p7.png","./img/Slide/p8.png","./img/Slide/p9.png","./img/Slide/p10.png","./img/Slide/p11.png","./img/Slide/p12.png","./img/Slide/p13.png"]

var slide = document.querySelector("#main .slide .owl-carousel")

slide.innerHTML = listSlide.reduce((result, element) => {
    return result += `<div class="item p-2">
                            <div class="content">
                            <img src="${element}" alt="...">
                            </div>
                        </div> `
}, "")

$('#main .slide .owl-carousel').owlCarousel({
    loop: true,
    slideBy: 1,
    nav: false,
    dots: false,
    margin: 30,
    // autoplay: true,
    // autoplayTimeout: 7000,
    // autoplayHoverPause: true,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 5
        },
        1000: {
            items: 7
        }
    }
})


