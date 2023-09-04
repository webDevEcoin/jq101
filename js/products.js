$(document).ready(function () {

    $(document).on('keyup change', 'input[name=qty]', function (event) {
        event.preventDefault();
        $(".vente").each(function (index, el) {
            var price = $(this).find('input[name=price]').val()
            var qty = $(this).find('input[name=qty]').val()
            console.log(price * qty);

            $(this).find('input[name=total]').val(price * qty)

        });
    });




    /*****************************************************************/
    $(document).on('click', '#add', function (event) {
        event.preventDefault();
        $(".vente").last().clone(true).insertAfter('.vente:last')
    });

    /*****************************************************************/
    $(".vente").on('click', '.remove', function (event) {
        event.preventDefault();
        var rem = $(this).parent().parent()
        //console.log(rem);
        var cpt = $(".vente").length
        if (cpt > 1) {
            rem.remove()
        } else {
            $(this).attr("disabled", "disabled");
            $(this).css({
                background: 'grey',
            });
        }
    });


    /*******************************************************************/
});