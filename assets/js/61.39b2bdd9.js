(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{261:function(s,n,t){"use strict";t.r(n);var e=t(0),a=Object(e.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"函数的防抖和节流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数的防抖和节流"}},[s._v("#")]),s._v(" 函数的防抖和节流")]),s._v(" "),t("ans",[t("h4",{attrs:{id:"函数防抖-debounce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数防抖-debounce"}},[s._v("#")]),s._v(" 函数防抖(debounce)")]),s._v(" "),t("blockquote",[t("p",[s._v("现在要实现一个文章云端缓存功能，如果用户每输入一个字符就调用接口同步缓存一次的话，这样服务器的压力会比较大。")])]),s._v(" "),t("blockquote",[t("p",[s._v("而且多个接口顺序发送出去，服务端不一定是按照这个顺序收到的，可能会导致储存的内容并不是最新的内容。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    let timer;\n    const input = document.querySelector('input');\n\n    input.addEventListener('input', function() {\n        clearTimeout(timer);\n        timer = setTimeout(function() {\n            // 执行具体代码\n        }, 500)\n    })\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h4",{attrs:{id:"函数节流-throttle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数节流-throttle"}},[s._v("#")]),s._v(" 函数节流(throttle)")]),s._v(" "),t("blockquote",[t("p",[s._v("函数节流的应用场景一般是onrize，onscroll等这些频繁触发的函数，比如你想获取滚动条的位置")])]),s._v(" "),t("blockquote",[t("p",[s._v("如果监听后执行的是Dom操作，这样的频繁触发执行，可能会影响到浏览器性能，甚至会将浏览器卡崩。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('// 限制500ms执行一次\nlet time = null;\nwindow.onscroll = function(){\n    let curTime = newDate();\n    if(time==null){\n       time = curTime; \n    }\n    if((curTime-time)>500){\n        console.log("要执行的事");\n    }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])])])],1)}),[],!1,null,null,null);n.default=a.exports}}]);