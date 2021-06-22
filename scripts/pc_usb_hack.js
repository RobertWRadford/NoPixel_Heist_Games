let container = document.getElementById('hackBlock');
let starter = document.getElementsByClassName('settings')[0];
let memTime;
let ansTime;

function startHack() {
	container.innerHTML = '';
	let warning = document.createElement('p');
	warning.innerText = 'Input password as shown.';
	warning.className = 'middleText';
	container.append(warning);

	function ongoingHack(){

		let digits = [];
		while (digits.length < 12){
			digits.push(String(Math.floor(Math.random()*10)));
		}
		warning.innerText = digits.join('');

		function takeAnswer(){

			function setEnd(middleText='SYSTEM DID NOT ACCEPT YOUR ANSWERS'){
				container.innerHTML = '';
				let middleMessage = document.createElement('p');
				middleMessage.className = 'middleText end';
				middleMessage.innerText = middleText;
				container.append(middleMessage);
				let retryForm = document.createElement('form');
				retryForm.setAttribute('action', 'pc_usb_hack.html');
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

			function checkAnswer(){
				input = document.getElementById('answerInput').value;
				correctAnswer = digits.join('');
				if (input == correctAnswer) {
					setEnd('SYSTEM BYPASSED');
				} else {
					setEnd();
				}
			}

			container.innerHTML = '';
			let answerForm = document.createElement('form');
			container.append(answerForm);
			let answerInput = document.createElement('input');
			answerInput.setAttribute('id', 'answerInput');
			answerInput.setAttribute('autocomplete', 'off');
			answerForm.append(answerInput);
			let failureCon = setTimeout(setEnd, ansTime*1000);
			answerForm.addEventListener('submit', (e) => {
				e.preventDefault();
				clearTimeout(failureCon);
				checkAnswer();
			});
			answerInput.focus();
		}

		setTimeout(takeAnswer, memTime*1000)
	}

	setTimeout(ongoingHack, 5000);
}

starter.addEventListener('submit', (e) => {
	e.preventDefault();
	memTime = parseInt(document.getElementById('memTime').value);
	ansTime = parseInt(document.getElementById('ansTime').value);
	startHack();
});