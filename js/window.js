define([ 'jquery' ],function($){
	function Window(){
		this.cfg = {
			width:500,
			height:300,
			title:'System Message',
			content:'',
			handler:null,
			hasCloseBtn:false,
			skinClassName:null,
			handler4AlertBtn:null,
			handler4CloseBtn:null
		};
	}
	Window.prototype = {
		alert : function(cfg){
			/*var CFG = $.extend(this.cfg,cfg);
			var boundingBox = $('<div class="window_boundingBox"></div>');
			boundingBox.appendTo('body');
			boundingBox.html(CFG.content);
			var btn = $('<button>confirm</button>');
			btn.appendTo(boundingBox);
			btn.click(function(){
				CFG.handler && CFG.handler();
				boundingBox.remove();
			});*/
			var CFG = $.extend(this.cfg,cfg),
				boundingBox = $(
					'<div class="window_boundingBox">'+
						'<div class="window_header"><h4>'+CFG.title+'</h4></div>'+
						'<div class="window_body">'+CFG.content+'</div>'+
						'<div class="window_footer"><button class="window_alertBtn">confirm</button></div>'+
					'</div>'
				),
				btn = boundingBox.find('.window_alertBtn');
			boundingBox.appendTo('body');
			btn.click(function(){
				CFG.handler4AlertBtn && CFG.handler4AlertBtn();
				boundingBox.remove();
			});
			$.extend(this.cfg,cfg);
			boundingBox.css({
				width:this.cfg.width + 'px',
				height:this.cfg.height + 'px',
				left:(this.cfg.x || (window.innerWidth - this.cfg.width)/2) + 'px',
				top:(this.cfg.y || (window.innerHeight - this.cfg.height)/2) + 'px'
			});

			if(CFG.hasCloseBtn){
				var closeBtn = $('<span class="window_closeBtn">X</span>');
				closeBtn.appendTo(boundingBox);
				closeBtn.click(function(){
					CFG.handler4CloseBtn && CFG.handler4CloseBtn();
					boundingBox.remove();
				});
			}

			if(CFG.skinClassName){
				boundingBox.addClass(CFG.skinClassName);
			}
		},
		confirm : function(){},
		prompt : function(){}
	}
	return {
		Window : Window
	}
})