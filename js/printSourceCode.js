/*用于判断登录表单的提交的函数*/
/*function confirmPassword(){
		var firstPassword=document.forms['ChangePasswordForm']["password"].value;
		var confirmPassword=document.forms['ChangePasswordForm']["confirm_password"].value;
		if( firstPassword=="" || confirmPassword==""){
			alert("请将密码框补充完整");
			return false;

		}else if (firstPassword != confirmPassword) {
			alert("两次密码输入不一致");
			return false;
		}

}*/
/*用于根据标签ID属性输出整个标签的源代码*/
function sourceCode(sourceID){
	 	var a=document.getElementById(sourceID).innerHTML;
	 	a=a.replace(/\>/g,"\&gt");
	 	a=a.replace(/\</g,"\&lt"); 
/*感觉变量的命名应该会有=号在附近;并且后面font会有color的css样式设置；所以放在最前面*/
	 	a=a.replace(/([a-zA-Z_0-9]*)(\s*)=(\s*)/g,"<font color=\"#A6E22E\">$1</font>$2=$3");
	 	/*对HTML标签进行替换*/	
/*	 	a=a.replace(/(\&lt)([^\&][a-zA-Z]+)([^\&]*)(\&gt)/g,"$1<span>$2</span>$3$4");*/
/*	 	a=a.replace(/(")([^"]*)(")/g,"$1<font color=\"#E6DB74\">$2</font>$3");
	 	a=a.replace(/(')([^']*)(')/g,"$1<font color=\"#E6DB74\">$2</font>$3");
*/

	 	/*批量对关键字进行替换*/
	 	var keywords=["var","if","else","return","ideogram","break_style","ticks","tick","include","image"];
	 	for (var i = keywords.length - 1; i >= 0; i--) {
	 		var reg="/"+"("+keywords[i]+")"+"/g";
	 		a=a.replace(eval(reg),"<font color=\"#F92672\">$1</font>");
	 	}
	 	/*对函数名，有特征的单词进行替换*/
	 	a=a.replace(/([a-zA-Z_]*)(\s?)(\(.*\))/g,"<font color=\"#66D9EF\">$1</font>$2$3");

	
	 	a="<pre style=\"background-color:#444444;font-size: 18px;color: white;\">"+a;
	 	a=a+"</pre>"; 	
	 	document.write(a);
}

/*用于根据标签ID属性输出整个标签的源代码,加上ID标签*/
function sourceCodeById(sourceID){
	 	var a=document.getElementById(sourceID).innerHTML;
	 	a=a.replace(/\>/g,"\&gt");
	 	a=a.replace(/\</g,"\&lt"); 
	/*感觉变量的命名应该会有=号在附近;并且后面font会有color的css样式设置；所以放在最前面*/
	 	a=a.replace(/([a-zA-Z_0-9]*)(\s*)=(\s*)/g,"<font color=\"#A6E22E\">$1</font>$2=$3");
	 	
	 	/*对HTML标签进行替换*/	
	/* 	a=a.replace(/(\&lt)([^\&][a-zA-Z]+)([^\&]*)(\&gt)/g,"$1<span>$2</span>$3$4");*/
/*	 	a=a.replace(/(")([^"]*)(")/g,"$1<font color=\"#E6DB74\">$2</font>$3");
	 	a=a.replace(/(')([^']*)(')/g,"$1<font color=\"#E6DB74\">$2</font>$3");
*/
	

	 	/*批量对关键字进行替换*/
	 	var keywords=["var","if","else","return","ideogram","break_style","ticks","tick","include","image"];
	 	for (var i = keywords.length - 1; i >= 0; i--) {
	 		var reg="/"+"("+keywords[i]+")"+"/g";
	 		a=a.replace(eval(reg),"<font color=\"#F92672\">$1</font>");
	 	}
	 	/*对函数名，有特征的单词进行替换*/
	 	a=a.replace(/([a-zA-Z_]*)(\s?)(\(.*\))/g,"<font color=\"#66D9EF\">$1</font>$2$3");

	 	a="<pre style=\"background-color:#444444;font-size: 18px;color: white;\">"+a;
	 	a=a+"</pre>"; 	
	 	document.write(a);
}
/*对一段字符串进行源代码展示*/
function sourceCodeByChar(char){
	 	var a=char;
	 	a=a.replace(/\>/g,"\&gt");
	 	a=a.replace(/\</g,"\&lt"); 
	 	/*感觉变量的命名应该会有=号在附近;并且后面font会有color的css样式设置；所以放在最前面*/
	 	a=a.replace(/([a-zA-Z_0-9]*)(\s*)=(\s*)/g,"<font color=\"#A6E22E\">$1</font>$2=$3");
	 	/*对HTML标签进行替换*/	
/*	 	a=a.replace(/(\&lt)([^\&][a-zA-Z]+)([^\&]*)(\&gt)/g,"$1<span>$2</span>$3$4");*/
	 	/*a=a.replace(/(")([^"]*)(")/g,"$1<font color=\"#E6DB74\">$2</font>$3");
	 	a=a.replace(/(')([^']*)(')/g,"$1<font color=\"#E6DB74\">$2</font>$3");*/
	 	

	 	/*批量对关键字进行替换*/
	 	var keywords=["var","if","else","return","ideogram","break_style","ticks","tick","include","image"];
	 	for (var i = keywords.length - 1; i >= 0; i--) {
	 		var reg="/"+"("+keywords[i]+")"+"/g";
	 		a=a.replace(eval(reg),"<font color=\"#F92672\">$1</font>");
	 	}
	 	/*对函数名，有特征的单词进行替换*/
	 	a=a.replace(/([a-zA-Z_]*)(\s?)(\(.*\))/g,"<font color=\"#66D9EF\">$1</font>$2$3");

	
	 	a="<pre style=\"background-color:#444444;font-size: 18px;color: white;\">"+a;
	 	a=a+"</pre>"; 	
	 	document.write(a);
}
