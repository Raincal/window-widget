require.config({
	paths : {
		jquery : 'jquery-1.11.2.min',
		jqueryUI : 'http://code.jquery.com/ui/1.11.4/jquery-ui'
	}
});
require(['jquery','window'],function($,w){
	$('#a').click(function(){
		var win = new w.Window();
		win.alert({
			title:'Tap',
			content:'welcome!',
			handler:function(){
				alert('You click the button!');
			},
			width:300,
			height:150,
			y:50,
			hasCloseBtn:true,
			text4AlertBtn:'OK',
			dragHandle:'.window_header',
			skinClassName:'window_skin_a'
			/*handler4AlertBtn:function(){
				alert('You click the alert button!');
			},
			handler4CloseBtn:function(){
				alert('You click the close button!');
			}*/
		});
		win.on("alert",function(){
			alert("You click the alert button!");
		});
		win.on("alert",function(){
			alert("The second alert handler");
		});
		win.on("alert",function(){
			alert("The third alert handler");
		});
		win.on("close",function(){
			alert("You click the close button!");
		});
		win.on("close",function(){
			alert("The second close handler");
		});
	})
});