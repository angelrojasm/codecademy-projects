const lever = document.getElementById('lever');
const lateral = document.getElementById('lateral');
const area = document.querySelector('body');
lever.onmouseover = params => {
	lateral.style.left = '0';
};

lateral.onmouseleave = params => {
	lateral.style.left = '-30%';
};
