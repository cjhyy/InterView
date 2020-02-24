module.exports = {
    title: '前端面试',
    description: '春江花月夜的面试题库',
    base: '/InterView/',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {

        lastUpdated: '最后更新时间',
        // 2.设置true，开启最后更新时间
        lastUpdated: true,
        nav: [
            { text: '前端', link: '/' },
            {
                text: '算法',
                items: [
                    { text: 'leetcode题解', link: 'https://cjhyy.github.io/myleetcode/' }
                ]
            },

            // {
            //     text: '学习笔记',
            //     items: [
            //         { text: '数学', link: 'https://github.com/cjhyy' },
            //         {
            //             text: '计算机',
            //             link: 'https://github.com/cjhyy'
            //         },
            //         {
            //             text: '英语',
            //             link: 'https://github.com/cjhyy'
            //         },
            //         {
            //             text: '日语',
            //             link: 'https://github.com/cjhyy'
            //         },
            //         {
            //             text: '其他',
            //             link: 'https://github.com/cjhyy'
            //         },
            //     ]
            // },
            { text: 'Github', link: 'https://github.com/cjhyy' },
        ],
        sidebar: [{
                title: '前言',
                children: [
                    '/main/'
                ]
            }, 
            {
                title: 'Html',
                children: [
                    '/Html/对WEB标准和W3C的理解认识',
                    '/Html/什么是DOCTYPE及作用',
                    '/Html/Html5语义化与新特性',       
                    '/Html/行内元素与块级元素',       
                    '/Html/渐进增强与优雅降级的理解及区别',   
                    '/Html/cookie、sessionStorage、localStorage区别'     
                ]
            },
            {
                title: 'Css3',
                children: [
                    '/Css3/CSS盒模型',
                    '/Css3/获取盒子宽高的几种方式及区别',
                    '/Css3/Flex布局',       
                    '/Css3/让页面里的字体变清晰，变细用CSS怎么做',       
                    '/Css3/CSS常见选择器',   
                    '/Css3/display有哪些值？说明他们的作用',
                    '/Css3/BFC',
                    '/Css3/浮动与定位',
                    '/Css3/常见的页面布局',       
                    '/Css3/CSS3新特性',       
                    '/Css3/常见单位',   
                    '/Css3/移动端视口配置',
                    '/Css3/文字、盒子水平垂直居中',
                    '/Css3/Sass、Less、Stylus区别',       
                    '/Css3/浅谈CSS响应式布局',       
                    '/Css3/link和@import有什么区别'       
                ]
            },
            {
                title: 'Javascript',
                children: [
                    '/Javascript/JS基本数据类型',
                    '/Javascript/异步代码的执行结果',
                    '/Javascript/如何统计网⻚上出现了多少种标签',       
                    '/Javascript/几种判断数据类型的优缺点',       
                    '/Javascript/原生ajax',   
                    // '/Javascript/null和undefined的区别',
                    '/Javascript/函数的防抖和节流',                    
                    '/Javascript/DOM事件类',  
                    '/Javascript/对象深浅拷贝',  
                    '/Javascript/谈谈你对Promise的理解',  
                    '/Javascript/this的理解',  
                    '/Javascript/Class与JS构造函数的区别',  
                    '/Javascript/ES6其他常用功能',  
                    '/Javascript/箭头函数',  
                    '/Javascript/函数柯里化',  
                    '/Javascript/什么是单线程，和异步有何不同',  
                    '/Javascript/什么是event-loop',  
                    '/Javascript/自己可以实现一个new吗',  
                    '/Javascript/bind、call、apply用法及区别',  
                    '/Javascript/目前JS解决异步的方案有哪些',  
                    '/Javascript/实现 (5).add(3).minus(2)，使其输出结果为6'
                ]
            },
            {
                title: 'Vue',
                children: [
                    '/Vue/MVC & MVVM的理解',
                    '/Vue/Virtual DOM的理解',
                    '/Vue/Vue 路由懒加载',       
                    '/Vue/Proxy与Object.defineProperty()的对比',       
                    '/Vue/Vue 组件间的通信',   
                    '/Vue/谈谈你对生命周期的理解',  
                    '/Vue/vue的diff算法',  
                    '/Vue/vue-router导航守卫',  
                    '/Vue/Vuex的理解及使用场景',  
                    '/Vue/Vue底层实现原理'
                ]
            },
            {
                title:'React',
                children:[
                    '/React/React生命周期',
                    '/React/谈谈你对Redux的理解'
                ]
            },
            {
                title:'Webpack',
                children:[
                ]
            },
            {
                title:'Http',
                children:[
                    '/Http/HTTP发展史',
                    '/Http/HTTP工作原理',
                    '/Http/HTTP请求响应的步骤',
                    '/Http/HTTP主要特点',
                    '/Http/HTTP报文的组成成分',
                    '/Http/HTTP方法',
                    '/Http/POST和GET方法',
                    '/Http/HTTP状态码',
                    '/Http/常见状态码',
                    '/Http/什么是持久连接',
                    '/Http/什么是管线化'
                ]
            },
            {
                title:'浏览器',
                children:[
                    '/Browser/从输入URL到页面加载的全过程',
                    '/Browser/重绘 & 回流',
                    '/Browser/常见浏览器及其内核',
                    '/Browser/跨域通信的几种方式'
                ]  
            },
            {
                title:'性能和安全',
                children:[
                    '/Safe/提升页面性能的方法有哪些',
                    '/Safe/前端错误类',
                    '/Safe/安全类',
                    '/Safe/什么是同源策略及限制',
                    '/Safe/常见的兼容性问题'
                ]  
            }
        ]


    }
}