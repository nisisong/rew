// one
$("#summary_topScroller").scroll(function(){
   $("#summary_tableData").scrollLeft($(this).scrollLeft()); // 横向滚动条
});
$("#summary_tableData").scroll(function(){
   $("#summary_topScroller").scrollLeft($(this).scrollLeft());
});  
$(function(){
	var aw=$("#summary_tableData table").width();
    var ah=$("#summary_tableColumn").height();
	var bh=$("#summary_tableData").height();
	// console.log(ah);
	// console.log(aw);
	$("#summary_topScroller div").css("width",aw+"px");
	$("#summary_tableData").css({top:-(ah+56)+"px"})
	$("#summary_tableLayout").css("height",bh+"px");
})
// two
$("#table_assetDebt_topScroller").scroll(function(){
   $("#table_assetDebt_tableData").scrollLeft($(this).scrollLeft()); // 横向滚动条
});
$("#table_assetDebt_tableData").scroll(function(){
   $("#table_assetDebt_topScroller").scrollLeft($(this).scrollLeft());
});  
$(function(){
	var aw=$("#table_assetDebt_tableData table").width();
    var ah=$("#table_assetDebt_tableColumn").height();
    var bh=$("#table_assetDebt_tableData").height();
	$("#table_assetDebt_topScroller div").css("width",aw+"px");
	$("#table_assetDebt_tableData").css({top:-(ah+56)+"px"});
	$("#table_assetDebt_tableLayout").css("height",bh+"px");
})
// three
$("#table_profit_topScroller").scroll(function(){
   $("#table_profit_tableData").scrollLeft($(this).scrollLeft()); // 横向滚动条
});
$("#table_profit_tableData").scroll(function(){
   $("#table_profit_topScroller").scrollLeft($(this).scrollLeft());
}); 
$(function(){
	var aw=$("#table_profit_tableData table").width();
    var ah=$("#table_profit_tableColumn").height();
    var bh=$("#table_profit_tableData").height();
	$("#table_profit_topScroller div").css("width",aw+"px");
	$("#table_profit_tableData").css({top:-(ah+56)+"px"});
	$("#table_profit_tableLayout").css("height",bh+"px");
})