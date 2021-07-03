let container = document.getElementById('hackBlock');
let starter = document.getElementsByClassName('settings')[0];
let blockCounter;
let promptCounter;
let memTime;
let ansTime;
let roundCounter;
let correct = 0;

let puzzBlocks = [];
let digits = [];

function puzzBlock(){

	let colors = ['RED', 'BLUE', 'PURPLE', 'YELLOW', 'ORANGE', 'GREEN', 'BLACK', 'WHITE']
	let shapes = ['SQUARE', 'RECTANGLE', 'TRIANGLE', 'CIRCLE']
	let prompts = ['BACKGROUND COLOR', 'SHAPE', 'SHAPE COLOR', 'TEXT BACKGROUND COLOR', 'COLOR TEXT', 'SHAPE TEXT', 'NUMBER COLOR'];
	
	let selectedColors = [];
	while (selectedColors.length < 2) {
		let new_color = colors[Math.floor(Math.random()*8)];
		if (new_color != selectedColors[selectedColors.length-1]){
			selectedColors.push(new_color);
		}
	}
	while (selectedColors.length < 3) {
		let new_color = colors[Math.floor(Math.random()*8)];
		if (!selectedColors.includes(new_color)){
			selectedColors.push(new_color);
		}
	}
	while (selectedColors.length < 4) {
		let new_color = colors[Math.floor(Math.random()*8)];
		if (new_color != selectedColors[selectedColors.length-2]){
			selectedColors.push(new_color);
		}
	}

	this.shape = shapes[Math.floor(Math.random()*4)];
	this.shapeText = shapes[Math.floor(Math.random()*4)];
	this.background = selectedColors[0];
	this.shapeColor = selectedColors[1];
	this.textColor = selectedColors[2];
	this.numberColor = selectedColors[3];
	this.number = String(Math.ceil(Math.random()*blockCounter));
	this.colorText = colors[Math.floor(Math.random()*8)];
	this.prompt = prompts[Math.floor(Math.random()*7)];
	this.block = document.createElement('div');

	let curLen = digits.length;
	while (digits.length === curLen) {
		let newDig = Math.ceil(Math.random()*blockCounter);
		if (!digits.includes(newDig)){
			digits.push(newDig);
			this.digit = newDig;
		}
	}
	puzzBlocks.push(this);
	this.index = puzzBlocks.length;

}

puzzBlock.prototype.resolve = function() {
	return {
		'BACKGROUND COLOR': this.background, 
		'SHAPE': this.shape, 
		'SHAPE COLOR': this.shapeColor, 
		'TEXT BACKGROUND COLOR': this.textColor, 
		'COLOR TEXT': this.colorText, 
		'SHAPE TEXT': this.shapeText, 
		'NUMBER COLOR': this.numberColor
	}[this.prompt];
}

puzzBlock.prototype.digitBlock = function() {
	this.block.className = 'digitPlace';
	this.block.innerText = String(this.digit);
	let animationTime = Math.ceil(memTime/2);
	this.block.setAttribute('style', `--duration: ${animationTime};`);
	if (this.index != 1 && this.index != 7) {
		this.block.style.marginLeft = ".6vw";
	}
	return this.block;
}

puzzBlock.prototype.changeBlock = function() {

	let colorPalette = {
		'RED': '#7f0001',
		'BLUE': '#2894f4',
		'PURPLE': '#8e2fa0',
		'YELLOW': '#ffec47',
		'ORANGE': '#ff9909',
		'GREEN': '#50ac54',
		'BLACK': 'BLACK',
		'WHITE': 'WHITE',
	};

	this.block.innerHTML = '';
	this.block.classList.remove('digitPlace');
	this.block.className = 'quizBox';
	this.block.style.backgroundColor = colorPalette[this.background];
	
	let block_shape = document.createElement('div');
	block_shape.className = `internalShape ${this.shape}`;
	block_shape.style.backgroundColor = colorPalette[this.shapeColor];
	this.block.append(block_shape);

	let block_color_text = document.createElement('p');
	block_color_text.className = 'colorText';
	block_color_text.style.color = colorPalette[this.textColor];
	block_color_text.innerText = this.colorText;
	this.block.append(block_color_text);

	let block_number_text = document.createElement('p');
	block_number_text.className = 'numberText';
	block_number_text.style.color = colorPalette[this.numberColor];
	block_number_text.innerText = this.number;
	this.block.append(block_number_text);

	let block_shape_text = document.createElement('p');
	block_shape_text.className = 'shapeText';
	block_shape_text.style.color = colorPalette[this.textColor];
	block_shape_text.innerText = this.shapeText;
	this.block.append(block_shape_text);
}

function startHack(){
	
	container.innerHTML = '';
	let warning = document.createElement('p');
	warning.innerText = 'Get Ready!';
	warning.className = 'middleText';
	container.append(warning);
	
	function ongoingHack() {

		puzzBlocks = [];
		digits = [];

		let timerSection = document.createElement('section');
		timerSection.setAttribute('id', 'timerSection');
		let hackBlocksSection = document.createElement('section');
		hackBlocksSection.setAttribute('id', 'hackBlocksSection');
		if (blockCounter<=4) {
			hackBlocksSection.setAttribute('width', '75%');
		} else if (blockCounter==5) {
			hackBlocksSection.setAttribute('width', '85%');
		} else {
			hackBlocksSection.setAttribute('width', '100%');
		}
		let timebarDiv = document.createElement('div');
		timebarDiv.className = 'timebarContainer';
		let timebarLeft = document.createElement('div');
		let timebarRight = document.createElement('div');
		timebarLeft.className = 'round-time-bar left';
		timebarLeft.setAttribute('style', `--duration: ${ansTime};`);
		timebarRight.className = 'round-time-bar right';
		timebarRight.setAttribute('style', `--duration: ${ansTime};`);
		let answerSection = document.createElement('section');
		answerSection.setAttribute('id', 'answerSection');

		container.innerHTML = '';
		container.setAttribute('style', 'justify-content: flex-start');
		container.append(timerSection);
		container.append(hackBlocksSection);

		let timer = document.createElement('p');
		let time = [0,0,0];
		timer.innerText = '00:00:00';
		timerSection.append(timer);

		for (i=0; i<blockCounter;i++){
			let puzz = new puzzBlock();
			hackBlocksSection.append(puzz.digitBlock());
		}

		function updateTimer(){
			time[2] += 1;
			if (time[2] == 100) {
				time[2] = 0;
				time[1] += 1;
				if (time[1] == 60) {
					time[1] = 0;
					time[0] += 1;
				}
			}
			timer.innerText = (time[0]).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ':' + (time[1]).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ':' + (time[2]).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
		}

		function hackPhase(){

			container.setAttribute('style', 'justify-content: space-evenly');
			let audio = new Audio('assets/timer.wav');
			audio.loop = true;

			function setEnd(middleText){
				container.innerHTML = '';
				container.setAttribute('style', 'justify-content: center');
				let middleMessage = document.createElement('p');
				middleMessage.className = 'middleText end';
				middleMessage.innerText = middleText;
				container.append(middleMessage);
				let retryForm = document.createElement('form');
				retryForm.setAttribute('action', 'custom_hack.html');
				container.append(retryForm);
				let retryButton = document.createElement('button');
				retryButton.className = 'retry';
				retryButton.innerText = 'Retry';
				retryForm.append(retryButton);
				let homeForm = document.createElement('form');
				homeForm.setAttribute('action', 'index.html');
				container.append(homeForm);
				let homeButton = document.createElement('button');
				homeButton.className = 'home';
				homeButton.innerText = 'Home';
				homeForm.append(homeButton);
			}

			function failHack(){
				audio.pause();
				setEnd('SYSTEM DID NOT ACCEPT YOUR ANSWERS');
			}

			let promptIndexes = [];
			let answers = [];
			let questions = ['ENTER THE '];

			while (promptIndexes.length < promptCounter){
				let randInd = Math.floor(Math.random()*blockCounter);
				if (!promptIndexes.includes(randInd)){
					promptIndexes.push(randInd);
					answers.push(puzzBlocks[randInd].resolve());
					questions.push(`${puzzBlocks[randInd].prompt} (${puzzBlocks[randInd].digit})`);
					if (promptIndexes.length != promptCounter) {
						questions.push(' AND ')
					}
				}
			}

			function checkAnswer(){
				input = document.getElementById('answerInput').value;
				correctAnswer = answers.join(' ');
				if (input.toUpperCase() == correctAnswer) {
					if (correct == roundCounter) {
						setEnd('SYSTEM BYPASSED');
					} else {
						correct += 1;
						ongoingHack();
					}
				} else {
					failHack();
				}
			}

			for (i=0; i<puzzBlocks.length; i++){
				puzzBlocks[i].changeBlock();
			}

			container.append(timebarDiv);
			timebarDiv.append(timebarLeft);
			timebarDiv.append(timebarRight);
			let hiddenBar = document.createElement('div');
			hiddenBar.className = 'hiding-bar';
			timebarDiv.append(hiddenBar);
			container.append(answerSection);


			for (i=0; i<time.length;i++){
				time[i] = 0;
			}

			let answerForm = document.createElement('form');
			answerSection.append(answerForm);
			let prompt = document.createElement('label');
			prompt.innerText = questions.join('');
			answerForm.append(prompt);
			let answerInput = document.createElement('input');
			answerInput.setAttribute('id', 'answerInput');
			answerInput.setAttribute('autocomplete', 'off');
			answerInput.setAttribute('placeholder', 'Blue Rectangle...');
			answerForm.append(answerInput);
			let failureCon = setTimeout(failHack, ansTime*1000);
			answerForm.addEventListener('submit', (e) => {
				e.preventDefault();
				audio.pause();
				clearTimeout(failureCon);
				checkAnswer();
			});
			audio.play();
			answerInput.focus();
		}
		setInterval(updateTimer, 10);
		setTimeout(hackPhase, memTime*1000);
	}

	setTimeout(ongoingHack, 5000);
}


starter.addEventListener('submit', (e) => {
	e.preventDefault();

	blockCounter = parseInt(document.getElementById('blockCounter').value);
	promptCounter = parseInt(document.getElementById('promptCounter').value);
	memTime = parseInt(document.getElementById('memTime').value);
	ansTime = parseInt(document.getElementById('ansTime').value);
	roundCounter = parseInt(document.getElementById('roundCounter').value);

	if (blockCounter >= promptCounter){
		startHack();
	}
});