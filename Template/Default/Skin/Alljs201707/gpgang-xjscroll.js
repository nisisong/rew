$("#table_cashFlow_topScroller").scroll(function(){
   $("#table_cashFlow_tableData").scrollLeft($(this).scrollLeft()); // 横向滚动条
});
$("##table_cashFlow_tableData").scroll(function(){
   $("#table_cashFlow_topScroller").scrollLeft($(this).scrollLeft());
});
