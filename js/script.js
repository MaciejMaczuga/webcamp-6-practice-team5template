$(".slider").slick({
    dots: true,
    autoplay: true,
    arrows: false,
  });
  $(".promo-slider").slick({
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 979,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  function classToggle () {
    const nav = document.getElementsByClassName('nav-wrapper');
    nav[0].classList.toggle('show');
  }
  document.querySelector('.fa-bars').addEventListener('click', classToggle)
