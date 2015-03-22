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
			title:'Tip',
			content:'welcome!',
			width:300,
			height:150,
			y:50,
			hasCloseBtn:true,
			text4AlertBtn:'OK',
			dragHandle:'.window_header',
			skinClassName:'window_skin_a'
		}).on("alert",function(){
			alert("You click the alert button!");
		}).on("alert",function(){
			alert("The second alert handler");
		}).on("alert",function(){
			alert("The third alert handler");
		}).on("close",function(){
			alert("You click the close button!");
		}).on("close",function(){
			alert("The second close handler");
		});
	});
	$('#b').click(function(){
		new w.Window().confirm({
			title : "System Message",
			content : "Are you sure?",
			width : 300,
			height : 150,
			y : 50,
			text4ConfirmBtn : "Yes",
			text4CancelBtn : "No",
			dragHandle : ".window_header"
		}).on("confirm",function(){
			alert("confirm");
		}).on("cancel",function(){
			alert("cancel");
		})
	})
	$('#c').click(function(){
		new w.Window().prompt({
			title : "Please enter your name",
			content : "We will protect your information",
			width : 300,
			height : 150,
			y : 50,
			text4PromptBtn : "enter",
			text4CancelBtn : "cancel",
			defaultValue4PromptInput : "Rain",
			dragHandle : ".window_header",
			handler4PromptBtn : function(inputValue){
				alert("You entered: " + inputValue);
			},
			handler4CancelBtn : function(){
				alert("cancel");
			}
		})
	})
	$('#d').click(function(){
		new w.Window().common({
			content : "common window",
			width : 300,
			height : 150,
			y : 50,
			hasCloseBtn : true
		})
	})
});