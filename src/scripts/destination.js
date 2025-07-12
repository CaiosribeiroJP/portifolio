export function destino(id) {
	let first = document.getElementById('one');
	let second = document.getElementById('two');
	let third = document.getElementById('three');
	let fourth = document.getElementById('four');
	let fifth = document.getElementById('five');
	let one = document.getElementById('1');
	let two = document.getElementById('2');
	let three = document.getElementById('3');
	let four = document.getElementById('4');
	let five = document.getElementById('5');

	if(id == "first") {
		one.style.backgroundColor = "aqua";
		two.style.backgroundColor = "white";
		three.style.backgroundColor = "white";
		four.style.backgroundColor = "white";
		five.style.backgroundColor = "white";
		first.style.display = 'block';
		second.style.display = 'none';
		third.style.display = 'none';
		fourth.style.display = 'none';
		fifth.style.display = 'none';
	} else if (id == "second") {
		one.style.backgroundColor = "white";
		two.style.backgroundColor = "aqua";
		three.style.backgroundColor = "white";
		four.style.backgroundColor = "white";
		five.style.backgroundColor = "white";
		first.style.display = 'none';
		second.style.display = 'block';
		third.style.display = 'none';
		fourth.style.display = 'none';
		fifth.style.display = 'none';
	} else if(id == 'third') {
		one.style.backgroundColor = "white";
		two.style.backgroundColor = "white";
		three.style.backgroundColor = "aqua";
		four.style.backgroundColor = "white";
		five.style.backgroundColor = "white";
		first.style.display = 'none';
		second.style.display = 'none';
		third.style.display = 'block';
		fourth.style.display = 'none';
		fifth.style.display = 'none';
	} else if(id == 'fourth') {
		one.style.backgroundColor = "white";
		two.style.backgroundColor = "white";
		three.style.backgroundColor = "white";
		four.style.backgroundColor = "aqua";
		five.style.backgroundColor = "white";
		first.style.display = 'none';
		second.style.display = 'none';
		third.style.display = 'none';
		fourth.style.display = 'block';
		fifth.style.display = 'none';
	} else if(id == 'fifth') {
	    one.style.backgroundColor = "white";
		two.style.backgroundColor = "white";
		three.style.backgroundColor = "white";
		four.style.backgroundColor = "white";
		five.style.backgroundColor = "aqua";
		first.style.display = 'none';
		second.style.display = 'none';
		third.style.display = 'none';
		fourth.style.display = 'none';
		fifth.style.display = 'block';
	};
};