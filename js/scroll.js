var scroll = document.getElementById("scroll");
var searchScroll_wrap = document.getElementById("searchScroll_wrap");

var floor = document.getElementById("floor");
var f1 = document.getElementById("f1");
var f2 = document.getElementById("f2");
var f3 = document.getElementById("f3");
var f4 = document.getElementById("f4");
var f5 = document.getElementById("f5");
var f6 = document.getElementById("f6");
var f7 = document.getElementById("f7");
var f8 = document.getElementById("f8");
var f9 = document.getElementById("f9");
var floorTop = document.getElementById("floorTop");
var floors = document.getElementsByTagName("li");


var sidebarTop=document.getElementById("sidebarTop")
sidebarTop.onclick = function() {
    scrollMove(0)
    console.log(111)
}
// $(".sidebarTop").click(function(){
//     scrollMove(0)
//     console.log(11)
// })


// $(".floors").mouseenter(function(){
//     $(this).css("background","#ff8227")
// })
// $(".floors").mouseleave(function(){
//     $(this).css("background","none")
//     if()
//     // $(this).eq(index)
//     // $(".floors").eq($(this).index()).css("background","#ff8227").siblings(".floors").css("background","none")
//     // console.log
// })
window.onscroll = function() {
    var a = document.documentElement.scrollTop;
    if (a > 603) {
        scroll.style.transition = "0.5s";
        scroll.style.bottom = "0px";
    } else {
        scroll.style.bottom = "-150px";
    }
    var b = document.documentElement.scrollTop;
    if (b > 703) {
        searchScroll_wrap.style.display = "block";
    } else {
        searchScroll_wrap.style.display = "none";
    }

    if (a > 2501) {
        floor.style.display = "block";
        for (var w = 0; w < floors.length-1; w++) {
            floors[w].style.background = "none";
        }
        if (a >= 2425 && a < 3029) {
            f1.style.background = "#ff8227";
        } else if (a >= 3029 && a < 3740) {
            f2.style.background = "#ff8227";
        } else if (a >= 3740 && a < 4326) {
            f3.style.background = "#ff8227";
        } else if (a >= 4326 && a < 4912) {
            f4.style.background = "#ff8227";
        } else if (a >= 4912 && a < 5498) {
            f5.style.background = "#ff8227";
        } else if (a >= 5498 && a < 6084) {
            f6.style.background = "#ff8227";
        } else if (a >= 6084 && a < 6670) {
            f7.style.background = "#ff8227";
        } else if (a >= 6670 && a < 7256) {
            f8.style.background = "#ff8227";
        } else {
            f9.style.background = "#ff8227";
        }
    } else {
        floor.style.display = "none";
    }
}

f1.onclick = function() {
    scrollMove(2501)
}
f2.onclick = function() {
    scrollMove(3029)
}
f3.onclick = function() {
    scrollMove(3740)
}
f4.onclick = function() {
    scrollMove(4326)
}
f5.onclick = function() {
    scrollMove(4912)
}
f6.onclick = function() {
    scrollMove(5498)
}
f7.onclick = function() {
    scrollMove(6084)
}
f8.onclick = function() {
    scrollMove(6670)
}
f9.onclick = function() {
    scrollMove(7256)
    console.log(222)
}
floorTop.onclick = function() {
    scrollMove(0)
}



var floortimer = null;

function scrollMove(end) {
    clearInterval(floortimer);
    if (document.documentElement.scrollTop > end) {
        floortimer = setInterval(function() {
            document.documentElement.scrollTop -= 30;
            if (document.documentElement.scrollTop <= end) {
                clearInterval(floortimer)
                document.documentElement.scrollTop = end;

            }
        })
    } else {
        floortimer = setInterval(function() {
            document.documentElement.scrollTop += 30;
            if (document.documentElement.scrollTop >= end) {
                clearInterval(floortimer)
                document.documentElement.scrollTop = end;

            }
        })
    }
}

// var searchScroll_wrap=document.getElementById("searchScroll_wrap");
// window.onscroll=function  () {
// 	var a=document.documentElement.scrollTop;
// 	if(a>703){
// 		searchScroll_wrap.style.display="block";
// 	}else{
// 		searchScroll_wrap.style.top="none";
// 	}
// }
// document.onclick=function  (ev) {
// 	var b=ev.pageY;
// 	console.log(b);
// }