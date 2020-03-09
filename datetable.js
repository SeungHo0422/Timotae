$(document).ready(function () {

    var table = $("#table").DataTable({
        responsive: true,
        orderMulti: true,
        order : [[1, 'asc']],
        columns: [
            {"data": "#"},
            {"data": "구"},
            {"data": "장소"}, 
            {"data": "개수"},
            {"data": "수혜처"}

        ],
        "language": {
            "emptyTable": "데이터가 없어요.",
            "lengthMenu": "페이지당 _MENU_ 개씩 보기",
            "info": "현재 _START_ - _END_ / _TOTAL_건",
            "infoEmpty": "데이터 없음",
            "infoFiltered": "( _MAX_건의 데이터에서 필터링됨 )",
            "search": "에서 검색: ",
            "zeroRecords": "일치하는 데이터가 없어요.",
            "loadingRecords": "로딩중...",
            "processing":     "잠시만 기다려 주세요...",
            "paginate": {
                "next": "다음",
                "previous": "이전"
            }
        },
        /*
        "footerCallback":function(){
            var api = this.api(), data;
            var big_result = 0;
            var small_result = 0;
            api.column(3, {search:'applied'}).data().each(function(data,index){
                big_result += parseInt(data.split(" : ")[1].split("장")[0]);
                small_result += parseInt(data.split(" : ")[2].split("장")[0]);
                console.log(big_result)
                $('#').html( "대형 : " + big_result.toLocaleString()+" 소형 : " + small_result.toLocaleString());
            }
            );
            
        },
        #에 내용을 보여줄 곳의 id 태그를 입력해주세요 ㅎㅎ
       */
    }); 
    $('#table_filter').prepend('<select id="select"></select>');
    $('#table > thead > tr').children().each(function (indexInArray, valueOfElement) { 
        $('#select').append('<option>'+valueOfElement.innerHTML+'</option>');
    });
    
    $('.dataTables_filter input').unbind().bind('keyup', function () {
        var colIndex = document.querySelector('#select').selectedIndex;     
        table.column(colIndex).search(this.value).draw();
        
       
    });


});
 

// datetable.html을 참고해주세요