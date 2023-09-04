$(document).ready(function () {
    $(".add").click(function () {
        $(".remove").removeAttr("disabled")
        /*  $("ul li").last().after("<li>Jquery</li>") */
        $("ul li").last().clone().insertAfter("li:last")
        cli = $("ul li").length - 3
        console.log(cli);
        if (cli > 9) $(this).attr("disabled", "disabled")
    })

    $(".remove").click(function () {
        $(".add").removeAttr("disabled")
        var i = $("ul li").length
        if (i < 4) {
            $(this).attr("disabled", "disabled")
        } else $("ul li").last().remove()
    })

})