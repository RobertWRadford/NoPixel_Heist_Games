let container = document.getElementById('hackBlock');
let starter = document.getElementsByClassName('startButton')[0];
let correct = 0;

function quizBlock(background, shape, shapeColor, textColor, numberColor, shapeText, colorText){
	this.background = background;
	this.shape = shape;
	this.shapeColor = shapeColor;
	this.textColor = textColor;
	this.numberColor = numberColor;
	this.shapeText = shapeText;
	this.colorText = colorText;
	this.resolve = {
		'BACKGROUND COLOR': this.background, 
		'SHAPE': this.shape, 
		'SHAPE COLOR': this.shapeColor, 
		'TEXT BACKGROUND COLOR': this.textColor, 
		'COLOR TEXT': this.colorText, 
		'SHAPE TEXT': this.shapeText, 
		'NUMBER COLOR': this.numberColor
	};
}

function startHack(){
	
	container.innerHTML = '';
	let warning = document.createElement('p');
	warning.innerText = 'Get Ready!';
	warning.className = 'middleText';
	container.append(warning);
	
	function ongoingHack() {

		let timerSection = document.createElement('section');
		timerSection.setAttribute('id', 'timerSection');
		let hackBlocksSection = document.createElement('section');
		hackBlocksSection.setAttribute('id', 'hackBlocksSection');
		let timebarLeft = document.createElement('div');
		let timebarRight = document.createElement('div');
		timebarLeft.className = 'round-time-bar left';
		timebarLeft.setAttribute('style', '--duration: 5;');
		timebarRight.className = 'round-time-bar right';
		timebarRight.setAttribute('style', '--duration: 5;');
		let answerSection = document.createElement('section');
		answerSection.setAttribute('id', 'answerSection');

		container.innerHTML = '';
		container.append(timerSection);
		container.append(hackBlocksSection);

		numbers = [];
		while (numbers.length < 5) {
			let num = Math.ceil(Math.random()*5);
			if (!numbers.includes(num)){
				numbers.push(num);
			}
		}

		let timer = document.createElement('p');
		let time = [0,0,0];
		timer.innerText = '00:00:00';
		timerSection.append(timer);
		let block_one = document.createElement('div');
		block_one.className = 'digitPlace';
		block_one.setAttribute('data-position', 'left');
		block_one.innerText = String(numbers[0]);
		hackBlocksSection.append(block_one);

		let block_two = document.createElement('div');
		block_two.className = 'digitPlace';
		block_two.innerText = String(numbers[1]);
		hackBlocksSection.append(block_two);

		let block_three = document.createElement('div');
		block_three.className = 'digitPlace';
		block_three.innerText = String(numbers[2]);
		hackBlocksSection.append(block_three);

		let block_four = document.createElement('div');
		block_four.className = 'digitPlace';
		block_four.innerText = String(numbers[3]);
		hackBlocksSection.append(block_four);

		let block_five = document.createElement('div');
		block_five.className = 'digitPlace';
		block_five.innerText = String(numbers[4]);
		hackBlocksSection.append(block_five);

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

			function failHack(){
				hackBlock.innerHTML = '';
				let failureMessage = document.createElement('p');
				failureMessage.className = 'middleText fail';
				failureMessage.innerText = 'SYSTEM DID NOT ACCEPT YOUR ANSWERS';
				hackBlock.append(failureMessage);
				let homeForm = document.createElement('form');
				homeForm.setAttribute('action', 'index.html');
				hackBlock.append(homeForm);
				let homeButton = document.createElement('button');
				homeButton.className = 'home';
				homeButton.innerText = 'Go Home';
				homeForm.append(homeButton);
				let retryForm = document.createElement('form');
				retryForm.setAttribute('action', 'vault_hack.html');
				hackBlock.append(retryForm);
				let retryButton = document.createElement('button');
				retryButton.className = 'retry';
				retryButton.innerText = 'Retry';
				retryForm.append(retryButton);
			}

			function hackSucceed(){
				hackBlock.innerHTML = '';
				let failureMessage = document.createElement('p');
				failureMessage.className = 'middleText fail';
				failureMessage.innerText = 'SYSTEM BYPASSED';
				hackBlock.append(failureMessage);
				let homeForm = document.createElement('form');
				homeForm.setAttribute('action', 'index.html');
				hackBlock.append(homeForm);
				let homeButton = document.createElement('button');
				homeButton.className = 'home';
				homeButton.innerText = 'Go Home';
				homeForm.append(homeButton);
				let retryForm = document.createElement('form');
				retryForm.setAttribute('action', 'bank_hack.html');
				hackBlock.append(retryForm);
				let retryButton = document.createElement('button');
				retryButton.className = 'retry';
				retryButton.innerText = 'Retry';
				retryForm.append(retryButton);
			}


			let colors = ['RED', 'BLUE', 'PURPLE', 'YELLOW', 'ORANGE', 'GREEN', 'BLACK', 'WHITE']
			let shapes = ['SQUARE', 'RECTANGLE', 'TRIANGLE', 'CIRCLE']
			let prompts = ['BACKGROUND COLOR', 'SHAPE', 'SHAPE COLOR', 'TEXT BACKGROUND COLOR', 'COLOR TEXT', 'SHAPE TEXT', 'NUMBER COLOR'];
			let blocks = [block_one, block_two, block_three, block_four, block_five];
			let answers = [];

			let question = [];

			let digit_one = Math.ceil(Math.random()*5);
			let digit_two = Math.ceil(Math.random()*5);
			if (digit_one == digit_two){
				if (digit_two == 5) {
					digit_two = 4;
				} else {
					digit_two += 1;
				}
			}
			let promptOne = prompts[Math.floor(Math.random()*7)];
			let promptTwo = prompts[Math.floor(Math.random()*7)];
			question.push(`${promptOne} (${digit_one})`);
			question.push(`${promptTwo} (${digit_two})`);

			function checkAnswer(){
				input = document.getElementById('answerInput').value;
				correctAnswer = answers.join(' ');
				if (input.toUpperCase() == correctAnswer) {
					if (correct == 9) {
						hackSucceed();
					} else {
						correct += 1;
						ongoingHack();
					}
				} else {
					failHack();
				}
			}

			for (i=0;i<blocks.length;i++){
				
				bgs = [];
				while (bgs.length < 3) {
					new_color = colors[Math.floor(Math.random()*8)];
					if (new_color != bgs[bgs.length-1]) {
						bgs.push(new_color);
					}
				}
				while (bgs.length < 4) {
					new_color = colors[Math.floor(Math.random()*8)];
					if (new_color != bgs[bgs.length-2]) {
						bgs.push(new_color);
					}
				}

				blocks[i].innerHTML = '';
				blocks[i].classList.remove('digitPlace');
				blocks[i].className = 'quizBox';
				blocks[i].style.backgroundColor = bgs[0];
				
				let block_shape = document.createElement('div');
				block_shape.className = 'internalShape';
				let shape_form = shapes[Math.floor(Math.random()*4)];
				block_shape.className += ' '+shape_form;
				block_shape.style.backgroundColor = bgs[1];
				blocks[i].append(block_shape);

				block_text_backgroundColor = bgs[2];
				let block_color_text = document.createElement('p');
				block_color_text.className = 'colorText';
				block_color_text.style.color = block_text_backgroundColor;
				let color_text = colors[Math.floor(Math.random()*8)];
				block_color_text.innerText = color_text;
				blocks[i].append(block_color_text);
				let block_number_text = document.createElement('p');
				block_number_text.className = 'numberText';
				block_number_text.style.color = bgs[3];
				block_number_text.innerText = String(Math.ceil(Math.random()*4))
				blocks[i].append(block_number_text);
				let block_shape_text = document.createElement('p');
				block_shape_text.className = 'shapeText';
				block_shape_text.style.color = block_text_backgroundColor;
				let shape_text = shapes[Math.floor(Math.random()*4)];
				block_shape_text.innerText = shape_text;
				blocks[i].append(block_shape_text);
				if ([digit_one, digit_two].includes(i+1)) {
					let blockData = new quizBlock(bgs[0], shape_form, bgs[1], bgs[2], bgs[3], shape_text, color_text);
					answers.push(blockData.resolve[answers.length ? promptTwo : promptOne]);
				}
			}

			console.log(answers.join(' '));

			container.append(timebarLeft);
			container.append(timebarRight);
			container.append(answerSection);

			let answerForm = document.createElement('form');
			answerSection.append(answerForm);
			let prompt = document.createElement('label');
			prompt.innerText = `ENTER THE ${question[0]} AND THE ${question[1]}`;
			answerForm.append(prompt);
			let answerInput = document.createElement('input');
			answerInput.setAttribute('id', 'answerInput');
			answerInput.setAttribute('autocomplete', 'off');
			answerInput.setAttribute('placeholder', 'Blue Rectangle...');
			answerForm.append(answerInput);
			let failureCon = setTimeout(failHack, 7000);
			answerForm.addEventListener('submit', (e) => {
				e.preventDefault();
				clearTimeout(failureCon);
				checkAnswer();
			});
			answerInput.focus();
		}
		setInterval(updateTimer, 10);
		setTimeout(hackPhase, 2000);
	}

	setTimeout(ongoingHack, 5000);
}


starter.addEventListener('click', (e) => {
	e.preventDefault();
	startHack();
});