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
		renderUI : function(){
			this.boundingBox = $(
				'<div class="window_boundingBox">'+
				'<div class="window_header"><h4>'+this.cfg.title+'</h4></div>'+
				'<div class="window_body">'+this.cfg.content+'</div>'+
				'<div class="window_footer"><button class="window_alertBtn">'+this.cfg.text4AlertBtn+'</button></div>'+
				'</div>'
			);
			if(this.cfg.hasMask){
				this._mask = $('<div class="window_mask"></div>');
				this._mask.appendTo('body');
			}
			if(this.cfg.hasCloseBtn){
				this.boundingBox.append('<span class="window_closeBtn">X</span>');
			}
			this.boundingBox.appendTo(document.body);
		},
		bindUI : function(){
			var that = this;
			this.boundingBox.delegate(".window_alertBtn","click",function(){
				that.fire("alert");
				that.destroy();
			}).delegate(".window_closeBtn","click",function(){
					that.fire("close");
					that.destroy();
			});
			if(this.cfg.handler4AlertBtn){
				this.on("alert",this.cfg.handler4AlertBtn);
			}
			if(this.cfg.handler4CloseBtn){
				this.on("close",this.cfg.handler4CloseBtn);
			}
		},
		syncUI : function(){
			this.boundingBox.css({
				width:this.cfg.width + 'px',
				height:this.cfg.height + 'px',
				left:(this.cfg.x || (window.innerWidth - this.cfg.width)/2) + 'px',
				top:(this.cfg.y || (window.innerHeight - this.cfg.height)/2) + 'px'
			});
			if(this.cfg.skinClassName){
				this.boundingBox.addClass(this.cfg.skinClassName);
			}
			if(this.cfg.isDraggable){
				if(this.cfg.dragHandle){
					this.boundingBox.draggable({handle:this.cfg.dragHandle});
				}else{
					this.boundingBox.draggable();
				}
			}
		},
		destructor : function(){
			this._mask && this._mask.remove();
		},
		alert : function(cfg){
			//var CFG = $.extend(this.cfg,cfg),
				/*boundingBox = $(
					'<div class="window_boundingBox">'+
						'<div class="window_header"><h4>'+CFG.title+'</h4></div>'+
						'<div class="window_body">'+CFG.content+'</div>'+
						'<div class="window_footer"><button class="window_alertBtn">'+CFG.text4AlertBtn+'</button></div>'+
					'</div>'
				),*/
				/*btn = boundingBox.find('.window_alertBtn'),
				mask = null;
				that = this;*/
				/*if(CFG.hasMask){
					mask = $('<div class="window_mask"></div>');
					mask.appendTo('body');
				}
			boundingBox.appendTo('body');
			btn.click(function(){
				CFG.handler4AlertBtn && CFG.handler4AlertBtn();
				boundingBox.remove();
				mask && mask.remove();
				that.fire("alert");
			});*/
			$.extend(this.cfg,cfg);
			this.render();
			/*boundingBox.css({
				width:this.cfg.width + 'px',
				height:this.cfg.height + 'px',
				left:(this.cfg.x || (window.innerWidth - this.cfg.width)/2) + 'px',
				top:(this.cfg.y || (window.innerHeight - this.cfg.height)/2) + 'px'
			});*/

			/*if(CFG.hasCloseBtn){
				var closeBtn = $('<span class="window_closeBtn">X</span>');
				closeBtn.appendTo(boundingBox);
				closeBtn.click(function(){
					CFG.handler4CloseBtn && CFG.handler4CloseBtn();
					boundingBox.remove();
					mask && mask.remove();
					that.fire("close");
				});
			}*/
			/*if(CFG.handler4AlertBtn){
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
			}*/
			return this;
		},
		confirm : function(){},
		prompt : function(){}
	});
	return {
		Window : Window
	}
})