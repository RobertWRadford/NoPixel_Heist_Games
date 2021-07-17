let container = document.getElementById('pickBlock');
let starter = document.getElementsByClassName('startButton')[0];
let promptInp = document.getElementsByClassName('prompt')[0];
let time = 0;
let successes = 0;
let pickKey;
let ansStart;
let ansEnd;

function startPicking() {

	container.innerHTML = '';
	let warningText = document.createElement('p');
	warningText.className = 'middleText';
	warningText.innerText = 'Get Ready!';
	container.append(warningText);

	function pickLock(){

		container.innerHTML = '';
        pickKey = Math.ceil(Math.random()*4);
		let pickBox = document.createElement('div');
		pickBox.className = 'pickBox';
		container.append(pickBox);
		let loader = document.createElement('div');
		loader.className = 'loader';
		pickBox.append(loader);
		let loaderBG = document.createElement('div');
		loaderBG.className = 'loader-bg';
		loader.append(loaderBG);

		let loaderText = document.createElement('div');
		loaderText.className = 'text';
		loaderBG.append(loaderText);
		loaderText.innerText = `${pickKey}`;

		let spinnerHolderOneOne = document.createElement('div');
		spinnerHolderOneOne.className = 'spinner-holder-one animate-0-25-a';
		loader.append(spinnerHolderOneOne);
		let spinnerHolderTwoOne = document.createElement('div');
		spinnerHolderTwoOne.className = 'spinner-holder-two animate-0-25-b';
		spinnerHolderOneOne.append(spinnerHolderTwoOne);
		let loaderSpinnerOne = document.createElement('div');
		loaderSpinnerOne.className = 'loader-spinner';
		spinnerHolderTwoOne.append(loaderSpinnerOne);

		let answerHolderOneOne = document.createElement('div');
		answerHolderOneOne.className = 'answer-holder-one animate-0-25-c';
		loader.append(answerHolderOneOne);
		let answerHolderTwoOne = document.createElement('div');
		answerHolderTwoOne.className = 'answer-holder-two animate-0-25-d';
		answerHolderOneOne.append(answerHolderTwoOne);
		let answerSpinnerOne = document.createElement('div');
		answerSpinnerOne.className = 'answer-spinner';
		answerHolderTwoOne.append(answerSpinnerOne);

		let spinnerHolderOneTwo = document.createElement('div');
		spinnerHolderOneTwo.className = 'spinner-holder-one animate-25-50-a';
		loader.append(spinnerHolderOneTwo);
		let spinnerHolderTwoTwo = document.createElement('div');
		spinnerHolderTwoTwo.className = 'spinner-holder-two animate-25-50-b';
		spinnerHolderOneTwo.append(spinnerHolderTwoTwo);
		let loaderSpinnerTwo = document.createElement('div');
		loaderSpinnerTwo.className = 'loader-spinner';
		spinnerHolderTwoTwo.append(loaderSpinnerTwo);

		let answerHolderOneTwo = document.createElement('div');
		answerHolderOneTwo.className = 'answer-holder-one animate-25-50-c';
		loader.append(answerHolderOneTwo);
		let answerHolderTwoTwo = document.createElement('div');
		answerHolderTwoTwo.className = 'answer-holder-two animate-25-50-d';
		answerHolderOneTwo.append(answerHolderTwoTwo);
		let answerSpinnerTwo = document.createElement('div');
		answerSpinnerTwo.className = 'answer-spinner';
		answerHolderTwoTwo.append(answerSpinnerTwo);

		let spinnerHolderOneThree = document.createElement('div');
		spinnerHolderOneThree.className = 'spinner-holder-one animate-50-75-a';
		loader.append(spinnerHolderOneThree);
		let spinnerHolderTwoThree = document.createElement('div');
		spinnerHolderTwoThree.className = 'spinner-holder-two animate-50-75-b';
		spinnerHolderOneThree.append(spinnerHolderTwoThree);
		let loaderSpinnerThree = document.createElement('div');
		loaderSpinnerThree.className = 'loader-spinner';
		spinnerHolderTwoThree.append(loaderSpinnerThree);

		let answerHolderOneThree = document.createElement('div');
		answerHolderOneThree.className = 'answer-holder-one animate-50-75-c';
		loader.append(answerHolderOneThree);
		let answerHolderTwoThree = document.createElement('div');
		answerHolderTwoThree.className = 'answer-holder-two animate-50-75-d';
		answerHolderOneThree.append(answerHolderTwoThree);
		let answerSpinnerThree = document.createElement('div');
		answerSpinnerThree.className = 'answer-spinner';
		answerHolderTwoThree.append(answerSpinnerThree);

		let spinnerHolderOneFour = document.createElement('div');
		spinnerHolderOneFour.className = 'spinner-holder-one animate-75-100-a';
		loader.append(spinnerHolderOneFour);
		let spinnerHolderTwoFour = document.createElement('div');
		spinnerHolderTwoFour.className = 'spinner-holder-two animate-75-100-b';
		spinnerHolderOneFour.append(spinnerHolderTwoFour);
		let loaderSpinnerFour = document.createElement('div');
		loaderSpinnerFour.className = 'loader-spinner';
		spinnerHolderTwoFour.append(loaderSpinnerFour);

		let answerHolderOneFour = document.createElement('div');
		answerHolderOneFour.className = 'answer-holder-one animate-75-100-c';
		loader.append(answerHolderOneFour);
		let answerHolderTwoFour = document.createElement('div');
		answerHolderTwoFour.className = 'answer-holder-two animate-75-100-d';
		answerHolderOneFour.append(answerHolderTwoFour);
		let answerSpinnerFour = document.createElement('div');
		answerSpinnerFour.className = 'answer-spinner';
		answerHolderTwoFour.append(answerSpinnerFour);

		let ansArc = Math.floor(Math.random()*75)+25;

		function setEnd(result){
			container.innerHTML = '';
            promptInp.remove();
			let failureMessage = document.createElement('p');
			failureMessage.className = 'middleText fail';
			failureMessage.innerText = result ? 'SUCCESFULLY UNLOCKED' : 'BROKE YOUR LOCKPICK';
			container.append(failureMessage);
			let retryForm = document.createElement('form');
			retryForm.className = 'retryForm';
			retryForm.setAttribute('action', 'lockpick.html');
			container.append(retryForm);
			let retryButton = document.createElement('button');
			retryButton.className = 'retry';
			retryButton.innerText = 'Retry';
			retryForm.append(retryButton);
			let homeForm = document.createElement('form');
			homeForm.className = 'homeForm';
			homeForm.setAttribute('action', 'index.html');
			container.append(homeForm);
			let homeButton = document.createElement('button');
			homeButton.className = 'home';
			homeButton.innerText = 'Home';
			homeForm.append(homeButton);
		}

		function renderProgress(progress) {
		    progress = Math.floor(progress);
		    if (progress<25){
		        var angle = -90 + (progress/100)*360;
		        document.getElementsByClassName('animate-0-25-b')[0].style.transform = `rotate(${angle}deg)`;
		    }
		    else if (progress>=25 && progress<50){
		        var angle = -90 + ((progress-25)/100)*360;
		        document.getElementsByClassName('animate-0-25-b')[0].style.transform = `rotate(0deg)`;
		        document.getElementsByClassName('animate-25-50-b')[0].style.transform = `rotate(${angle}deg)`;
		    }
		    else if (progress>=50 && progress<75){
		        var angle = -90 + ((progress-50)/100)*360;
		       	document.getElementsByClassName('animate-25-50-b')[0].style.transform = `rotate(0deg)`;
		        document.getElementsByClassName('animate-50-75-b')[0].style.transform = `rotate(${angle}deg)`;
		    }
		    else if (progress>=75 && progress<=100){
		        var angle = -90 + ((progress-75)/100)*360;
		       	document.getElementsByClassName('animate-50-75-b')[0].style.transform = `rotate(0deg)`;
		        document.getElementsByClassName('animate-75-100-b')[0].style.transform = `rotate(${angle}deg)`;
		    }
		}
        
        var progression;
        setTimeout(()=>{
			progression = setInterval(()=>{
				time+=.35;
				if (time > 100){
					clearInterval(progression);
					setEnd(false);
				} else {
					renderProgress(time);
				}
			}, 1);
        }, 200);
        
        function checkAnswer(e){
	        e.preventDefault();
			clearInterval(progression);
			let inp = promptInp.value;
			console.log(inp.slice(-1), pickKey);
			console.log(time, ansStart, ansEnd);
			if (inp.slice(-1) != `${pickKey}`){
		    	setEnd(false);
			} else if (time < ansStart || time > ansEnd) {
				setEnd(false);
			} else {
		    	successes+=1;
                if (successes==5) {
                    setEnd(true);
                } else {
                    time=0;
                    promptInp.removeEventListener('input', checkAnswer);
                    setTimeout(pickLock, 100);
                }
            }
	    }

	    if (ansArc>=25 && ansArc<50){
	    	ansStart = 25;
	        var angle = -90 + ((ansArc-25)/100)*360;
	        var spun = document.getElementsByClassName('animate-25-50-d')[0];
	    }
	    else if (ansArc>=50 && ansArc<75){
	    	ansStart = 50;
	        var angle = -90 + ((ansArc-50)/100)*360;
	        var spun = document.getElementsByClassName('animate-50-75-d')[0];
	    }
	    else if (ansArc>=75 && ansArc<=100){
	    	ansStart = 75;
	        var angle = -90 + ((ansArc-75)/100)*360;
	        var spun = document.getElementsByClassName('animate-75-100-d')[0];
	    }

	    if (angle <= -70 || angle >= -25) {
	    	angle = -55;
	    }

	    ansEnd = ansStart+(((100*(angle+90))+ansStart)/360);

	    spun.style.transform = `rotate(${angle}deg)`;

		promptInp.addEventListener('input', checkAnswer);
		promptInp.focus();
	}

	setTimeout(pickLock, 1000);	
}

starter.addEventListener('click', (e) => {
	e.preventDefault();
	promptInp.focus();
	startPicking();
});
