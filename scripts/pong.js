var timer;
var counter = 0;
var player_score = 0;
var player2_score = 0;
var staller;
var unhit = true;
var player2 = false;
var player_keypressed = '';
var player2_keypressed = '';
var ctx;

let paddle = document.getElementById('paddle');

let canvas = document.createElement('canvas');

let SCREEN_WIDTH;
let SCREEN_HEIGHT;

let CANV_WIDTH;
let CANV_HEIGHT;

let PADDLE_WIDTH;
let PADDLE_HEIGHT;

let BALL_HEIGHT;

let midHeight;

let momentumShift;

var dx;
let serveHeight;
var dy;
var player_bar;
var player2_bar;
var circle;
var dyBar;

function Bar(x,y){
  this.x=x;
  this.y=y;
}

function Circle(x,y,r){
  this.x=x;
  this.y=y;
  this.r=r;
}

function doKeyDown(e){
  if (e.key == 'w') player_keypressed = 'w';
  else if (e.key == 's') player_keypressed = 's';
  if (player2){
  	if (e.key == 'ArrowUp') player2_keypressed = 'ArrowUp';
  	else if (e.key == 'ArrowDown') player2_keypressed = 'ArrowDown';
  }
}

function doKeyUp(e) {
	if (e.key == player_keypressed) player_keypressed = '';
	if (player2){
		if (e.key == player2_keypressed) player2_keypressed = '';
	}
}

function doTouch(x,y){
  console.log(player_bar.y, ' | ', y, ' | ', player_bar.y+PADDLE_HEIGHT);
  if (y-PADDLE_HEIGHT/3<player_bar.y){
    player_keypressed = 'w';
  } else if (y>player_bar.y+PADDLE_HEIGHT) {
    player_keypressed = 's';
  } else {
    player_keypressed = '';
  }
}

function getCursorPosition(e) {
    let yVal;
    let xVal;
    try {
      yVal = e.targetTouches[0].pageY;
      xVal = e.targetTouches[0].pageX;
    } catch {
      yVal = e.clientY;
      xVal = e.clientX;
    }
    const rect = canvas.getBoundingClientRect();
    const x = xVal - rect.left;
    const y = yVal - rect.top;
    doTouch(x,y);
}

function drawBall(c) {
  ctx.beginPath();
  ctx.arc(c.x, c.y, c.r, 0, Math.PI*2, true);
  ctx.fill();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "lightblue";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "black";
  ctx.fillText(`${player_score}`, canvas.width/3, SCREEN_WIDTH*.05);
  ctx.fillText(`${player2_score}`, canvas.width-canvas.width/3, SCREEN_WIDTH*.05);
  ctx.setLineDash([SCREEN_WIDTH*.01, SCREEN_WIDTH*.02]);
  ctx.lineWidth = SCREEN_WIDTH*.002;
  ctx.beginPath();
  ctx.moveTo(canvas.width/2, 0);
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();
  drawBall(circle);
  if (circle.y+dy > canvas.height || circle.y+dy < 0) dy=-dy;
  if (circle.x+dx<player_bar.x+PADDLE_WIDTH && (circle.y>=player_bar.y-BALL_HEIGHT&&circle.y<=player_bar.y+PADDLE_HEIGHT+BALL_HEIGHT)){
  	dx=-dx;
  	if (unhit) {
  		unhit = false;
  		dx *= 2;
  		dy *= 2;
  	}
  	if (player_keypressed == 'w') {
  		dy = dy-momentumShift;
  	} else if (player_keypressed == 's') {
  		dy = dy+momentumShift;
  	}
  }
  if (circle.x+dx>player2_bar.x && (circle.y>=player2_bar.y-BALL_HEIGHT&&circle.y<=player2_bar.y+PADDLE_HEIGHT+BALL_HEIGHT)) {
  	dx=-dx;
  	if (unhit) {
  		unhit = false;
  		dx *= 2;
  		dy *= 2;
  	}
  	if (player_keypressed == 'ArrowUp') {
  		dy = dy-momentumShift;
  	} else if (player_keypressed == 'ArrowDown') {
  		dy = dy+momentumShift;
  	}
  }
  if (circle.x+dx > canvas.width || circle.x+dx < 0) dx=-dx;
  circle.x += dx;
  circle.y += dy;
  counter += 1;
  if (counter%5==0 && !player2){
  	  if (circle.y>player2_bar.y+PADDLE_HEIGHT) player2_keypressed = 'ArrowDown';
	  else if (circle.y<player2_bar.y) player2_keypressed = 'ArrowUp';
	  else player2_keypressed = '';
  }
  if (player2_keypressed != ''){
  		if(player2_keypressed =='ArrowUp'){
    		if(player2_bar.y-dyBar>-dyBar) player2_bar.y-=dyBar;
  	}
  		else if(player2_keypressed =='ArrowDown'){
    		if(player2_bar.y+PADDLE_HEIGHT+dyBar<=canvas.height+dyBar) player2_bar.y+=dyBar;
  	}
  }
  if (player_keypressed != ''){
  		if(player_keypressed=='w'){
    		if(player_bar.y-dyBar>-dyBar) player_bar.y-=dyBar;
  	}
  		else if(player_keypressed=='s'){
    		if(player_bar.y+PADDLE_HEIGHT+dyBar<=canvas.height+dyBar) player_bar.y+=dyBar;
  	}
  }

  ctx.drawImage(paddle,player_bar.x,player_bar.y,PADDLE_WIDTH,PADDLE_HEIGHT);
  ctx.drawImage(paddle,player2_bar.x,player2_bar.y,PADDLE_WIDTH,PADDLE_HEIGHT);

  function scored(side){
  	eval(`${side}_score+=1`);
  	eval(`if (${side}_score == 7) alert('${side} won!')`);
  	if (!unhit) {
  		unhit = true;
  		dx *= .5;
  	}
    serveHeight = Math.ceil(Math.random()*100)+200;
    serveHeight = Math.random()*100 >= 50 ? serveHeight : -serveHeight;
    dy = CANV_HEIGHT/serveHeight;
  	let color = side=='player' ? 'green' : 'red';
  	circle.x = canvas.width/2;
    circle.y = canvas.height/2;
    dx=-dx;
    player2_bar.y = canvas.height/2-PADDLE_HEIGHT/2;
    player_bar.y = canvas.height/2-PADDLE_HEIGHT/2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  	ctx.fillStyle = "lightblue";
  	ctx.fillRect(0,0,canvas.width,canvas.height);
  	ctx.fillStyle = color;
  	ctx.fillText(`${player_score}`, canvas.width/3, SCREEN_WIDTH*.05);
 	  ctx.fillText(`${player2_score}`, canvas.width-canvas.width/3, SCREEN_WIDTH*.05);
 	  ctx.moveTo(canvas.width/2, 0);
  	ctx.lineTo(canvas.width/2, canvas.height);
  	ctx.stroke();
  	drawBall(circle);
  	ctx.drawImage(paddle,player_bar.x,player_bar.y,PADDLE_WIDTH,PADDLE_HEIGHT);
  	ctx.drawImage(paddle,player2_bar.x,player2_bar.y,PADDLE_WIDTH,PADDLE_HEIGHT);
    clearInterval(timer);
    staller = setTimeout(()=>{timer=setInterval(draw,15);},1000);
  }

  if(circle.x<player_bar.x+PADDLE_WIDTH){
    scored('player2');
  } else if (circle.x>player2_bar.x){
  	scored('player');
  }
}

function init() {
  window.addEventListener("keydown",doKeyDown,false);
  window.addEventListener("keyup", doKeyUp, false);
  window.addEventListener("mousedown", (e)=>{
    getCursorPosition(e);
    window.addEventListener('mousemove', getCursorPosition, false);
  }, false);
  window.addEventListener("mouseup", (e)=>{
    player_keypressed = '';
    window.removeEventListener('mousemove', getCursorPosition, false);
  }, false);
  window.addEventListener("touchstart", (e)=>{
    getCursorPosition(e);
    window.addEventListener('touchmove', getCursorPosition, false);
  }, false);
  window.addEventListener("touchend", ()=>{
    player_keypressed = '';
    window.removeEventListener('touchmove', getCursorPosition, false);
  }, false);
  ctx = canvas.getContext("2d");
  ctx.font = 'bold 3vw serif';
  timer=setInterval(draw, 15);
  return timer;
}

function start(players=1){

	if(players==2){
		player2 = true;
	}

	document.getElementById('canvHolder').innerHTML = '';
	document.getElementById('canvHolder').append(canvas);

  SCREEN_WIDTH = window.innerWidth;
  SCREEN_HEIGHT = window.innerHeight;

  CANV_WIDTH = Math.ceil(SCREEN_WIDTH*.75);
  CANV_HEIGHT = Math.min(Math.ceil(SCREEN_HEIGHT*.6), Math.ceil(SCREEN_WIDTH)*.7);

  PADDLE_WIDTH = CANV_WIDTH/50;
  PADDLE_HEIGHT = CANV_HEIGHT/7;

  BALL_HEIGHT = CANV_WIDTH/110;

  canvas.width = CANV_WIDTH;
  canvas.height = CANV_HEIGHT;

  midHeight = Math.ceil(canvas.height/2);

  momentumShift = CANV_HEIGHT/400;

  dx = CANV_WIDTH/240;
  serveHeight = Math.ceil(Math.random()*100)+200;
  serveHeight = Math.random()*100 >= 50 ? serveHeight : -serveHeight;
  dy = CANV_HEIGHT/serveHeight;
  player_bar=new Bar(0,canvas.height/2-PADDLE_HEIGHT/2);
  player2_bar = new Bar(canvas.width-PADDLE_WIDTH, canvas.height/2-PADDLE_HEIGHT/2);
  circle=new Circle(canvas.width/2,canvas.height/2-BALL_HEIGHT/2,BALL_HEIGHT);
  dyBar=CANV_HEIGHT/60;

	init();
}
