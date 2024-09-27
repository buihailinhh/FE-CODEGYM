
        const icons = document.querySelectorAll('.icon');
        const contentBox = document.getElementById('circleContent');

        icons.forEach(icon => {
            icon.addEventListener('click', () => {
                const content = icon.getAttribute('data-content');
                contentBox.innerHTML = content;

                // Xoay vòng tròn khi nhấn vào icon
                icons.forEach(i => i.classList.remove('active'));
                icon.classList.add('active');

                const index = Array.from(icons).indexOf(icon);
                const rotateDegree = index * -60; // 60 độ mỗi lần xoay để phù hợp với số lượng icon

                document.querySelector('.circle').style.transform = `rotate(${rotateDegree}deg)`;
            });
        });
    // slick main__6
    $(document).ready(function(){
        $('.slick-slider').slick({
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 3, // Số ảnh hiển thị cùng lúc
            arrows: true,   // Hiển thị nút điều hướng
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            speed: 300,
            cssEase: 'ease',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    });
    






// main_8 slick
      
$('.image-slider').slick({
    slidesToShow: 3,     // Số item hiển thị cùng lúc
    slidesToScroll: 1,   // Số item sẽ cuộn khi nhấp chuột
    autoplay: true,      // Tự động cuộn
    autoplaySpeed: 2000, // Tốc độ tự động cuộn (ms)
    arrows: true,        // Hiển thị nút điều hướng
    dots: true,          // Hiển thị nút chỉ định vị trí
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

// main_8 slick
      
$('.slider').slick({
    slidesToShow: 3,     // Số item hiển thị cùng lúc
    slidesToScroll: 1,   // Số item sẽ cuộn khi nhấp chuột
    autoplay: true,      // Tự động cuộn
    autoplaySpeed: 2000, // Tốc độ tự động cuộn (ms)
    arrows: true,        // Hiển thị nút điều hướng
    dots: true,          // Hiển thị nút chỉ định vị trí
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // slick video nhỏ main__10-content
 
    
        $('.video-small-carousel').slick({
            slidesToShow: 3,  // Hiển thị 3 video nhỏ cùng lúc
            slidesToScroll: 1,
            autoplay: true,  // Tự động chạy
            autoplaySpeed: 2000,  // Tốc độ chạy, tính bằng ms
            dots: true,  // Hiển thị các dấu tròn chỉ mục
            arrows: true,  // Hiển thị nút điều hướng
        });

        // js main_10-content
        function changeVideo(videoId) {
            // Cập nhật src của video lớn khi nhấp vào video nhỏ
            document.getElementById('main-video').src = 'https://www.youtube.com/embed/' + videoId;
        }
    


