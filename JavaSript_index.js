var chbox;
chbox=document.getElementById('hd-1');

if (chbox.checked) {
			//alert ('выбран');
		document.querySelector('#yslygi').style['margin-top']=-680+'px';

	}
	else {

		document.querySelector('#yslygi').style['margin-top']=-570+'px';

		//alert ('Не выбран');
	}

function check() {

chbox=document.getElementById('hd-1');
	if (chbox.checked) {
			//alert ('выбран');
		document.querySelector('#yslygi').style['margin-top']=-680+'px';

	}
	else {

		document.querySelector('#yslygi').style['margin-top']=-570+'px';

		//alert ('Не выбран');
	}
}