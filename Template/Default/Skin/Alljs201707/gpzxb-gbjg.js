$(function(){
  Table2MoveRight();
  Table2MoveLeft();
});

    //右翻
    function Table2MoveRight(){
        var j = 0;
        $("#lngbbd_Table").find("tr:eq(0)").find(".tips-dataR").each(function (i) {
            if ($(this).css("display") != "none") {
                j = i + 7;
                return false
            }
        });
        $("#lngbbd_Table").find(".tips-dataR").hide();
        $("#lngbbd_Table").find(".move_th").show();
        var len = $("#lngbbd_Table").find("tr:eq(0)").find(".tips-dataR").length;
        $("#lngbbd_Table").find("tr").each(function (i) {
            for (var k = 0; k < 7; k++) {
                var num = j + k;
                if (num < len) {
                    $(this).find(".tips-dataR:eq(" + num + ")").show()
                } else {
                    $(this).find(".tips-dataR:eq(" + (len - k) + ")").show();
                    $("#Table2Right").parent().hide()
                }
            }
        })
    }
    //左翻
    function Table2MoveLeft() {
        var j = 0;
        $("#lngbbd_Table").find("tr:eq(0)").find(".tips-dataR").each(function (i) {
            if ($(this).css("display") != "none") {
                j = i - 7;
                return false
            }
        });
        $("#lngbbd_Table").find(".tips-dataR").hide();
        $("#lngbbd_Table").find(".move_th").show();
        var len = $("#lngbbd_Table").find("tr:eq(0)").find(".tips-dataR").length;
        $("#lngbbd_Table").find("tr").each(function (i) {
            if (j <= 0) $("#Table2Left").parent().hide();
            for (var k = 0; k < 7; k++) {
                var num = j + k;
                if (num > 0) {
                    $(this).find(".tips-dataR:eq(" + num + ")").show()
                } else if (num == 0) {
                    $(this).find(".tips-dataR:eq(" + num + ")").show()
                } else {
                    $(this).find(".tips-dataR:eq(" + (7 + num) + ")").show()
                }
            }
        })
    }
