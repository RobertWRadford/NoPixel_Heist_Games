let container = document.getElementById('wirePanel');
let starter = document.getElementsByClassName('startButton')[0];
let intervalSetting = document.getElementsByClassName('settings')[0];

let wires = [];
let pairs = [];

function wirePair(){
	let colors = ['RED', 'BLUE', 'PURPLE', 'YELLOW', 'ORANGE', 'GREEN', 'BLACK', 'WHITE'];
	let colorPalette = {
		'RED': '#7f0001',
		'BLUE': '#2894f4',
		'PURPLE': '#8e2fa0',
		'YELLOW': '#ffec47',
		'ORANGE': '#ff9909',
		'GREEN': '#50ac54',
		'BLACK': '#5d5d5d',
		'WHITE': 'WHITE',
	};
	let shapes = ['SQUARE', 'RECTANGLE', 'TRIANGLE', 'CIRCLE'];
	let added = false;
	while (added == false) {
		this.color = colors[Math.floor(Math.random()*8)];
		this.shape = shapes[Math.floor(Math.random()*4)];
		if (!pairs.includes(`${this.color} ${this.shape}`)){
			added = true;
			pairs.push(`${this.color} ${this.shape}`);
		}
	}
	this.color = colorPalette[this.color];
	wires.push(this);
	this.digit = wires.length;
}

function rewire(){

	let interval = document.getElementsByClassName('interval')[0].value;
	container.innerHTML = '';
	let warning = document.createElement('p');
	warning.innerText = 'Get Ready!';
	warning.className = 'middleText';
	container.append(warning);

	function setPairs(){

		let timerSection = document.createElement('section');
		timerSection.setAttribute('id', 'timerSection');
		let timer = document.createElement('p');
		let time = [0,0,0];
		timer.innerText = '00:00:00';
		timerSection.append(timer);

		let backPanels = document.createElement('section');
		backPanels.setAttribute('id', 'backPanels');

		container.innerHTML = '';
		container.style.display = 'block';
		container.append(timerSection);
		container.append(backPanels);

		while (wires.length < 6) {
			let wire = new wirePair();

			let panel = document.createElement('div');
			panel.className = 'panel';
			panel.style.backgroundColor = wire.color;
			backPanels.append(panel);

			let number = document.createElement('p');
			number.className = 'position';
			number.innerText = `${wires.length}`;
			panel.append(number);

			let shape = document.createElement('div');
			shape.className = `panelShape ${wire.shape}`;
			panel.append(shape);

			let port = document.createElement('div');
			port.className = 'port';
			panel.append(port);
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

		function matchWires(){

			function mismatch(){
				container.style.display = 'flex';
				container.innerHTML = '';
				let failureMessage = document.createElement('p');
				failureMessage.className = 'middleText fail';
				failureMessage.innerText = 'SYSTEM DID NOT ACCEPT YOUR ANSWERS';
				container.append(failureMessage);
				let homeForm = document.createElement('form');
				homeForm.setAttribute('action', 'index.html');
				container.append(homeForm);
				let homeButton = document.createElement('button');
				homeButton.className = 'home';
				homeButton.innerText = 'Go Home';
				homeForm.append(homeButton);
				let retryForm = document.createElement('form');
				retryForm.setAttribute('action', 'wires.html');
				container.append(retryForm);
				let retryButton = document.createElement('button');
				retryButton.className = 'retry';
				retryButton.innerText = 'Retry';
				retryForm.append(retryButton);
			}

			function goodMatch(){
				container.style.display = 'flex';
				container.innerHTML = '';
				let failureMessage = document.createElement('p');
				failureMessage.className = 'middleText fail';
				failureMessage.innerText = 'SYSTEM BYPASSED';
				container.append(failureMessage);
				let homeForm = document.createElement('form');
				homeForm.setAttribute('action', 'index.html');
				container.append(homeForm);
				let homeButton = document.createElement('button');
				homeButton.className = 'home';
				homeButton.innerText = 'Go Home';
				homeForm.append(homeButton);
				let retryForm = document.createElement('form');
				retryForm.setAttribute('action', 'wires.html');
				container.append(retryForm);
				let retryButton = document.createElement('button');
				retryButton.className = 'retry';
				retryButton.innerText = 'Retry';
				retryForm.append(retryButton);
			}

			time = [0,0,0];
			backPanels.innerHTML = '';
			let numbers = [];
			while (numbers.length < 6){
				let rand = Math.ceil(Math.random()*6);
				if (!numbers.includes(rand)){
					numbers.push(rand);
				}
			}
			for (i=0; i<numbers.length; i++){
				let wire = wires[numbers[i]-1];
				
				let cableDiv = document.createElement('div');
				cableDiv.className = 'cableDiv';
				backPanels.append(cableDiv);

				let usbPlug = document.createElement('div');
				usbPlug.className = 'plug';
				let usbEnd = document.createElement('div');
				usbEnd.className = 'end';
				let usbShape = document.createElement('div');
				usbShape.className = `usbShape ${wire.shape}`;
				let usbCable = document.createElement('div');
				usbCable.className = 'cable';
				usbCable.style.backgroundColor = wire.color;

				cableDiv.append(usbPlug);
				cableDiv.append(usbEnd);
				cableDiv.append(usbShape);
				cableDiv.append(usbCable);
			}
			let answerSection = document.createElement('section');
			answerSection.setAttribute('id', 'answerSection');
			container.append(answerSection);
			let answerForm = document.createElement('form');
			answerSection.append(answerForm);
			let answerInput = document.createElement('input');
			answerInput.setAttribute('id', 'answerInput');
			answerInput.setAttribute('autocomplete', 'off');
			answerInput.setAttribute('placeholder', '123456');
			answerForm.append(answerInput);
			let failureCon = setTimeout(mismatch, interval*1000);

			function checkWiring(){
				if (numbers.join('') == answerInput.value) {
					goodMatch();
				} else {
					mismatch();
				}
			}

			answerForm.addEventListener('submit', (e) => {
				e.preventDefault();
				clearTimeout(failureCon);
				console.log(time);
				checkWiring();
			});
			answerInput.focus();
		}

		setInterval(updateTimer, 10);
		setTimeout(matchWires, 10000);
	}

	setTimeout(setPairs, 5000);
}


intervalSetting.addEventListener('submit', (e) => {
	e.preventDefault();
	rewire();
})

starter.addEventListener('click', (e) => {
	e.preventDefault();
	rewire();
});