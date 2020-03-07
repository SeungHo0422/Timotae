jQuery(function($){ 
    $("#table").DataTable(); 
}); 
$("#table").DataTable({
    // 표시 건수기능 숨기기
    lengthChange: true,
    // 검색 기능 숨기기
    searching: false,
    // 정렬 기능 숨기기
    ordering: false
    ,
    // 정보 표시 숨기기

    info: true,
    // 페이징 기능 숨기기
    paging: true,

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
    }
});

// datetable.html을 참고해주세요