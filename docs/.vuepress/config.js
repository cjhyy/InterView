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

            {
                text: '学习笔记',
                items: [
                    { text: '数学', link: 'https://github.com/cjhyy' },
                    {
                        text: '计算机',
                        link: 'https://github.com/cjhyy'
                    },
                    {
                        text: '英语',
                        link: 'https://github.com/cjhyy'
                    },
                    {
                        text: '日语',
                        link: 'https://github.com/cjhyy'
                    },
                    {
                        text: '其他',
                        link: 'https://github.com/cjhyy'
                    },
                ]
            },
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
            }
        ]


    }
}