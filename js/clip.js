(function(){
	function photoPositions(){
			 var pPositions  = new photoPositions();
			     pPositions = function() {
					photoPositions.prototype["a"],
					photoPositions.prototype["b"],
					photoPositions.prototype["c"],
					photoPositions.prototype["d"],
					photoPositions.prototype["e"],
					photoPositions.prototype["f"],		
					photoPositions.prototype["g"],
					photoPositions.prototype["h"],
					photoPositions.prototype["i"],
					photoPositions.prototype["j"],
					photoPositions.prototype["k"],
					photoPositions.prototype["l"],
					photoPositions.prototype["m"],
					photoPositions.prototype["n"],
					photoPositions.prototype["o"],
					photoPositions.prototype["p"],
					photoPositions.prototype["q"],
					photoPositions.prototype["r"],
					photoPositions.prototype["s"],
					photoPositions.prototype["t"],
					photoPositions.prototype["u"],
					photoPositions.prototype["v"],
					container:          {this.photoPositions.DisplayObjectContainer:this.photoPositions['container']},
					controller:         this.photoPositions['controller:Main_ChrisDavis4,
					offsets:            [0=>OFF_SET_X,1=>,OFF_SET_Y],
		            hasBeenClicked:     this.photoPositions[bool=>false],
		            currentClipthis.photoPositions['_currentClip'],
		
					clip: function clip(__c) {
						controller = __c;
						
						instantiateClips();
						desaturateAll();
						setMouseFunctions();
						initiateMouseTracking();
					},
		
				}
				filter: function desaturate() {
					var x = [ 0.33, 0.33, 0.33, 
					          0,    0,    0.33, 
							  0.33, 0.33, 0, 
							  0,    0.33, 0.33, 
							  0.33, 0,    0, 
							  0,    0,    
							  0,    1,    
							  0];
					return new matrix(x);
				}
				filter: function darkenDesaturate() {
					var y = [ 
					          0.33, 0.33, 0.33,   
					          0,10, 0.33, 0.33, 
							  0.33, 0,10, 0.33, 
							  0.33, 0.33, 0,
							  10,   0,    0,
							  0,    1,    10
							];
					;
					return new matrix(y);
				}
		        filter: function saturate() {
					var x = [ 
					          1, 0, 0, 0, 0,
		                      0, 1, 0, 0, 0,
		                      0, 0, 1, 0, 0,
		                      0, 0, 0, 1, 0, 
							]; 
			        return new matrix(x);
				}
				MouseEvent: function getSaturate(event) {
					if(hasBeenClicked != true){
						event.currentTarget.filters = saturate();
					}
		        }
		        MouseEvent: function getDesaturate(event) {
					if(hasBeenClicked != true){
						event.currentTarget.filters = desaturate();
					}
				}
				MouseEvent: function photoClicked(event) {
					if (hasBeenClicked)
						{ return; }
					var scaleTO             = 3;
					var whichClip           = event['clip'];
						currentClip         = whichClip;
						currentClip.filters = saturate();
						darkenDesaturateAll();
						controller.showMenu();
					switch(String(whichClip.name)){
						case 'a':
							controller.scaleAllTo(scaleTO+0.1, 3900, 5534);
							break;
						case 'b':
							controller.scaleAllTo(scaleTO+0.1, 10000, 2750);
							break;
						case 'c':
							controller.scaleAllTo(scaleTO+0.1,  6681.2,2750);
							break;
						case 'd':
							controller.scaleAllTo(scaleTO+0.1,  3527,2750);
							break;
						case 'e':
							controller.scaleAllTo(scaleTO+0.1, 306.6,2750);
							break;
						case 'f':
							controller.scaleAllTo(scaleTO+0.1,  -2248,2750);
							break;
						case 'g':
							controller.scaleAllTo(scaleTO+0.1,  13550.2,-33.9);
							break;
						case 'h':
							controller.scaleAllTo(scaleTO+0.1,   10761, -33.9);
							break;
						case 'i':
							controller.scaleAllTo(scaleTO+0.1,   8307, -33.9);
							break;
						case 'j':
							controller.scaleAllTo(scaleTO+0.1,   6115, -33.9);
							break;
						case 'k':
							controller.scaleAllTo(scaleTO+0.1,   3952, -33.9);
							break;
						case 'l':
							controller.scaleAllTo(scaleTO+0.1,  1818, -33.9);
							break;
						case 'm':
							controller.scaleAllTo(scaleTO+0.1,  -961, -33.9);
							break;
						case 'n':
							controller.scaleAllTo(scaleTO+0.1,  -3948, -33.9);
							break;
						case 'o':
							controller.scaleAllTo(scaleTO+0.1, -6402, -33.9);
							break;
						case 'p':
							controller.scaleAllTo(scaleTO+0.1, 12108, -2813);
							break;
						case 'q':
							controller.scaleAllTo(scaleTO+0.1, 9489, -2813);
							break;
						case 'r':
							controller.scaleAllTo(scaleTO+0.1, 6967, -2813);
							break;
						case 's':
							controller.scaleAllTo(scaleTO+0.1, 4168, -2813);
							break;
						case 't':
							controller.scaleAllTo(scaleTO+0.1, 1418, -2813);
							break;
						case 'u':
							controller.scaleAllTo(scaleTO+0.1, -1418, -2813);
							break;				
						case 'v':
							controller.scaleAllTo(scaleTO+0.1, -4357, -2813);
							break;
					}
					hasBeenClicked = true;
				}
				event: function keyBoardClicked(next) {
					if (hasBeenClicked){ return; }
						var getChild = new Clip();
						try {
							getChild = this.getChildByName(next) as MovieClip;
						} catch (e) {
							trace('getChild error: ' + e);
						} finally {
						
						}
					}
					if (getChild == null) {
						{ return; }												
						darkenDesaturateAll();
						currentClip         = getChild;
						currentClip.filters = [saturate()];
						
						var scaleTO:Number = 3;
						switch(String(getChild.name)){
							case 'a':
								controller.scaleAllTo(scaleTO+0.1,      3900,    5534);
								break;
							case 'b':
								controller.scaleAllTo(scaleTO+0.1,     10000,    2750);
								break;
							case 'c':
								controller.scaleAllTo(scaleTO+0.1,    6681.2,   2750);
								break;
							case 'd':
								controller.scaleAllTo(scaleTO+0.1,     3527,     2750);
								break;
							case 'e':
								controller.scaleAllTo(scaleTO+0.1,    306.6,    2750);
								break;
							case 'f':
								controller.scaleAllTo(scaleTO+0.1,    -2248,    2750);
								break;
							case 'g':
								controller.scaleAllTo(scaleTO+0.1,  13550.2,   -33.9);
								break;
							case 'h':
								controller.scaleAllTo(scaleTO+0.1,    10761,   -33.9);
								break;
							case 'i':
								controller.scaleAllTo(scaleTO+0.1,    8307,    -33.9);
								break;
							case 'j':
								controller.scaleAllTo(scaleTO+0.1,    6115,    -33.9);
								break;
							case 'k':
								controller.scaleAllTo(scaleTO+0.1,    3952,     -33.9);
								break;
							case 'l':
								controller.scaleAllTo(scaleTO+0.1,    1818,     -33.9);
								break;
							case 'm':
								controller.scaleAllTo(scaleTO+0.1,    -961,      -33.9);
								break;
							case 'n':
								controller.scaleAllTo(scaleTO+0.1,   -3948,       -33.9);
								break;
							case 'o':
								controller.scaleAllTo(scaleTO+0.1,   -6402,      -33.9);
								break;
							case 'p':
								controller.scaleAllTo(scaleTO+0.1,   12108,     -2813);
								break;
							case 'q':
								controller.scaleAllTo(scaleTO+0.1,    9489,     -2813);
								break;
							case 'r':
								controller.scaleAllTo(scaleTO+0.1,    6967,      -2813);
								break;
							case 's':
								controller.scaleAllTo(scaleTO+0.1,    4168,     -2813);
								break;
							case 't':
								controller.scaleAllTo(scaleTO+0.1,    1418,     -2813);
								break;
							case 'u':
								controller.scaleAllTo(scaleTO+0.1,   -1418,     -2813);
								break;				
							case 'v':
								controller.scaleAllTo(scaleTO+0.1,   -4357,     -2813);
								break;
						}
						hasBeenClicked = true;
					}
					desaturateAll: function() {
						this.clip.prototype.all = new array(
											 photoPositions["a"], 
											 photoPositions["b"], 
											 photoPositions["c"], 
											 photoPositions["d"], 
											 photoPositions["e"], 
											 photoPositions["f"], 
											 photoPositions["g"],
											 photoPositions["h"],
											 photoPositions["i"],
											 photoPositions["j"],
											 photoPositions["k"],
											 photoPositions["l"],
											 photoPositions["m"],
											 photoPositions["n"],
											 photoPositions["o"],
											 photoPositions["p"],
											 photoPositions["q"],
											 photoPositions["r"],
											 photoPositions["s"],
											 photoPositions["t"],
											 photoPositions["u"],
											 photoPositions["v"]
										   );
						for (var i = 0; i < all.length(); i++) 
							{all[i].filters = desaturate();}
					}
					saturateAll: function() {
						var all = this.clip.prototype.all; 
						for (var i:Number = 0; i < all.length; i++) {
							all[i].filters = saturate();
						}
					}
			}

}		
(function(){
	function clip(){
		var cClips  = new clip();
			cClips  = function() 
				{clip=this;}
			cClips.prototype.setMouseFunctions: function () {
				var all:Array = this.clip.prototype.all = new array(
											 photoPositions["a"], 
											 photoPositions["b"], 
											 photoPositions["c"], 
											 photoPositions["d"], 
											 photoPositions["e"], 
											 photoPositions["f"], 
											 photoPositions["g"],
											 photoPositions["h"],
											 photoPositions["i"],
											 photoPositions["j"],
											 photoPositions["k"],
											 photoPositions["l"],
											 photoPositions["m"],
											 photoPositions["n"],
											 photoPositions["o"],
											 photoPositions["p"],
											 photoPositions["q"],
											 photoPositions["r"],
											 photoPositions["s"],
											 photoPositions["t"],
											 photoPositions["u"],
											 photoPositions["v"]
										   );
				for (var i = 0; i < all.length; i++) {
					var m = createjs.MovieClip(all[i])
						m.addEventListener(MouseEvent.onMouseOut,   getSaturate);
						m.addEventListener(MouseEvent.onMouseOver,  getDesaturate);
						m.addEventListener(MouseEvent.CLICK,        photoClicked);
			    }
		    }
			cClips.prototype.switchImageByKey: function switchImageByKey(_direction = "") {
				var all        = new array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v");
				var jumpUP     = -5;
				var jumpDOWN   =  5;
				var jumpLEFT   = -1;
				var jumpRIGHT  =  1;
				switch(_direction){
					case 'up':
						if (_currentClip.name == 'a' || _currentClip.name == 'b' || _currentClip.name == 'c' || _currentClip.name == 'd' || _currentClip.name == 'e'){
							if(_currentClip.name == 'a')
								{ jumpUP = 1 } 
							else if (_currentClip.name == 'b')
								{ jumpUP = -1 } 
							else if (_currentClip.name == 'c')
								{ jumpUP = -2 } 
							else if (_currentClip.name == 'd')
								{ jumpUP = -3 } 
							else if (_currentClip.name == 'e')
								{ jumpUP = -4 }
							this.clip.keyBoardClicked(all[ new Number(all.indexOf(_currentClip.name) + jumpUP)]);
							break;
					case 'down':
						if (currentClip.name == 'r' || currentClip.name == 's' || currentClip.name == 't' || currentClip.name == 'u' || currentClip.name == 'v'){
							if(currentClip.name == 'r')
								{ jumpDOWN = 1 } 
							else if (currentClip.name == 's')
								{ jumpDOWN = 1 } 
							else if (currentClip.name == 't')
								{ jumpDOWN = 1 } 
							else if (currentClip.name == 'u')
								{ jumpDOWN = 1 } 
							else if (currentClip.name == 'v')
								{ jumpDOWN = -2}
						}
						this.clip.keyBoardClicked(all[new Number(all.indexOf(_currentClip.name) + jumpDOWN)]);
						break;
					case 'left':
						if (_currentClip.name == 'a' || _currentClip.name == 'p'){
							if(_currentClip.name == 'a')
							{ jumpLEFT = 5 } 
						  else if (_currentClip.name == 'p')
							{ jumpLEFT = 1 }
						}
						this.clip.keyBoardClicked(all[new Number(all.indexOf(_currentClip.name) + jumpLEFT)]);
						break;
					case 'right':
						if (_currentClip.name == 'a' || _currentClip.name == 'v'){
							if(_currentClip.name == 'a')
								{ jumpLEFT = 1 } 
							else if (_currentClip.name == 'v')
								{ jumpLEFT = -1 }
						}
						this.clip.keyBoardClicked(all[new Number(all.indexOf(_currentClip.name) + jumpRIGHT)]);
						break;
					}
				}
			}
			cClips.prototype.dragClip:           function dragClip(event) 
				{this.startDrag()}
			cClips.prototype.releaseClip:        function releaseClip(event) 
				{this.stopDrag()}
			cClips.prototype.setHasBeenClicked:  function setHasBeenClicked(clicked)
				{this.hasBeenClicked = clicked }
	}
}
