(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{263:function(s,n,t){"use strict";t.r(n);var a=t(0),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"原生ajax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原生ajax"}},[s._v("#")]),s._v(" 原生ajax")]),s._v(" "),t("ans",[t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('如何创建Ajax\nXMLHttpRequest对象的工作流程\n==========兼容性写法===========\nvar xmlHttp = null;\nif(window.XMLHttpRequset) {\n\t// IE7+,Firefox,Chrome,Safari,Opera\n\txmlHttp = new XMLHttpRequset();\n}\nelse {\n\t// IE5,IE6\n\txmlHttp = new ActiveXObject("Microsoft.XMLHTTP")\n}\n兼容性处理\n也可以直接写作  \nvar xhr = window.XMLHttpRequest?new XMLHttpRequest():ActiveXObject("microsoft.XMLHttp")\n事件的触发条件\n\n如果是POST请求则需要添加头\nxmlHttp.setRequestHeader("Content-type": "application/x-www-form-urlencoded")\n\nGet请求\n   xhr.open("get", "/Ajax/ajax2?username=张三");//一个servlet，后面还可以写是否同步\n   xhr.send();\nPost请求\n    xhr.open("post", "/Ajax/ajax2");//一个servlet，后面还可以写是否同步\n    //设置请求头\n    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")\n    //send 发送\n    xhr.send("username=张三");\n    \n    \nxmlHttp.onreadystatechange = function() {\n\tif(xmlHttp.readyState == 4 && xmlHttp.status == 200) {\n\t\tresponseText、responseXML\n\t}\n}\n事件的触发顺序\n======================注意=================\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br")])])])],1)}),[],!1,null,null,null);n.default=e.exports}}]);