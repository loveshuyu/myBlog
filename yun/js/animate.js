var Effect = {
    zfLinear: function (t, b, c, d) {
        return t / d * c + b;
    }
};
function animate(ele, obj, duration, callback) {
    var zfEffect = Effect.zfLinear;
    duration = duration || 600;
    window.clearInterval(ele.timer);
    var interval = 15;
    var times = 0;
    var oBegin = {};
    var oChange = {};
    var flag = 0;
    for (var attr in obj) {
        var begin = utils.getCss(ele, attr);
        var change = obj[attr] - begin;
        if (change) {
            flag++;
            oBegin[attr] = begin;
            oChange[attr] = change;
        }
    }
    if (flag == 0) {
        return;
    }
    function step() {
        times += interval;
        if (times < duration) {
            for (var attr in oChange) {
                var begin = oBegin[attr];
                var change = oChange[attr];
                var val = zfEffect(times, begin, change, duration);
                utils.setCss(ele, attr, val);
            }
        } else {
            for (var attr in obj) {
                utils.setCss(ele, attr, obj[attr]);
            }
            window.clearInterval(ele.timer);
            if (typeof callback == "function") {
                callback.call(ele);
            }
        }
    }
    ele.timer = window.setInterval(step, interval);
}
