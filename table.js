//테이블에 table id 추가해서 사용해주세요

function big_count(name){
    var big_sum = 0;
    var row_size =  $('#table td').length;

    for(var i = 0; i < row_size;i++){ 
        var state = $('#table tr').eq(i).find('td:eq(0)').text();

        if(name == state){ // 검색같과 해당 열의 구와 일치하는지 확인
            var size = $('#table tr').eq(i).find('td:eq(2)').text();
            var big_num = parseInt(size.split(",")[0].split(":")[1]);//대형 : 30장, 소형 : 0장
            big_sum += big_num; 
        }
    }
    
    return big_sum;
}

function small_count(name){
    var small_sum = 0;
    var row_size =  $('#table td').length;

1
    for(var i = 0; i < row_size;i++){ 
        var state = $('#table tr').eq(i).find('td:eq(0)').text();

        if(name == state){ // 검색같과 해당 열의 구와 일치하는지 확인
            var size = $('#table tr').eq(i).find('td:eq(2)').text();
            var small_num = parseInt(size.split(",")[1].split(":")[1]);//대형 : 30장, 소형 : 0장
            small_sum += small_num; 
        }
    }   

    return small_sum;
}