(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"WhatsappChat_atlas_1", frames: [[1084,886,38,56],[0,0,1082,1920],[1084,0,860,884]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["WhatsappChat_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["WhatsappChat_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.IMG_5350 = function() {
	this.initialize(img.IMG_5350);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4337,4337);


(lib.sendiconmessage = function() {
	this.initialize(ss["WhatsappChat_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.LoginBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Login", "53px 'Times New Roman'", "#FFFFFF");
	this.text.lineHeight = 61;
	this.text.lineWidth = 129;
	this.text.alpha = 0.89803922;
	this.text.parent = this;
	this.text.setTransform(59.05,13.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,51,255,0.898)").s().p("AzcHIIAAuPMAm5AAAIAAOPg");
	this.shape.setTransform(124.5,45.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,249,91.2);


(lib.LoginBg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Iconmessage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {stoptyping:0,playtyping:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Icons
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-9.55,-14.05,0.5,0.5);

	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["WhatsappChat_atlas_1"],2);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.04,0,0,0.04,-16.6,-18.5)).s().p("AilCpIAAgBIAhABgAiZCQIAOg8IAShSIC+gQQhegGhggFIgLg7IgRhUIADABIADACIADABIAEACIAFADIADABIAIAEIADABIADACIABAAIADACIABAAIADACIAEABIADACIABABIADABIADABIAEACIABABIADABIADACIAEABIABABIAEACIADABIAHAEIAEABIADACIABABIACABIACABIADABIADACIAIAEIADABIAIAEIADABIAIAEIAEACIADABIABABQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIADABIADABIAAABIADABIACABIACABIABABIADABIAHADIABABIADACIAHACIABABIAEACIADABIADACIABABIADABIAEACIAAAAIADABIABABIADACIADABQABAAAAAAQAAABABAAQAAAAABAAQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIABABIADACIAHADIABAAIADACIAHADIAAABIAEABIAEACIACABIACABIADACIADABIAEACIABAAIACACIACAAIADACIADABIAEACIABABIADABIAHADIAAABIAEABIAGADIABABIAEACIADABIAJAFQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgHAEIgHADIgDABIgBABIgEACIgCABIgBABIgCAAIgCABIgCAAIgBABIgCABIgCABIgCABQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAABIgDABIgDACIgDABIgDACIgCAAIgBABIgCABIgEACIgJAFIgHADIgCABIgBABIgDABIgBABIgDABIgDACIgDABIgDACQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAABIgEABIgDACIgCABIgDABIgCABIgCACIgDAAIgHAEIgHAEIgBAAIgEACIgCABIgBABIgCABIgCABIgCABIgBABIgCAAIgCABIgCABIgEACIgBABIgCABQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAABIgCABIgDACIgDABIgCABIgMAGQgEABgDADIgCABIgBAAIgEACIgDABIAAABIgDABIgBABIgCABIgDABIgDACQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBABIgDABIgDACIgJAEIgIAFQgEABgDACIgDABIgBABIgEACIgCABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAABIgDABIgEACIgDABIgDACIgDACIgDABIgCABIgCABIgCABIgBAAIgCABQgDADgEABIgJAFIgCAAIgBABIgCABIgDACIgEABIAAgBg")
	}.bind(this);
	this.shape.setTransform(4.4813,1.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-15.5,33.2,33.7);


// stage content:
(lib.WhatsappChat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		root=this;
		root.stop();
		root.Iconmessage_mc.stop();
		
		async function login(username){
			console.log(username)
			     const response = await fetch('http://localhost:3000/api/login?username='+username, {
					method: 'POST',
					 mode: "no-cors",
					headers: { 'Content-Type': 'application/json'},
				    body: JSON.stringify({username})
				});
			const string = await response.json();
			const json = string === "" ? {} : JSON.parse(string);
			console.log(string);
			console.log(json);
		}
		
		
		root.loginBtn.addEventListener("click", ()=>{
		var username,
		element = document.getElementById('username_Input');
			if (element != null) {
		    username = element.value;
			}
		else {
		    username = null;
		}
			login(username)
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// MakCharacter (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AixCyQhKhJAAhpQAAhoBKhJQBJhKBoAAQBoAABKBKQBKBJAABoQAABphKBJQhKBKhoAAQhoAAhJhKg");
	mask.setTransform(134,74.9);

	// Charachter
	this.instance = new lib.IMG_5350();
	this.instance.setTransform(105,46,0.0131,0.0131);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj2D3QhnhmAAiRQAAiQBnhmQBmhnCQAAQCRAABmBnQBnBmAACQQAACRhnBmQhmBniRAAQiQAAhmhng");
	this.shape.setTransform(133.9952,74.8932,0.721,0.721);

	var maskedShapeInstanceList = [this.instance,this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Login
	this.username_Input = new lib.an_TextInput({'id': 'username_Input', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.username_Input.name = "username_Input";
	this.username_Input.setTransform(304.15,376.95,4,4,0,0,0,50,11);

	this.loginBtn = new lib.LoginBtn();
	this.loginBtn.name = "loginBtn";
	this.loginBtn.setTransform(300.05,592.8,1,1,0,0,0,124.5,45.6);
	new cjs.ButtonHelper(this.loginBtn, 0, 1, 1);

	this.loginForm = new lib.LoginBg("synched",0);
	this.loginForm.name = "loginForm";
	this.loginForm.setTransform(319.2,482.1,1,1,0,0,0,320.9,482.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(0.1,1,1).p("EgAPhLUIAfAAEAAQBLVIgfAA");
	this.shape_1.setTransform(1339.725,482.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.loginForm},{t:this.loginBtn},{t:this.username_Input}]}).wait(1));

	// Objects
	this.Iconmessage_mc = new lib.Iconmessage();
	this.Iconmessage_mc.name = "Iconmessage_mc";
	this.Iconmessage_mc.setTransform(543.6,912.85);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(48.9,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.Iconmessage_mc}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(368.9,479,973.4,486.20000000000005);
// library properties:
lib.properties = {
	id: '267483B8189D3343994CBE7342C5AC46',
	width: 640,
	height: 960,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/IMG_5350.png?1664563903153", id:"IMG_5350"},
		{src:"images/WhatsappChat_atlas_1.png?1664563903132", id:"WhatsappChat_atlas_1"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1664563903153", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1664563903153", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1664563903153", id:"an.TextInput"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['267483B8189D3343994CBE7342C5AC46'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;