define([ 'widget','jquery','jqueryUI'],function(widget,$,$UI){
	function Window(){
		this.cfg = {
			width:500,
			height:300,
			title:'System Message',
			content:'',
			handler:null,
			hasCloseBtn:false,
			hasMask:true,
			isDraggable:true,
			dragHandle:null,
			skinClassName:null,
			text4AlertBtn:'confirm',
			handler4AlertBtn:null,
			handler4CloseBtn:null
		};
		this.handlers = {};
	}
	Window.prototype = $.extend({},new widget.Widget(),{
		/*on : function(type,handler){
			if(typeof this.handlers[type] == "undefined"){
				this.handlers[type] = [];
			}
			this.handlers[type].push(handler);
			return this;
		},
		fire : function(type,data){
			if(this.handlers[type] instanceof Array){
				var handlers = this.handlers[type];
				for (i = 0,len = handlers.length; i < len;i++){
					handlers[i](data);
				}
			}
		},*/
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
						'<div class="window_footer"><button class="window_alertBtn">'+CFG.text4AlertBtn+'</button></div>'+
					'</div>'
				),
				btn = boundingBox.find('.window_alertBtn'),
				mask = null;
				that = this;
				if(CFG.hasMask){
					mask = $('<div class="window_mask"></div>');
					mask.appendTo('body');
				}
			boundingBox.appendTo('body');
			btn.click(function(){
				CFG.handler4AlertBtn && CFG.handler4AlertBtn();
				boundingBox.remove();
				mask && mask.remove();
				that.fire("alert");
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
					mask && mask.remove();
					that.fire("close");
				});
			}
			if(CFG.handler4AlertBtn){
				this.on("alert",CFG.handler4AlertBtn);
			}
			if(CFG.handler4CloseBtn){
				this.on("close",CFG.handler4CloseBtn);
			}
			if(CFG.skinClassName){
				boundingBox.addClass(CFG.skinClassName);
			}
			if(CFG.isDraggable){
				if(CFG.dragHandle){
					boundingBox.draggable({handle:CFG.dragHandle});
				}else{
					boundingBox.draggable();
				}
			}
			return this;
		},
		confirm : function(){},
		prompt : function(){}
	});
	return {
		Window : Window
	}
})