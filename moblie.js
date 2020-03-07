

(function($) {
    $(window).on('load', function () {
    console.log("onload");
    if($(window).width() < 767.98){
        
        for(var i = 0; i<$('#table td').length; i++){
            var split_maskNum = $('#table tr').eq(i).find('td:eq(2)').text().split(",");
            $('#table tr').eq(i).find('td:eq(2)').html("<td>"+split_maskNum[0] + "<br>" + split_maskNum[1]+"</td>");
        }
    }
    });
})(jQuery);