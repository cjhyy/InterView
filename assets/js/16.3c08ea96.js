(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{216:function(i,n,l){"use strict";l.r(n);var s=l(0),e=Object(s.a)({},(function(){var i=this,n=i.$createElement,l=i._self._c||n;return l("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[l("h1",{attrs:{id:"display-none-与-visibility-hidden-的区别是什么？"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#display-none-与-visibility-hidden-的区别是什么？"}},[i._v("#")]),i._v(" display:none 与 visibility:hidden 的区别是什么？")]),i._v(" "),l("ans",[l("ul",[l("li",[l("p",[i._v("是否占据空间")]),i._v(" "),l("p",[i._v("display:none，该元素不占据任何空间，在文档渲染时，该元素如同不存在（但依然存在文档对象模型树中）。 visibility:hidden，该元素空间依旧存在。 即一个（display:none）不会在渲染树中出现，一个（visibility :hidden）会。")])]),i._v(" "),l("li",[l("p",[i._v("是否渲染")]),i._v(" "),l("p",[i._v("display:none，会触发reflow（回流），进行渲染。 visibility:hidden，只会触发repaint（重绘），因为没有发现位置变化，不进行渲染。")])]),i._v(" "),l("li",[l("p",[i._v("是否是继承属性")]),i._v(" "),l("p",[i._v("display:none，display不是继承属性，元素及其子元素都会消失。 visibility:hidden，visibility是继承属性，若子元素使用   visibility:visible，则不继承，这个子孙元素又会显现出来。")])]),i._v(" "),l("li",[l("p",[i._v("读屏器是否读取")]),i._v(" "),l("p",[i._v("读屏器不会读取display：none的元素内容，而会读取visibility：hidden的元素内容。")])])])])],1)}),[],!1,null,null,null);n.default=e.exports}}]);