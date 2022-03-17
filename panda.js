$('#password').focusin(function () {
    // 密码框选中
    $('.login-box').addClass('up')
}).focusout(function () {
    // 密码框非选中
    $('.login-box').removeClass('up')
})

// 眼球跟随移动
$(document).on('mousemove', function (e) {
    // 鼠标坐标和页面宽高百分比乘上眼球最大left值
    let x = (e.pageX / $(document).width()) * 10
    let y = (e.pageY / $(document).height()) * 10
    $('.eye-ball').css({
        left: x,
        top: y
    })
})