$(function () {
         $(".announce").click(function () {
             $('.loadBox').show();
             $(".tc").hide();
             $(".load").show();
         });
         $(".load .title .close").click(function () {
             $(".loadBox").hide();
         });
         $(".tc .title .close").click(function () {
             $(".loadBox").hide();
         });
     });
