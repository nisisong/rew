// define(function (require, exports, module) {
    // var style = document.getEl$entById("style_type123").value;


    $(function(){
    	loadEvents();
    });

    //模板加载完成后，加载事件
  function loadEvents() {

        //成长性比较，左移
        $("#Table1Left").click(function () {
            $("#Table1").find("td").show();
            $("#Table1").find("th").show();
            $("#Table1Left").parent().hide();
            $("#Table1").find("tr:eq(0)").find("th:eq(6)").hide();
            $("#Table1").find("tr:eq(1)").find("th:gt(11)").hide();
            $("#Table1").find("tr:gt(1)").find(".tips-dataC:gt(11)").hide();
        });

        //成长性比较，右移
        $("#Table1Right").click(function () {
            $("#Table1").find("td").show();
            $("#Table1").find("th").show();
            $("#Table1Right").parent().hide();
            $("#Table1").find("tr:eq(0)").find("th:eq(4)").hide();
            $("#Table1").find("tr:eq(1)").find("th:lt(6)").hide();
            $("#Table1").find("tr:gt(1)").find(".tips-dataC:lt(6)").hide();
        });

        //估值比较，左移
        $("#Table2Left").click(function () {
            $("#Table2").find("td").show();
            $("#Table2").find("th").show();
            $("#Table2Left").parent().hide();
            $("#Table2").find("tr:eq(0)").find("th:eq(7),th:eq(8),th:eq(9),th:eq(10)").hide();
            $("#Table2").find("tr:eq(1)").find("th:gt(9)").hide();
            $("#Table2").find("tr:gt(1)").find(".tips-dataC:gt(10)").hide();
        });

        //估值比较，右移
        $("#Table2Right").click(function () {
            $("#Table2").find("td").show();
            $("#Table2").find("th").show();
            $("#Table2").find("tr:eq(0)").find("th:eq(4),th:eq(5),th:eq(6),th:eq(11)").hide();
            $("#Table2").find("tr:eq(1)").find("th:lt(10)").hide();
            $("#Table2").find("tr:gt(1)").find(".tips-dataC:lt(11)").hide();
        });

        //杜邦分析比较，左移
        $("#Table3Left").click(function () {
            $("#Table3").find("td").show();
            $("#Table3").find("th").show();
            $("#Table3").find("tr:eq(0)").find("th:eq(3),th:eq(6),th:eq(7)").hide();
            $("#Table3").find("tr:eq(1)").find("th:gt(7)").hide();
            $("#Table3").find("tr:gt(1)").find(".tips-dataC:gt(7)").hide();
        });

        //杜邦分析比较，右移
        $("#Table3Right").click(function () {
            $("#Table3").find("td").show();
            $("#Table3").find("th").show();
            $("#Table3").find("tr:eq(0)").find("th:eq(8),th:eq(4),th:eq(5)").hide();
            $("#Table3").find("tr:eq(1)").find("th:lt(8)").hide();
            $("#Table3").find("tr:gt(1)").find(".tips-dataC:lt(8)").hide();
        });

    };



//     //初始化
//     exports.loadEvents();
//
// });
