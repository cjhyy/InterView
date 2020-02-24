# 原生ajax

<ans>

```
如何创建Ajax
XMLHttpRequest对象的工作流程
==========兼容性写法===========
var xmlHttp = null;
if(window.XMLHttpRequset) {
	// IE7+,Firefox,Chrome,Safari,Opera
	xmlHttp = new XMLHttpRequset();
}
else {
	// IE5,IE6
	xmlHttp = new ActiveXObject("Microsoft.XMLHTTP")
}
兼容性处理
也可以直接写作  
var xhr = window.XMLHttpRequest?new XMLHttpRequest():ActiveXObject("microsoft.XMLHttp")
事件的触发条件

如果是POST请求则需要添加头
xmlHttp.setRequestHeader("Content-type": "application/x-www-form-urlencoded")

Get请求
   xhr.open("get", "/Ajax/ajax2?username=张三");//一个servlet，后面还可以写是否同步
   xhr.send();
Post请求
    xhr.open("post", "/Ajax/ajax2");//一个servlet，后面还可以写是否同步
    //设置请求头
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
    //send 发送
    xhr.send("username=张三");
    
    
xmlHttp.onreadystatechange = function() {
	if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
		responseText、responseXML
	}
}
事件的触发顺序
======================注意=================

```

</ans>