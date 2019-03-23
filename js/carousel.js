let innerGroup = $(".screen");
let spanGroup = $(".pagination span");
let imgWidth = $(".screen img:first-child").eq(0).width();
let _index = 0;
let timer = null;
let flag = true;
spanGroup.on("click", function() {
    //导航切换
    _index = spanGroup.index($(this));
    selectPic(_index);
})

$(".carousel").hover(function() {
    //鼠标移入
    clearInterval(timer);
    flag = false;
}, function() {
    flag = true;
    timer = setInterval(go, 3000);
});

function autoGo(bol) {
    //自动行走
    if (bol) {
        timer = setInterval(go, 3000);
    }
}
autoGo(flag);

function go() {
    //计时器的函数
    _index++;
    selectPic(_index);
}
function selectPic(num) {
    $(".pagination span").eq(num).addClass("active").siblings().removeClass("active");
    $(".inner").animate({
        left: -num * imgWidth,
    }, 1000, function() {
        //检查是否到最后一张
        if (_index == innerGroup.length - 1) {
            _index %= 4;
            $(".inner").css("left", "0px");
            $(".pagination span").eq(0).addClass("active").siblings().removeClass("active");
        }
    })
}