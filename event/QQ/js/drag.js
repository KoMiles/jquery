//通过类名获取元素
function getClassName(className1,parent){
	var oParent = document.getElementById(parent),
		eles = [],
		elements = oParent.getElementsByTagName("*");
	for(var i=0,l=elements.length;i<l;i++){
		if(elements[i].className==className1){
			eles.push(elements[i]);
		}
	}
	return eles;
}
//阻止事件冒泡
function stopPro(e){
	e = e || window.event;
	if(e.stopPropagation){
		e.stopPropagation();
	}else{
		e.cancleBubble = true;
	}
}

window.onload=drag;
function drag(){
	//拖拽
	var oTitle = getClassName('login_logo_webqq','loginPanel')[0];
	oTitle.onmousedown = fnDown;
	//关闭
	var oClose = document.getElementById('ui_boxyClose');
	oClose.onclick = fnClose;
	//切换状态
	var oLoginState = document.getElementById('loginState'),
		oLoginStateUl = document.getElementById('loginStatePanel'),
		oLoginStateShow = document.getElementById('loginStateShow'),
		oLoginStateText = document.getElementById('login2qq_state_txt'),
		oLoginStateLi = oLoginStateUl.getElementsByTagName('li');

	//显示状态
	oLoginState.onclick = function(e){
		//阻止事件冒泡
		stopPro(e);
		oLoginStateUl.style.display = 'block';
	}

	//点击切换
	for(var i=0,l=oLoginStateLi.length;i<l;i++){
		oLoginStateLi[i].onmouseover=function(){
			this.style.background = '#CCC';
		}
		oLoginStateLi[i].onmouseout=function(){
			this.style.background = '#FFF';
		}
		oLoginStateLi[i].onclick=function(e){
			//阻止事件冒泡
			stopPro(e);
			oLoginStateUl.style.display = 'none';
			var id = this.id;
			oLoginStateText.innerHTML = getClassName('stateSelect_text',id)[0].innerHTML;
			oLoginStateShow.className = '';
			oLoginStateShow.className = 'login-state-show ' + id;
		}
	}

	//空白地方点击ul隐藏
	document.onclick=function(e){
		oLoginStateUl.style.display = 'none';
	}
}


//关闭
function fnClose(){
	var oDrag = document.getElementById('loginPanel');
	oDrag.style.display = 'none';
}

//鼠标按下
function fnDown(){
	var oDrag = document.getElementById('loginPanel'),
		disX = event.clientX-oDrag.offsetLeft,
		disY = event.clientY-oDrag.offsetTop;

	//移动
	document.onmousemove = function(){
		fnMove(event,disX,disY);
	}

	//释放
	document.onmouseup = function(){
		document.onmousemove = null;
		document.onmouseup = null;
	}
}

//移动
function fnMove(event,posX,posY){
	var oDrag = document.getElementById('loginPanel'),
		l = event.clientX-posX,
		t = event.clientY-posY,
		winW = document.documentElement.clientWidth||document.body.clientWidth,  
		winH = document.documentElement.clientHeight||document.body.clientHeight,
		maxW = winW - oDrag.offsetWidth-10,
		maxH = winH - oDrag.offsetHeight;

		//设置边界值
		if(l<0){
			l = 0;
		}else if(l>maxW){
			l = maxW;
		}
		if(t<0){
			t = 10;
		}else if(t>maxH){
			t = maxH;
		}
		oDrag.style.left = l+'px';
		oDrag.style.top = t+'px';
}
