$(document).ready(function() {
    // Form validation
    $('#subscribeForm').on('submit', function(e) {
      e.preventDefault();
      var name = $('#name').val();
      var phone = $('#phone').val();
  
      if (name === '' || phone === '') {
        alert('Please fill out both fields.');
      } else {
        alert('Subscribed successfully!');
        $('#name').val('');
        $('#phone').val('');
      }
    });
  
    // Clients scrolling functionality
    const clientWidth = $('.client-logos img').outerWidth(true); // Total width of an image including margin
    const totalImages = $('.client-logos img').length; // Total images count
    const visibleImages = 5; // Number of images to be visible
    const totalScrollWidth = (totalImages - visibleImages) * clientWidth; // Total scroll width
  
    $('#next').click(function() {
      $('#clientContainer').animate({ scrollLeft: `+=${clientWidth * visibleImages}` }, 500);
    });
  
    $('#prev').click(function() {
      $('#clientContainer').animate({ scrollLeft: `-=${clientWidth * visibleImages}` }, 500);
    });
  
  });
  

//   client section start 

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});
// client section end 