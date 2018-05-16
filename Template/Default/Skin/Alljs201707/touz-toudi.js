$(function () {
         $(".toudi").click(function () {
             $('.downloadBox').show();
             $(".tc").hide();
             $(".download").show();
         });
         $(".download .title .close").click(function () {
             $(".downloadBox").hide();
         });
         $(".tc .title .close").click(function () {
             $(".downloadBox").hide();
         });
     });
