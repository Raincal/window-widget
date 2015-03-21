require.config({
	paths : {
		jquery : 'jquery-1.11.2.min',
		jqueryUI : 'http://code.jquery.com/ui/1.11.4/jquery-ui'
	}
});
require(['jquery','window'],function($,w){
	$('#a').click(function(){
		new w.Window().alert({
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
			skinClassName:'window_skin_a',
			handler4AlertBtn:function(){
				alert('You click the alert button!');
			},
			handler4CloseBtn:function(){
				alert('You click the close button!');
			}
		});
	})
});