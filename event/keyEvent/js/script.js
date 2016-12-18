var data = ['iPhone7','三星笔记本','联想手机','100元优惠券','50元红包','谢谢参与'],
	timer = null,
	flag = 1;

window.onload = lottery;
function lottery(){
	var oPlay = document.getElementById('play'),
		oStop = document.getElementById('stop'),
		oTitle = document.getElementById('title');
	oPlay.onclick = run;
	oStop.onclick = stop;
	document.onkeyup = function(e){
		//13回车，32空格
		if(e.keyCode == 32){
			if(flag){
				run();
				flag = 0;
			}else{
				clearInterval(timer);
				flag = 1;
			}
		}
	}
}

//开始抽奖
function run(){
	clearInterval(timer);
	oTitle = document.getElementById('title');

	timer = setInterval(function(){
		var randNum = Math.floor(Math.random()*data.length);
		oTitle.innerHTML = data[randNum];
	},100);
}

//暂停抽奖
function stop(){
	clearInterval(timer);
}
