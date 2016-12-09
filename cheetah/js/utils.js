var utils = (function(){
    function getCss(ele,attr){
        var val = null,reg = null;
        if("getComputedStyle" in window){
            val = window.getComputedStyle(ele,null)[attr];
        }else{
            if(attr == "opacity"){
                val = ele.currentStyle["filter"];
                reg = /alpha\(opacity\s*=\s*(\d+(?:\.\d+)?)\)/;
                val = reg.test(val)?RegExp.$1/100:1;
            }else{
                val = ele.currentStyle[attr];
            }
        }
        reg = /^[+-]?(\d|[1-9]\d+)(\.\d+)?(px|pt|em|rem)?$/;
        return reg.test(val)?parseFloat(val):val;
    }

    function setCss(ele,attr,value){
        if(attr == "opacity"){
            ele.style["opacity"] = value;
            ele.style["filter"] = "alpha(opacity = " + value*100+")";
        }else if(attr == "float"){
            ele.style["cssFloat"] = value;
            ele.style["styleFloat"] = value;
        }else{
            var reg = /(width|height|right|left|top|bottom|(margin|padding)(Top|Right|Bottom|Right)?)/;
            if(reg.test(attr)){
                if(!isNaN(value)){
                    ele.style[attr] = value+"px";
                }
            }else{
                ele.style[attr] = value;
            }
        }
    }
    return{
        getCss:getCss,
        setCss:setCss
    }
})();