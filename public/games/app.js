!function(e){function t(t){for(var s,a,c=t[0],o=t[1],h=t[2],l=0,u=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&u.push(n[a][0]),n[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);for(p&&p(t);u.length;)u.shift()();return r.push.apply(r,h||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],s=!0,c=1;c<i.length;c++){var o=i[c];0!==n[o]&&(s=!1)}s&&(r.splice(t--,1),e=a(a.s=i[0]))}return e}var s={},n={0:0},r=[];function a(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=s,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(i,s,function(t){return e[t]}.bind(null,s));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var h=0;h<c.length;h++)t(c[h]);var p=o;r.push([1,1]),i()}([,function(e,t,i){"use strict";i.r(t);var s=i(0),n=i.n(s);class r extends n.a.Scene{constructor(e,t){super(e),this.config=t,this.screenCenter=[t.width/2,t.height/2],this.fontSize=32,this.lineHeight=42,this.fontOptions={fontSize:this.fontSize+"px",fill:"#FFF"}}create(){if(this.add.image(0,0,"sky").setOrigin(0,0),this.config.canGoBack){this.add.image(this.config.width-10,this.config.height-10,"back").setOrigin(1).setScale(2).setInteractive().on("pointerup",(()=>{this.scene.start("MenuScene")}))}}createMenu(e,t){let i=0;e.forEach((e=>{const s=[this.screenCenter[0],this.screenCenter[1]-50+i];e.textGO=this.add.text(...s,e.text,this.fontOptions).setOrigin(.5,1),i+=this.lineHeight,t(e)}))}}var a=r;var c=class extends a{constructor(e){super("PlayScene",e),this.initialBirdPosition={x:80,y:300},this.bird=null,this.pipes=null,this.isPaused=!1,this.flapVelocity=300,this.pipeHorizontalDistance=0,this.score=0,this.scoreText="",this.currentDifficulty="easy",this.difficulties={easy:{pipeVerticalDistanceRange:[150,190],pipeHorizontalDistanceRange:[450,500]},normal:{pipeVerticalDistanceRange:[125,165],pipeHorizontalDistanceRange:[400,450]},hard:{pipeVerticalDistanceRange:[100,130],pipeHorizontalDistanceRange:[300,400]}}}create(){this.currentDifficulty="easy",super.create(),this.createBird(),this.createPipes(),this.createColliders(),this.createScore(),this.createPause(),this.handleInputs(),this.listenEvents(),this.anims.create({key:"fly",frames:this.anims.generateFrameNumbers("birdy",{start:8,end:15}),frameRate:8,repeat:-1}),this.bird.play("fly")}update(){this.checkGameStatus(),this.recyclePipes()}listenEvents(){this.pauseEvent||(this.pauseEvent=this.events.on("resume",(()=>{this.initialTime=3,this.countDownText=this.add.text(...this.screenCenter,this.initialTime,{fontSize:"50px",fill:"#FFF"}).setOrigin(.5),this.timedEvent=this.time.addEvent({delay:1e3,callback:this.countDown,callbackScope:this,loop:!0})})))}countDown(){this.initialTime--,this.countDownText.setText(this.initialTime),this.initialTime<=0&&(this.isPaused=!1,this.countDownText.setText(""),this.physics.resume(),this.timedEvent.remove())}createBird(){this.bird=this.physics.add.sprite(this.config.startPosition.x,this.config.startPosition.y,"birdy").setFlipX(!0).setScale(3),this.bird.setBodySize(this.bird.width,this.bird.height-8),this.bird.body.gravity.y=600,this.bird.setCollideWorldBounds(!0)}createPipes(){this.pipes=this.physics.add.group();for(let e=0;e<5;e++){const e=this.pipes.create(800,0,"pipe").setImmovable(!0).setOrigin(0,1),t=this.pipes.create(0,0,"pipe").setImmovable(!0).setOrigin(0,0);this.placePipe(e,t)}this.pipes.setVelocityX(-200)}createColliders(){this.physics.add.collider(this.bird,this.pipes,this.gameOver,null,this)}createScore(){this.score=0;const e=localStorage.getItem("bestScore");this.scoreText=this.add.text(16,16,"Score: 0",{fontSize:"32px",fill:"#000"}),this.bestScore=this.add.text(16,52,"Best Score: "+(e||0),{fontSize:"18px",fill:"#000"})}createPause(){this.isPaused=!1;const e=this.add.image(this.config.width-10,this.config.height-10,"pause").setInteractive().setScale(3).setOrigin(1);this.input.keyboard.on("keydown_P ",(()=>{this.isPaused=!0,this.physics.pause(),this.scene.pause(),this.scene.launch("PauseScene")})),e.on("pointerdown",(()=>{this.isPaused=!0,this.physics.pause(),this.scene.pause(),this.scene.launch("PauseScene")}))}handleInputs(){this.input.on("pointerdown",this.flap,this),this.input.keyboard.on("keydown_SPACE",this.flap,this)}placePipe(e,t){const i=this.difficulties[this.currentDifficulty],s=this.getRightMostPipe(),n=Phaser.Math.Between(...i.pipeVerticalDistanceRange),r=Phaser.Math.Between(20,this.config.height-20-n),a=Phaser.Math.Between(...i.pipeHorizontalDistanceRange);e.x=s+a,e.y=r,t.x=e.x,t.y=e.y+n}checkGameStatus(){(this.bird.getBounds().bottom>=this.config.height||this.bird.getBounds().top<=0)&&this.gameOver()}recyclePipes(){const e=[];this.pipes.getChildren().forEach((t=>{t.getBounds().right<=0&&(e.push(t),2===e.length&&(this.placePipe(...e),this.increaseScore(),this.saveBestScore(),this.changeDifficulty()))}))}changeDifficulty(){5===this.score&&(this.currentDifficulty="normal"),10===this.score&&(this.currentDifficulty="hard")}getRightMostPipe(){let e=0;return this.pipes.getChildren().forEach((function(t){e=Math.max(t.x,e)})),e}saveBestScore(){const e=localStorage.getItem("bestScore"),t=e&&parseInt(e,10);(!t||this.score>t)&&localStorage.setItem("bestScore",this.score)}gameOver(){this.physics.pause(),this.bird.setTint(15616036),this.saveBestScore(),this.time.addEvent({delay:1e3,callback:()=>{this.scene.restart()},loop:!1})}flap(){this.isPaused||(this.bird.body.velocity.y=-this.flapVelocity)}increaseScore(){this.score++,this.scoreText.setText("Score: "+this.score)}};var o=class extends a{constructor(e){super("MenuScene",e),this.menu=[{scene:"PlayScene",text:"Play"},{scene:"ScoreScene",text:"Score"},{scene:"AboutScene",text:"About"},{scene:null,text:"Exit"}]}create(){super.create(),this.bird=this.physics.add.sprite(this.config.startPosition.x,this.config.startPosition.y,"birdy").setFlipX(!0).setScale(3),this.bird.setBodySize(this.bird.width,this.bird.height-8),this.createMenu(this.menu,this.setupMenuEvents.bind(this)),this.anims.create({key:"fly",frames:this.anims.generateFrameNumbers("birdy",{start:8,end:15}),frameRate:8,repeat:-1}),this.bird.play("fly")}setupMenuEvents(e){const t=e.textGO;t.setInteractive(),t.on("pointerover",(()=>{t.setStyle({fill:"#ff0"})})),t.on("pointerout",(()=>{t.setStyle({fill:"#fff"})})),t.on("pointerup",(()=>{e.scene&&this.scene.start(e.scene),"Exit"===e.text&&this.game.destroy(!0)}))}};class h extends n.a.Scene{constructor(){super("PreloadScene")}preload(){this.load.setPath("assets"),this.load.image("sky","sky.png"),this.load.spritesheet("birdy","birdSprite.png",{frameWidth:16,frameHeight:16}),this.load.image("pipe","pipe.png"),this.load.image("pause","pause.png"),this.load.image("back","back.png")}create(){this.add.image(0,0,"sky").setOrigin(0,0),this.scene.start("MenuScene")}}var p=h;var l=class extends a{constructor(e){super("ScoreScene",{...e,canGoBack:!0})}create(){super.create();const e=localStorage.getItem("bestScore");this.add.text(...this.screenCenter,"Best Score: "+(e||0),this.fontOptions).setOrigin(.5)}};var u=class extends a{constructor(e){super("PauseScene",e),this.menu=[{scene:"PlayScene",text:"Continue"},{scene:"MenuScene",text:"Exit"}]}create(){super.create(),this.createMenu(this.menu,this.setupMenuEvents.bind(this))}setupMenuEvents(e){const t=e.textGO;t.setInteractive(),t.on("pointerover",(()=>{t.setStyle({fill:"#ff0"})})),t.on("pointerout",(()=>{t.setStyle({fill:"#fff"})})),t.on("pointerup",(()=>{e.scene&&"Continue"===e.text?(this.scene.stop(),this.scene.resume(e.scene)):(this.scene.stop("PlayScene"),this.scene.start(e.scene))}))}};const d={width:800,height:600,startPosition:{x:80,y:300}},f=[p,o,l,class extends a{constructor(e){super("AboutScene",{...e,canGoBack:!0})}create(){super.create(),this.bird=this.physics.add.sprite(380,270,"birdy").setScale(3),this.anims.create({key:"idle",frames:this.anims.generateFrameNumbers("birdy",{start:16,end:18}),frameRate:6,repeat:-1}),this.bird.play("idle"),this.add.text(...this.screenCenter,"Erco",this.fontOptions).setOrigin(.5)}},c,u],y=e=>new e(d),g={type:n.a.AUTO,...d,pixelArt:!0,physics:{default:"arcade",arcade:{}},scene:f.map(y)};new n.a.Game(g)}]);