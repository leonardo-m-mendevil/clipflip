(function(){
	function Main(){}
			 var main  = new Main();
	         	 Main.main = function() {
			 	     var Menu;
			             var _clip,_self,_overlay,_Logo,_copyright,_screenWidth,_screenHeight,_clipWidth,_clipHeight,_stageHeight,_stageWidth,_clipRatio,_topMargin = 500,_scaled = false,_clipOriginX,_clipOriginY;
				     var DEFAULT_MENU_SCALE_X = 5;
				     var DEFAULT_MENU_SCALE_Y = 4;
				     var CLIP_SCALE           = 1.2;
				     var ZOOM                 = "OUT"
			 	     if (!window.HTMLCanvasElement) {
					alert("Your browser does not support HTML5 Canvas.");
					return;
				     } else main.initialize = function(){
				     	_self              = { ref:this.Main, Main:$(Main) };
					var cCanvas        = _self.ref || _self.Main;
					_screenHeight      = Capabilities.screenResolutionY;
					_screenWidth       = Capabilities.screenResolutionX;
					_stageHeight       = cCanvas.stageHeight;
					_stageWidth        = cCanvas.stageWidth;
					
					_clip              = new clipHolder(this);
					_clipHeight        = _clip.height;
					_clipWidth         = _clip.width;
					_clipRatio         = { w:Math.round((_clipWidth/_stageWidth)*100),h:Math.round((_clipHeight/_stageHeight) * 100) }
					_clip.scaleX       = CLIP_SCALE;
					_clip.scaleY       = CLIP_SCALE;
					_clip.x            = (_screenWidth / 2) + _clipRatio.w*2;
					_clip.y            = ((_stageHeight / 2) + _clipRatio.h*3) - _topMargin;
					_clipOriginX       = _clip.x;
					_clipOriginY       = _clip.y;
					
					_Logo              = new logo();
					_Logo.scaleX       = 6.8;
					_Logo.scaleY       = 6.8;
					_Logo.x            = _Logo.width-_clipRatio.w*8.9;
					_Logo.y            = _Logo.height;
					
					_copyright         = new copyright();
					_copyright.x       = _self.STAGE.width/10; 
					_copyright.y       = _Logo.y + 1600;
					
					_overlay = new overlay(this);
					
					//cCanvas.addEventListener(KeyboardEvent.KEY_DOWN, keyClicked);
	
				}
				Main.prototype.mainCanvasSetup = function mainCanvasSetup(){
					this.Main.prototype.mainCanvas = document.getElementById("mainCanvas");
					this.Main.prototype.mainStage = new createjs.Stage(this.mainCanvas);
					this.Main.prototype.mainStage.snapToPixelsEnabled = true;
					createjs.Ticker.addListener(this);
					createjs.Ticker.useRAF = true;
					createjs.Ticker.setFPS(60);
				}
				Main.prototype.keyClicked = function keyClicked(event) {
					if (_scaled == true) {
						switch(event.keyCode){
							case 39:
							_clip.switchImageByKey('right');
							break;
							case 37:
							_clip.switchImageByKey('left');
							break;
							case 40:
							_clip.switchImageByKey('down');
							break;
							case 38:
							_clip.switchImageByKey('up');
							break;
							case 17:
							_clip.desaturateOnZoom();					
							scaleAllTo({scale:CLIP_SCALE, xPos:_clipOriginX, yPos:_clipOriginY});
							_clip.setHasBeenClicked(true);
							hideMenu();					
							case 32:
							_clip.desaturateOnZoom();
							scaleAllTo({scale:CLIP_SCALE, xPos:_clipOriginX, yPos:_clipOriginY});
							_clip.setHasBeenClicked(true);
							hideMenu();
							break;
						}
					}
				}
				Main.prototype.scaleAllTo = function scaleAllTo(scaleObject) {
					showLogo(false);
					showCopyright(false);
					TweenLite.to(_clip, 
					                   ((ZOOM == "OUT") ? 0.25 : 1), 
											{ x:scaleObject.xPos, 
											  y:scaleObject.yPos, 
											  scaleX:scaleObject.scale, 
											  scaleY:scaleObject.scale, 
											  ease:Quintic.easeIn 
											} 
								);
					ZOOM = (scaleObject.scale != CLIP_SCALE) ? "IN" : "OUT";
					_scaled = true;
				}
				Main.prototype.onUpdate = function(event) { this.mainStage.update(); }
				Main.prototype.removeMenu = function () { this.Menu.graphics.clear(); }
				Main.prototype.hideMenu = function () { this.Menu.visible = false; }
				Main.prototype.showMenu = function () { this.Menu.visible = true; }
				Main.prototype.scaleMenu = function scaleMenu(scX, scY, sMenu) {
					this.scale = Function(scX,scY){
						sMenu.scaleX = scX;
						sMenu.scaleY = scY;
					}
				}
				Main.prototype.showLogo = function showLogo(__visible) {
					this.visible: Function(__visible){
						this.Main._Logo.visible = __visible;
						this.Main._Logo.enabled = __visible;
					}
				}
				Main.prototype.showCopyright = function showCopyright(__visible) {
					this.visible: Function(__visible){
						this.Main._copyright.visible = __visible;
						this.Main._copyright.enabled = __visible;
					}
				
				}
}
