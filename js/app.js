$(document).ready(function () {
    /*  $('.box').fadeOut(5000)
     $('.box').fadeIn(5000) */
    /* $('.box').hide(3000)
     $('.box').show(5000)*/
    /*  $('.box').slideUp(5000)
       $('.box').slideDown(5000) */

    /*     $(".btn1").click(function () {
            $('.box').fadeOut(3000).delay(2000).show(3000)
        })
     */
    /*     $(".btn1").click(function () {
            $('.box').fadeToggle(3000)
            $('.box').toggle(2000)
            $('.box').slideToggle(2000)
        }) */
    /*   $(".btn1").click(function () {
          $('.box').fadeTo(5000, 0.3)
      }) //btn1 click */
    /*     $('.btn2').click(function () {
            $(".box").animate({
                width: "100px",
                height: "100px",
                opacity: 0.5
            }, 5000)
        })
    
        $('.btn1').click(function () {
            $(".box").animate({
                width: "400px",
                height: "400px",
                opacity: 1
            }, 5000)
        }) */

    /*     $('.btn1').click(function () {
            $(".box").animate({
                marginLeft: "+=20px",
                height: "+=20px",
            }, 1000)
        })
        $('.btn2').click(function () {
            $(".box").animate({
                width: "-=20px",
                height: "-=20px",
            }, 1000)
        }) */

    /*   $('.btn1').click(function () {
          $(".box").animate({
              marginLeft: "600px",
              height: "500px",
          }, 5000)
      })
  
      $(".btn2").click(function () {
          $(".box").stop()
      })
   */

    /*     $("p").text("HTML")
        $("p").html("<b>HTML</b>") */
    $("p").first().appendTo("h3")

    $("p").first().append("<h6>CSS</h6>")

})