"use strict";

$(document).ready(function() {
//     window.onload = function() {
//         alert("The page has finished loading!")
//     }
//
//     // let contents = $("#main").html();
//     // alert(contents);
//
//     let contents = $("#main-list").html();
//     alert(contents);
// //    when the same ID is set for two elements JQuery selects the first one to appear in the document
//
//

    // $(".codeup").css("border", "1px solid red")

    // $("li").css("font-size", "20px");
    //
    // $("h1, p, li").css("background-color", "yellow");
    //
    // let contents = $("h1").html();
    // alert(contents)

    ///////////////////////////////////////////
    //MOUSE EVENTS//

    $("h1").click(function(){
        $(this).css("background-color", "orange");
    })

    $("p").dblclick(function (){
        $(this).css("font-size", "18px");
    })

    $("li").hover(
        function() {
            $(this).css("color", "red");
        },
        function () {
            $(this).css("color", "black");
        }
    )

});

