$(document).ready(function() {

    $(".one>div:nth-child(1)").mouseenter(function(){
        $(".contents").css({
            "background":"url('./images/study1.png')", 
            "background-repeat" : "no-repeat", 
            "background-position":"center center",
            "background-size":'cover'
        
        })
        $(".one>div:nth-child(1)").mouseleave(function () {
            $(".contents").css({
              'background-image': ''
            })
          })

    })

    $(".one>div:nth-child(3)").mouseenter(function(){
        $(".contents").css({
            "background":"url('./images/study2.png')", 
            "background-repeat" : "no-repeat", 
            "background-position":"center center",
            "background-size":"cover"
        
        })

        $(".one>div:nth-child(3)").mouseleave(function () {
            $(".contents").css({
              'background-image': ''
            })
          })

    })

    $(".one>div:nth-child(5)").mouseenter(function(){
        $(".contents").css({
            "background":"url('./images/study3.jpg')", 
            "background-repeat" : "no-repeat", 
            "background-position":"center center",
            "background-size":"cover"
        
        })
        $(".one>div:nth-child(5)").mouseleave(function () {
            $(".contents").css({
              'background-image': ''
            })
          })
    })

    $(".one>div:nth-child(7)").mouseenter(function(){
        $(".contents").css({
            "background":"url('./images/study4.jpg')", 
            "background-repeat" : "no-repeat", 
            "background-position":"center center",
            "background-size":"cover"
        
        })
        $(".one>div:nth-child(7)").mouseleave(function () {
            $(".contents").css({
              'background-image': ''
            })
          })
    })

























    
});