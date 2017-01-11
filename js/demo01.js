/*$(function(){

	var nav = {
		navSwitch:function(){
			var _this = $(this);
			$('.nav li').off('click').on('click',function(){
				$('.nav li').removeClass('active');
				$(this).addClass('active');
			});
			_this.ini;
		},
		ini:function(){
			var _this = $(this);
			navSwitch();
			

		}
	};
	nav.ini();
})*/
$(function(){
	var nav={
		navSwitch:function(){
			
			var _this = this;
			$('.nav li').on('click',function(){
				$('.nav li').removeClass('active');
				$(this).addClass('active');
			})
		},
		
		sb:function(){
			console.log('sb');
		},
		init:function(){
			var _this= this;
			console.log(_this);
			console.log($(this))
			_this.sb();
			_this.navSwitch();

		}
	};
	nav.init();
	
})