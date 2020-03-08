var check = 0;

function size(){
    if($(window).width() < 767.98){
        if(check == 0){
            for(var i = 0; i<$('#table tbody tr').length + 1; i++){
                var split_maskNum = $('#table tr').eq(i).find('td:eq(2)').text().split(",");
                $('#table tr').eq(i).find('td:eq(2)').html("<td>"+split_maskNum[0] + "<br>" + split_maskNum[1]+"</td>");
            }
            check = 1;
        }
    }else{
        if(check == 1){
            for(var i = 0; i<$('#table tbody tr').length + 1; i++){
                var maskNum = $('#table tr').eq(i).find('td:eq(2)').text();
                console.log(maskNum.split(" ").length);
                
                $('#table tr').eq(i).find('td:eq(2)').html("<td>대형 : " + maskNum.split(" ")[2] + ", 소형 : " + maskNum.split(" ")[5]);
            }
            check = 0;
        }
    }
}

(function($) {
    $(window).on('load', function(){
        size();
    }
    );
})(jQuery);

(function($) {
    $(window).on('resize', function () {
        size();
    });
})(jQuery);


