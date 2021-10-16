let container = document.getElementById('contentBlock');
let starter = document.getElementsByClassName('startButton')[0];
var mapData = {};
const OBSTACLES = [3,2];
const OBLIQUE = [3]
const OPEN = [1,4,5,9];
const WALL = 3;
const OBSTACLE = 2;
const FLOOR = 1;
const SEARCH = 4;
const OBJECT = 5;
const ENTRANCE = 9;
let encumbered = false;
let policeChance = 5;
let smallObj = 0;
let bigObj = 0;
let dongle = false;
let mobile = window.innerWidth < 720 ? true : false;
let polTime = 750;

let dpad;
let upBtn;
let downBtn;
let rightBtn;
let leftBtn;

if (mobile) {
	polTime = 1500;
	dpad = document.createElement('div');
	dpad.className = 'dpad';
	document.getElementsByTagName('body')[0].append(dpad)
	upBtn = document.createElement('button');
	upBtn.className = 'up dbutton';
	upBtn.innerText = '^';
	dpad.append(upBtn);
	rightBtn = document.createElement('button');
	rightBtn.className = 'right dbutton';
	rightBtn.innerText = '>';
	dpad.append(rightBtn);
	downBtn = document.createElement('button');
	downBtn.className = 'down dbutton';
	downBtn.innerText = 'v';
	dpad.append(downBtn);
	leftBtn = document.createElement('button');
	leftBtn.className = 'left dbutton';
	leftBtn.innerText = '<';
	dpad.append(leftBtn);
}

let vinewood = [[[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
				[3,3,3,3,3,3,3,1,1,1,2,2,2,2,2,3,3],
				[3,3,3,3,3,3,3,1,1,1,1,1,1,4,2,3,3],
				[3,3,3,3,3,3,3,1,1,1,1,1,1,1,2,3,3],
				[3,3,3,3,3,3,3,1,1,1,1,1,1,1,2,3,3],
				[3,5,1,1,1,1,1,1,1,3,2,3,1,1,2,3,3],
				[3,1,1,1,1,1,1,1,1,3,2,3,1,1,3,3,3],
				[3,3,3,3,3,3,3,1,1,3,3,3,1,1,1,5,3],
				[3,2,2,2,4,3,1,1,1,3,1,1,1,1,1,1,3],
				[3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
				[3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
				[3,1,2,2,1,3,1,1,1,1,1,1,1,1,1,1,3],
				[3,1,2,2,1,3,1,1,1,1,1,1,1,1,1,1,3],
				[3,5,2,2,2,3,1,1,1,3,1,1,1,1,1,1,3],
				[3,3,3,3,3,3,1,1,1,3,2,1,1,1,1,2,3],
				[3,2,1,1,1,3,1,1,1,3,3,3,1,1,3,3,3],
				[3,2,4,1,1,1,1,1,1,3,2,1,1,1,1,1,3],
				[3,2,2,2,1,3,1,1,1,3,1,1,1,2,1,1,3],
				[3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,3],
				[3,2,1,1,1,1,1,3,3,1,1,1,1,2,1,1,3],
				[3,1,1,3,1,1,1,1,3,1,2,2,1,2,1,1,3],
				[3,1,2,3,1,1,1,1,3,1,2,2,1,2,1,1,3],
				[3,4,2,3,1,1,1,1,3,1,2,2,1,1,1,2,3],
				[3,2,2,3,1,1,9,1,3,1,1,1,1,1,2,2,3],
				[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]],
				[23,6]];

let southside=[[[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
				[3,3,3,3,1,1,1,1,1,1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
				[3,3,3,3,1,2,2,1,1,1,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
				[3,3,3,3,1,2,2,1,1,2,2,3,3,3,3,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3],
				[3,3,3,3,1,1,1,1,1,1,1,3,1,1,1,1,2,2,2,3,2,2,2,1,4,2,3,3,3,3],
				[3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3],
				[3,3,3,3,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,2,2,3,3],
				[3,3,3,1,1,2,2,1,1,1,2,3,3,3,3,3,1,1,3,3,1,1,1,1,1,1,2,2,3,3],
				[3,3,3,1,1,1,1,1,1,1,2,3,2,4,1,1,1,1,2,3,2,1,1,1,1,1,1,1,3,3],
				[3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,1,1,5,3,3,3,1,1,3,3,3,3,3,3],
				[3,3,2,1,1,1,1,1,1,1,3,2,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,3,3],
				[3,9,1,1,1,1,1,1,1,2,3,2,1,1,1,1,1,1,1,3,1,1,2,2,2,1,1,2,3,3],
				[3,3,2,1,1,1,1,1,1,1,3,3,3,1,2,2,2,1,1,1,1,1,2,2,2,1,1,2,3,3],
				[3,3,3,3,3,3,3,3,1,1,1,1,3,1,2,2,2,1,1,1,1,1,2,2,2,1,1,2,3,3],
				[3,3,3,3,2,2,2,3,1,1,1,1,1,1,1,1,1,1,1,3,1,1,2,2,2,1,1,5,3,3],
				[3,3,3,3,2,4,1,3,1,1,1,1,1,1,1,1,1,1,1,3,1,1,2,2,2,1,2,2,3,3],
				[3,3,3,3,2,1,1,3,1,1,1,1,3,1,1,1,1,1,1,3,1,1,1,1,1,1,2,2,3,3],
				[3,3,3,3,2,1,1,3,1,1,3,3,3,1,1,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3],
				[3,3,3,3,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,3,3,3,3],
				[3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,2,3,3,3,3],
				[3,3,3,3,1,1,1,1,1,1,2,2,3,1,1,2,2,1,1,1,1,3,1,1,5,2,3,3,3,3],
				[3,3,3,3,1,1,1,1,1,1,1,2,3,1,1,2,2,1,1,1,3,3,1,1,1,1,3,3,3,3],
				[3,3,3,3,1,1,1,1,1,1,1,1,3,1,1,1,2,1,1,1,3,3,1,3,3,3,3,3,3,3],
				[3,3,3,3,1,1,1,1,1,1,1,1,3,1,1,2,2,1,1,1,3,1,1,3,3,3,3,3,3,3],
				[3,3,3,3,3,3,3,2,4,1,2,2,3,1,5,2,2,1,1,1,3,4,1,3,3,3,3,3,3,3],
				[3,3,3,3,3,3,3,2,2,1,1,1,3,2,2,1,1,1,1,1,3,2,2,3,3,3,3,3,3,3],
				[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,3,3,3,3,3,3,3,3,3,3,3],
				[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,4,2,3,3,3,3,3,3,3,3,3],
				[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,2,3,3,3,3,3,3,3,3,3],
				[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
				[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]],
				[11,1]];

let sandy=[[[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			[3,3,3,3,3,3,3,3,3,3,3,1,1,3,2,2,2,2,3],
			[3,2,2,2,2,2,2,2,3,1,1,1,1,3,1,1,5,1,3],
			[3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
			[3,2,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,3],
			[3,2,1,5,2,2,2,1,1,2,2,3,1,3,3,1,1,1,3],
			[3,2,1,1,2,2,2,1,1,3,3,3,1,1,3,3,3,3,3],
			[3,2,1,1,2,2,2,1,1,3,4,3,1,3,3,3,3,3,3],
			[3,2,1,1,2,2,2,1,1,1,1,3,1,2,3,3,3,3,3],
			[3,2,1,1,1,1,1,1,1,3,1,3,1,2,3,3,3,3,3],
			[3,2,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3],
			[3,2,4,1,1,1,1,1,1,3,1,2,2,2,2,3,3,3,3],
			[3,3,3,1,1,1,1,3,3,3,1,4,2,2,4,3,3,3,3],
			[3,2,2,1,1,1,1,1,1,3,1,1,1,1,1,3,3,3,3],
			[3,5,1,1,1,1,1,1,1,3,1,1,2,2,1,3,3,3,3],
			[3,1,1,2,2,2,2,1,1,1,1,1,1,1,1,3,3,3,3],
			[3,1,1,2,2,2,2,1,1,1,1,1,1,1,1,3,3,3,3],
			[3,1,1,2,2,2,2,1,1,3,2,2,2,2,2,3,3,3,3],
			[3,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3],
			[3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3],
			[3,2,2,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3],
			[3,3,3,1,1,1,1,3,3,3,3,3,3,1,1,3,3,3,3],
			[3,2,4,1,1,1,1,1,1,3,1,1,1,1,1,3,3,3,3],
			[3,2,1,2,2,1,1,1,1,3,1,1,1,1,1,3,3,3,3],
			[3,2,1,2,2,1,2,2,1,3,1,1,3,3,3,3,3,3,3],
			[3,3,1,1,1,1,2,2,1,1,1,1,1,1,1,3,3,3,3],
			[3,2,5,1,1,1,2,2,1,1,1,1,1,1,9,3,3,3,3],
			[3,3,1,1,1,1,2,2,1,1,1,1,1,1,1,3,3,3,3],
			[3,2,1,2,2,1,1,1,1,3,3,3,3,3,3,3,3,3,3],
			[3,2,1,2,2,1,2,2,1,3,3,3,3,3,3,3,3,3,3],
			[3,2,4,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3],
			[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]],
			[26, 14]];

let grapevine=[[[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
				[3,1,1,2,2,2,2,1,1,1,3,3,1,9,1,1,1,3,3,3,3,3,3,3,3],
				[3,2,4,1,2,2,1,1,5,2,3,3,1,1,1,1,1,3,3,3,3,3,3,3,3],
				[3,1,1,1,2,2,1,1,1,2,3,3,1,1,1,1,1,3,3,3,3,3,3,3,3],
				[3,1,1,1,1,1,1,1,1,1,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3],
				[3,1,1,1,1,1,1,1,1,1,2,3,3,3,3,1,1,3,3,3,3,3,3,3,3],
				[3,1,1,1,1,1,1,1,1,1,2,3,3,1,1,1,1,3,3,3,3,3,3,3,3],
				[3,2,1,1,2,2,2,1,1,1,2,3,1,1,1,1,1,3,3,3,3,3,3,3,3],
				[3,3,3,1,3,3,3,1,1,1,3,3,1,1,1,1,1,3,3,3,3,3,3,3,3],
				[3,1,1,1,2,2,3,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3],
				[3,2,1,1,1,2,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3],
				[3,2,1,1,4,2,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,2,3,3],
				[3,2,1,1,2,2,3,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,3],
				[3,3,3,3,3,3,3,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3],
				[3,3,3,3,2,5,3,3,3,3,3,1,1,3,3,1,1,3,3,3,3,3,3,3,3],
				[3,3,3,3,2,1,1,1,1,1,1,1,1,1,3,1,1,1,3,3,3,3,3,3,3],
				[3,3,3,3,2,1,1,1,1,1,1,1,1,1,3,1,1,1,2,2,3,3,3,3,3],
				[3,3,3,3,2,1,1,1,1,1,3,1,1,1,3,1,1,1,1,5,3,3,3,3,3],
				[3,3,3,3,2,1,1,1,1,1,3,3,1,3,3,2,1,1,1,1,3,3,3,3,3],
				[3,3,3,3,2,1,1,2,2,2,3,2,1,1,3,2,2,2,1,2,3,3,3,3,3],
				[3,3,3,3,2,1,1,2,2,2,3,2,1,1,3,2,2,2,1,2,3,3,3,3,3],
				[3,3,3,3,1,1,1,2,2,2,3,4,1,1,3,2,4,1,1,1,3,3,3,3,3],
				[3,3,3,3,1,1,1,1,1,1,3,1,1,1,3,1,2,2,2,1,3,3,3,3,3],
				[3,3,3,3,1,4,1,1,1,1,3,2,1,1,3,3,3,3,3,3,3,3,3,3,3],
				[3,3,3,3,1,2,2,2,2,1,3,2,1,1,3,3,3,3,3,3,3,3,3,3,3],
				[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]],
				[1,13]];

let homes = [vinewood, southside, sandy, grapevine];

function showEnvironment(){

	var los = {
		'0-4': ['3-4', '2-4', '1-4'],
		'1-3': ['3-4', '2-4', '2-3'],
		'1-4': ['3-4', '2-4'],
		'1-5': ['3-4', '2-4', '2-5'],
		'2-2': ['3-3'],
		'2-3': ['3-4', '3-3'],
		'2-4': ['3-4'],
		'2-5': ['3-4', '3-5'],
		'2-6': ['3-5'],
		'3-1': ['4-3', '4-2', '3-2'],
		'3-2': ['4-3', '3-3'],
		'3-3': [],
		'3-4': [],
		'3-5': [],
		'3-6': ['4-5', '3-5'],
		'3-7': ['4-5', '4-6', '3-6'],
		'4-0': ['4-3', '4-2', '4-1'],
		'4-1': ['4-3', '4-2'],
		'4-2': ['4-3'],
		'4-3': [],
		'4-5': [],
		'4-6': ['4-5'],
		'4-7': ['4-5', '4-6'],
		'4-8': ['4-5', '4-6', '4-7'],
		'5-1': ['4-3', '5-3', '5-2', '5-1'],
		'5-2': ['4-3', '5-3'],
		'5-3': [],
		'5-4': [],
		'5-5': [],
		'5-6': ['4-5', '5-5'],
		'5-7': ['4-5', '5-5', '5-6'],
		'6-2': ['5-3'],
		'6-3': ['5-4', '5-3'],
		'6-4': ['5-4'],
		'6-5': ['5-4', '5-5'],
		'6-6': ['5-5'],
		'7-3': ['5-4', '6-4', '6-3'],
		'7-4': ['5-4', '6-4'],
		'7-5': ['5-4', '6-4', '6-5'],
		'8-4': ['5-4', '6-4', '7-4'],
	};
	
	function show(valY, valX){
		try {
			var checkPosition = mapData.map[(mapData['playerPosition'][0])+valY][(mapData['playerPosition'][1])+valX];
		} catch {
			var checkPosition = 'empty';
		}
		
		//DONE: use DOM to assign the image with id String((mapData['playerPosition'][0])+increments[0])+'-'+String((mapData['playerPosition'][1])+increments[1]) a source attribute dependant on the value of checkPosition
		var tileImage = document.getElementsByClassName(String(4+valY)+'-'+String(4+valX))[0];

		if (checkPosition == FLOOR) {
			tileImage.style.backgroundColor = 'lightgrey';
		} else if (checkPosition == WALL) {
			tileImage.style.backgroundColor = 'blue';
		} else if (checkPosition == OBSTACLE) {
			tileImage.style.backgroundColor = 'brown';
		} else if (checkPosition == SEARCH) {
			tileImage.style.backgroundColor = 'green';
		} else if (checkPosition == OBJECT) {
			tileImage.style.backgroundColor = 'red';
		} else if (checkPosition == ENTRANCE) {
			tileImage.style.backgroundColor = 'yellow';
		} else {
			tileImage.style.backgroundColor = 'black';
		} 			
	}

	for(i=0;i<9;i++){
		for(j=0;j<9;j++){
			let visible = true;
			if(los[`${i}-${j}`]){
				for(k=0;k<los[`${i}-${j}`].length;k++){
					let check = los[`${i}-${j}`][k];
					y = mapData.playerPosition[0]+(parseInt(check.charAt(0))-4);
					x = mapData.playerPosition[1]+(parseInt(check.charAt(2))-4);
					if((y>0&&y<mapData.map.length)&&(x>0&&x<mapData.map[0].length)){
						if(OBLIQUE.includes(mapData.map[y][x])){
							visible = false;
							break;
						}
					}
				}
			} else {
				visible = false;
			}
			if(visible){
				show(i-4, j-4);
			} else if (!(i==4 && j==4)){
				let tile = document.getElementsByClassName(String(i)+'-'+String(j))[0];
				tile.style.backgroundColor = 'black';
			}
		}
	}
}

function createView(){
	for (i=0;i<9;i++){
		mapData.viewMap.push([]);
		for (j=0;j<9;j++){
			try {
				var datum = mapData.map[mapData.playerPosition[0]+(i-4)][mapData.playerPosition[1]+(j-4)];
			} catch {
				var datum = 0;
			}
			mapData.viewMap[i].push(datum);
		}
	}
}

function enterHome(){
	let home = homes[Math.floor(Math.random()*4)];
	mapData['map'] = home[0];
	mapData['playerPosition'] = home[1];
	mapData['viewMap'] = [];

	container.innerHTML = '';
	let warning = document.createElement('p');
	warning.innerText = 'Entering Home';
	warning.className = 'middleText';
	container.append(warning);

	function robHouse(){

		container.innerHTML = '';

		let status = document.createElement('div');
		status.className = 'statusBox';
		container.append(status);

		let smlDetail = document.createElement('p');
		smlDetail.innerText = 'Small Objects: 0';
		smlDetail.className = 'detail smallObjCntr';
		status.append(smlDetail);

		let lrgDetail = document.createElement('p');
		lrgDetail.innerText = 'Large Objects: 0';
		lrgDetail.className = 'detail largeObjCntr';
		status.append(lrgDetail);

		let dongDtl = document.createElement('p');
		dongDtl.innerText = 'Green USB: 0';
		dongDtl.className = 'detail dongCntr';
		status.append(dongDtl);

		let polChc = document.createElement('p');
		polChc.innerText = 'Police Arrival: 5%';
		polChc.className = 'detail polChc';
		status.append(polChc);

		let board = document.createElement('table');
		for (i=0; i<9; i++){
			let row = document.createElement('tr');
			for (j=0; j<9; j++){
				let cell = document.createElement('td');
				cell.className = `block ${i}-${j}`;
				row.append(cell);
			}
			board.append(row);
		}
		board.className = 'grid';
		container.append(board);

		createView();
		showEnvironment();

		function setEnd(result='failure'){
			clearInterval(polUp);
			container.innerHTML = '';
			let polEnc = Math.floor(Math.random()*101) < policeChance ? true : false;
			let middleMessage = document.createElement('p');
			middleMessage.className = 'middleText fail';
			middleMessage.innerText = result=='success' ? `Left the home with:\nSmall Objects: ${smallObj}\nLarge Objects: ${bigObj}\nGreen USB: ${dongle?'1':'0'}\n\n${polEnc?'The police are outside though, you need to get away!':'The coast is clear you\'re safe.'}` : 'Captured by police!';
			container.append(middleMessage);
			let resolveForm = document.createElement('form');
			container.append(resolveForm);
			resolveForm.setAttribute('method', 'POST');
			let token = document.createElement('input');
			token.setAttribute('name', 'csrfmiddlewaretoken');
			token.setAttribute('type', 'hidden');
			token.setAttribute('value', csrf);
			resolveForm.append(token);
			let outcome = document.createElement('input');
			outcome.setAttribute('type', 'hidden');
			outcome.setAttribute('name', result);
			outcome.setAttribute('value', result);
			resolveForm.append(outcome);
			let continueButton = document.createElement('button');
			continueButton.className = 'continue';
			continueButton.innerText = 'Continue';
			resolveForm.append(continueButton);
		}

		function movePlayer(key){
			var acceptedMoves = ['w', 'a', 's', 'd'];
			var yPos = mapData.playerPosition[0];
			var xPos = mapData.playerPosition[1];
			let shifts = {
				'w': [-1,0],
				'a': [0,-1],
				's': [1,0],
				'd': [0,1],
			};

			if (!acceptedMoves.includes(key)) {
				return;
			}

			let testVal = mapData.map[yPos+shifts[key][0]][xPos+shifts[key][1]];
			if (![1,4,5,9].includes(testVal)){
				return;
			} else if ((testVal === OBJECT && encumbered) || (testVal === SEARCH && encumbered)) {
				return
			} else {
				mapData.playerPosition[0] += shifts[key][0];
				mapData.playerPosition[1] += shifts[key][1];
			}
			if (testVal === ENTRANCE && encumbered) {
				bigObj += 1;
				lrgDetail.innerText = `Large Objects: ${bigObj}`;
				encumbered = false;
				document.getElementsByClassName('4-4')[0].classList.remove('encumbered');
			} else if (testVal === ENTRANCE) {
				setEnd('success');
			} else if (testVal === SEARCH) {
				smallObj += Math.ceil(Math.random()*3);
				smlDetail.innerText = `Small Objects: ${smallObj}`;
				if (!dongle){
					if (Math.floor(Math.random()*101) < 5){
						dongle = true;
						dongDtl.innerText = 'Green USB: 1';
					}
				}
				mapData.map[mapData.playerPosition[0]][mapData.playerPosition[1]] = 1;
			} else if (testVal === OBJECT) {
				encumbered = true;
				document.getElementsByClassName('4-4')[0].className += ' encumbered';
				mapData.map[mapData.playerPosition[0]][mapData.playerPosition[1]] = 1;
			}
			showEnvironment();
			return;
		}

		document.getElementsByClassName('3-4')[0].addEventListener("click", function(e){
			e.preventDefault();
			movePlayer('w');
		});
		document.getElementsByClassName('4-3')[0].addEventListener("click", function(e){
			e.preventDefault();
			movePlayer('a');
		});
		document.getElementsByClassName('5-4')[0].addEventListener("click", function(e){
			e.preventDefault();
			movePlayer('s');
		});
		document.getElementsByClassName('4-5')[0].addEventListener("click", function(e){
			e.preventDefault();
			movePlayer('d');
		});
		document.addEventListener("keyup", function(e){
			e.preventDefault();
			movePlayer(e.key);
		});
		if (mobile) {
			upBtn.addEventListener('click', (e)=>{
				e.preventDefault();
				movePlayer('w');
			});
			downBtn.addEventListener('click', (e)=>{
				e.preventDefault();
				movePlayer('s');
			});
			rightBtn.addEventListener('click', (e)=>{
				e.preventDefault();
				movePlayer('d');
			});
			leftBtn.addEventListener('click', (e)=>{
				e.preventDefault();
				movePlayer('a');
			});
		}

		let polUp = setInterval(()=>{
			policeChance += 1;
			polChc.innerText = `Police Arrival: ${policeChance}%`;
			if (policeChance == 150) {
				setEnd();
			}
		}, polTime);

	}

	let dotter = setInterval(() => {warning.innerText += '.';}, 750);
	setTimeout(()=>{
		clearInterval(dotter);
		robHouse();
	}, 2250);
}

starter.addEventListener('click', (e) => {
	e.preventDefault();
	enterHome();
});