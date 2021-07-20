let container = document.getElementById('pickBlock');
let starter = document.getElementsByClassName('startButton')[0];
let time = 0;
let successes = 0;
let pickKey;
let ansStart;
let ansEnd;
var inputForm;

if (window.innerWidth < 720) {
    var inputContainer = document.createElement('div');
    inputContainer.className = 'inputContainer';
    document.getElementsByClassName('gameFrame')[0].append(inputContainer);
    inputForm = document.createElement('form');
    inputForm.className = 'inputForm';
    inputContainer.append(inputForm);
    for (i=1; i<5; i++){
        var inputButton = document.createElement('input');
        inputButton.className = 'inputButton';
        inputButton.setAttribute('type', 'submit');
        inputButton.value = `${i}`;
        inputButton.name = `${i}`;
        inputForm.append(inputButton);
    }
}

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
        spinnerHolderOneOne.className = 'spinner-holder-one animate-0-90-a';
        loader.append(spinnerHolderOneOne);
        let spinnerHolderTwoOne = document.createElement('div');
        spinnerHolderTwoOne.className = 'spinner-holder-two animate-0-90-b';
        spinnerHolderOneOne.append(spinnerHolderTwoOne);
        let loaderSpinnerOne = document.createElement('div');
        loaderSpinnerOne.className = 'loader-spinner';
        spinnerHolderTwoOne.append(loaderSpinnerOne);

        let answerHolderOneOne = document.createElement('div');
        answerHolderOneOne.className = 'answer-holder-one animate-0-90-c';
        loader.append(answerHolderOneOne);
        let answerHolderTwoOne = document.createElement('div');
        answerHolderTwoOne.className = 'answer-holder-two animate-0-90-d';
        answerHolderOneOne.append(answerHolderTwoOne);
        let answerSpinnerOne = document.createElement('div');
        answerSpinnerOne.className = 'answer-spinner';
        answerHolderTwoOne.append(answerSpinnerOne);

        let spinnerHolderOneTwo = document.createElement('div');
        spinnerHolderOneTwo.className = 'spinner-holder-one animate-90-180-a';
        loader.append(spinnerHolderOneTwo);
        let spinnerHolderTwoTwo = document.createElement('div');
        spinnerHolderTwoTwo.className = 'spinner-holder-two animate-90-180-b';
        spinnerHolderOneTwo.append(spinnerHolderTwoTwo);
        let loaderSpinnerTwo = document.createElement('div');
        loaderSpinnerTwo.className = 'loader-spinner';
        spinnerHolderTwoTwo.append(loaderSpinnerTwo);

        let answerHolderOneTwo = document.createElement('div');
        answerHolderOneTwo.className = 'answer-holder-one animate-90-180-c';
        loader.append(answerHolderOneTwo);
        let answerHolderTwoTwo = document.createElement('div');
        answerHolderTwoTwo.className = 'answer-holder-two animate-90-180-d';
        answerHolderOneTwo.append(answerHolderTwoTwo);
        let answerSpinnerTwo = document.createElement('div');
        answerSpinnerTwo.className = 'answer-spinner';
        answerHolderTwoTwo.append(answerSpinnerTwo);

        let spinnerHolderOneThree = document.createElement('div');
        spinnerHolderOneThree.className = 'spinner-holder-one animate-180-270-a';
        loader.append(spinnerHolderOneThree);
        let spinnerHolderTwoThree = document.createElement('div');
        spinnerHolderTwoThree.className = 'spinner-holder-two animate-180-270-b';
        spinnerHolderOneThree.append(spinnerHolderTwoThree);
        let loaderSpinnerThree = document.createElement('div');
        loaderSpinnerThree.className = 'loader-spinner';
        spinnerHolderTwoThree.append(loaderSpinnerThree);

        let answerHolderOneThree = document.createElement('div');
        answerHolderOneThree.className = 'answer-holder-one animate-180-270-c';
        loader.append(answerHolderOneThree);
        let answerHolderTwoThree = document.createElement('div');
        answerHolderTwoThree.className = 'answer-holder-two animate-180-270-d';
        answerHolderOneThree.append(answerHolderTwoThree);
        let answerSpinnerThree = document.createElement('div');
        answerSpinnerThree.className = 'answer-spinner';
        answerHolderTwoThree.append(answerSpinnerThree);

        let spinnerHolderOneFour = document.createElement('div');
        spinnerHolderOneFour.className = 'spinner-holder-one animate-270-360-a';
        loader.append(spinnerHolderOneFour);
        let spinnerHolderTwoFour = document.createElement('div');
        spinnerHolderTwoFour.className = 'spinner-holder-two animate-270-360-b';
        spinnerHolderOneFour.append(spinnerHolderTwoFour);
        let loaderSpinnerFour = document.createElement('div');
        loaderSpinnerFour.className = 'loader-spinner';
        spinnerHolderTwoFour.append(loaderSpinnerFour);

        let answerHolderOneFour = document.createElement('div');
        answerHolderOneFour.className = 'answer-holder-one animate-270-360-c';
        loader.append(answerHolderOneFour);
        let answerHolderTwoFour = document.createElement('div');
        answerHolderTwoFour.className = 'answer-holder-two animate-270-360-d';
        answerHolderOneFour.append(answerHolderTwoFour);
        let answerSpinnerFour = document.createElement('div');
        answerSpinnerFour.className = 'answer-spinner';
        answerHolderTwoFour.append(answerSpinnerFour);

        let ansArc = Math.floor(Math.random()*270)+90;

        function setEnd(result){
            container.innerHTML = '';
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
            if (progress<90) {
                var angle = -90 + progress;
                document.getElementsByClassName('animate-0-90-b')[0].style.transform = `rotate(${angle}deg)`;
            }
            else if (progress>=90 && progress<180) {
                var angle = -180 + progress;
                document.getElementsByClassName('animate-0-90-b')[0].style.transform = `rotate(0deg)`;
                document.getElementsByClassName('animate-90-180-b')[0].style.transform = `rotate(${angle}deg)`;
            }
            else if (progress>=180 && progress<270) {
                var angle = -270 + progress;
                document.getElementsByClassName('animate-90-180-b')[0].style.transform = `rotate(0deg)`;
                document.getElementsByClassName('animate-180-270-b')[0].style.transform = `rotate(${angle}deg)`;
            }
            else if (progress>=270 && progress<=360) {
                var angle = -360 + progress;
                document.getElementsByClassName('animate-180-270-b')[0].style.transform = `rotate(0deg)`;
                document.getElementsByClassName('animate-270-360-b')[0].style.transform = `rotate(${angle}deg)`;
            }
        }

        let range = ansArc < 180 ? ansArc < 270 ? 30 : 45 : 60;
        pacing = (Math.floor(Math.random()*range)+70)/100;

        var progression;
        setTimeout(()=>{
            progression = setInterval(()=>{
                time+=pacing;
                if (time > 360){
                    clearInterval(progression);
                    setEnd(false);
                } else {
                    renderProgress(time);
                }
            }, 1);
        }, 350);
        
        function checkAnswer(e){

            e.preventDefault();
            clearInterval(progression);
            console.log(`${(time-ansStart).toFixed(1)} : ${(ansEnd-time).toFixed(1)}`);
            document.removeEventListener('keydown', checkAnswer);

            if (inputForm) {
                for (i=1; i<5; i++){
                    document.getElementsByName(`${i}`)[0].removeEventListener('click', checkAnswer);
                }
            }

            if (e.key) {
                var inp = e.key;
            } else {
                var inp = e.target.name;
            }

            if (inp != `${pickKey}`){
                setEnd(false);
            } else if (time < ansStart || time > ansEnd) {
                setEnd(false);
            } else {
                successes+=1;
                if (successes==5) {
                    setEnd(true);
                } else {
                    time=0;
                    setTimeout(pickLock, 100);
                }
            }

        }

        if (ansArc>=90 && ansArc<180){
            ansStart = 90;
            var angle = -180 + ansArc;
            var spun = document.getElementsByClassName('animate-90-180-d')[0];
        }
        else if (ansArc>=180 && ansArc<270){
            ansStart = 180;
            var angle = -270 + ansArc;
            var spun = document.getElementsByClassName('animate-180-270-d')[0];
        }
        else if (ansArc>=270 && ansArc<=360){
            ansStart = 270;
            var angle = -360 + ansArc;
            var spun = document.getElementsByClassName('animate-270-360-d')[0];
        }

        let invert = -1;

        if (angle <= -70 || angle >= -45) {
            angle = Math.floor(Math.random()*25)+45;
            invert *= -1;
        }
        if (Math.ceil(Math.random()*10) > 5) {
            angle*=-1
            invert *= -1;
        }

        if (invert > 0) {
            ansEnd = ansStart+90;
            ansStart = ansEnd-(90-angle);
        } else {
            ansEnd = ansStart+(90+angle);
        }

        ansStart-=3;
        ansEnd+=3;

        spun.style.transform = `rotate(${angle}deg)`;

        document.addEventListener('keydown', checkAnswer);

        if (inputForm) {
            for (i=1; i<5; i++){
                document.getElementsByName(`${i}`)[0].addEventListener('click', checkAnswer);
            }
        }
    }

    setTimeout(pickLock, 1000); 
}

starter.addEventListener('click', (e) => {
    e.preventDefault();
    startPicking();
});
