$(function () {
  $('.product__items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<button class="prev-arrow"><svg width="10" height="18" viewbox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1L1 9L9 17" stroke="white" /></svg></button>',
    nextArrow:'<button class="next-arrow"><svg width="10" height="18" viewbox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L9 9L1 1" stroke="white" /></svg></button>',
    infinite: false,
    responsive:[
      {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        variableWidth: false,
      }
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
      }
    },
    ]
  });
  $('.blog__items').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '50px',
    arrows: false,
    responsive:[
      {
      breakpoint: 1480,
      settings: {
        slidesToShow: 3,
      }
    },
      {
      breakpoint: 1140,
      settings: {
        slidesToShow: 2,
      }
    },
      {
      breakpoint: 730,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        centerPadding: '0px',
      }
    },
      {
      breakpoint: 370,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        centerPadding: '0px',
      }
    },
    ]
  });
  $('.star').rateYo({
    starWidth: "20px",
    readOnly: true,
    spacing: "4px",
    starSvg:'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M0.0521336 7.67185C0.183058 7.26687 0.542259 6.97923 0.967226 6.94093L6.73977 6.41678L9.0224 1.07408C9.1907 0.682532 9.57401 0.429077 9.9999 0.429077C10.4258 0.429077 10.8091 0.682532 10.9774 1.075L13.26 6.41678L19.0335 6.94093C19.4577 6.98015 19.816 7.26687 19.9477 7.67185C20.0794 8.07683 19.9577 8.52102 19.6368 8.80103L15.2735 12.6277L16.5601 18.2954C16.6543 18.7122 16.4925 19.1429 16.1468 19.3929C15.9609 19.5272 15.7435 19.5955 15.5242 19.5955C15.3351 19.5955 15.1476 19.5446 14.9793 19.4438L9.9999 16.4678L5.02235 19.4438C4.65812 19.663 4.19897 19.643 3.85396 19.3929C3.50803 19.1422 3.34644 18.7113 3.44059 18.2954L4.72724 12.6277L0.363878 8.80179C0.0429783 8.52102 -0.0795536 8.07759 0.0521336 7.67185Z" fill="#FFC107"/></g><defs><clipPath id="clip0"><rect width="20" height="20" fill="white" transform="matrix(-1 0 0 1 20 0)"/></clipPath></defs></svg>'
  });

  $('[data-countdown]').each(function() {
  var $this = $(this), finalDate = $(this).data('countdown');
  $this.countdown(finalDate, function(event) {
    $this.html(event.strftime('%H:%M:%S'));
  });
});
 $('.menu__btn').on('click', function () {
  $('.menu__list').toggleClass('menu__list--active')
});
});