(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{287:function(s,n,t){"use strict";t.r(n);var e=t(0),a=Object(e.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"vue-router导航守卫"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-router导航守卫"}},[s._v("#")]),s._v(" vue-router导航守卫")]),s._v(" "),t("ans",[t("p",[s._v("一、导航守卫大体分为三类：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("1. 全局守卫钩子\n\n2. 独享守卫钩子\n\n3. 路由组件守卫钩子\n复制代码\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("二、全局守卫钩子（在路由切换全局执行）")]),s._v(" "),t("p",[s._v("全局守卫钩子函数有三种：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("const router = new VueRouter({....})\n// 全局前置守卫\nrouter.beforeEach((to, from, next) => {\n\t// do something\n})\n// 全局解析守卫\nrouter.beforeResolve((to, from, next) => {\n\t// do something\n})\n// 全局后置守卫\nrouter.afterEach((to, from) => {\n\t// do something\n})\n注意：\n\tto：route即将进入的路由\n\tfrom：route即将离开的路由\n\tnext：function这个是必须要调用的\n\tnext()接受参数：\n  next()：直接执行下一个钩子，如果执行完了导航状态为comfirmed状态\n\tnext(false)：中断当前导航，回到from的位置\n\tnext('/hello')或next({path:'/hello'})：路由到任意地址，可以携带参数等\n\tnext(error)：会回到router.onError(callback)\n复制代码\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("p",[s._v("三、独享守卫钩子")]),s._v(" "),t("p",[s._v("独享守卫是定义在单独的某一个路由里的")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("const router = new VueRouter({\n\troutes: [\n\t\t{\n\t\t\tpath: '/foo',\n\t\t\tcomponent: Foo,\n\t\t\tbeforeEnter: (to, from, next) => {\n\t\t\t\t// do something\n\t\t},\n\t\tbeforeLeave: (to, from, next) => {\n\t\t\t// do something\n\t\t}\n\t}\n]\n})\n复制代码\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("四、路由组件守卫钩子")]),s._v(" "),t("p",[s._v("路由组件即是在vue-router中注册的组件叫路由组件")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("beforeRouteEnter(to, from, next) {}\nbeforeRouteUpdate(to, from, next) {}\nbeforeRouteLeave(to,from, next){}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])],1)}),[],!1,null,null,null);n.default=a.exports}}]);