function result_v(){
	var num1=0.0;
	var num2=0.0;
	var num3=0.0;
	num1 = document.getElementById('diam').value.replace(',','.');
	num1 = parseFloat(num1);
	

	num2 = document.getElementById('oboroti').value.replace(',','.');
	num2 = parseFloat(num2);
	
	
	num3 = (Math.PI*num1*num2)/1000;
	out_V.value=num3.toFixed(2);
	

}

function result_n(){
	var num1, num2, num3=0.0;
	num1 = document.getElementById('diam_n').value.replace(',','.');
	num1 = parseFloat(num1);

	num2 = document.getElementById('skorez').value.replace(',','.');
	num2 = parseFloat(num2);

	num3 = (num2*1000)/(num1*Math.PI);
	out_n.value=num3.toFixed(2);
	
}

function result_fz(){
	var num1, num2, num3,num4=0.0;
	num1 = document.getElementById('fz').value.replace(',','.');
	num1 = parseFloat(num1);

	num2 = document.getElementById('z').value.replace(',','.');
	num2 = parseFloat(num2);

	num3 = document.getElementById('oboroti_fz').value.replace(',','.');
	num3 = parseFloat(num3);

	num4 = num1*num2*num3;
	out_fz.value=num4.toFixed(2);
	
}

function result_fz_1(){
	var num1, num2, num3, num4=0.0;
	num1 = document.getElementById('f_1').value.replace(',','.');
	num1 = parseFloat(num1);

	num2 = document.getElementById('z_1').value.replace(',','.');
	num2 = parseFloat(num2);

	num3 = document.getElementById('oboroti_fz_1').value.replace(',','.');
	num3 = parseFloat(num3);

	num4 = num1/(num2*num3);
	out_fz_1.value=num4.toFixed(2);	
	
}

function result_fz_2(){
	var num1, num2, num3=0.0;
	num1 = document.getElementById('fz_2').value.replace(',','.');
	num1 = parseFloat(num1);

	num2 = document.getElementById('z_2').value.replace(',','.');
	num2 = parseFloat(num2);

	num3 = num1*num2;	
	result123.value=num3.toFixed(2);
	
}

function result_Q(){
	var num1, num2, num3,num4=0.0;
	num1 = document.getElementById('glyb').value.replace(',','.');
	num1 = parseFloat(num1);

	num2 = document.getElementById('shir').value.replace(',','.');
	num2 = parseFloat(num2);

	num3 = document.getElementById('f_q').value.replace(',','.');
	num3 = parseFloat(num3);

	num4 = (num1*num2*num3)/1000;	
	out_Q.value=num4.toFixed(2);
	
}

function result_fz_3(){
	var num1, num2, num3,num4=0.0;
	num1 = document.getElementById('diam_fz').value.replace(',','.');
	num1 = parseFloat(num1);

	num2 = document.getElementById('fz_ae').value.replace(',','.');
	num2 = parseFloat(num2);

	num3 = document.getElementById('fz_h').value.replace(',','.');
	num3 = parseFloat(num3);

	num4 = num3*Math.sqrt(num1/num2);	
	out_fz_2.value=num4.toFixed(2);
	
}

function result_fz_4(){
	var num1, num2, num3,num4=0.0;
	num1 = document.getElementById('diam_h').value.replace(',','.');
	num1 = parseFloat(num1);

	num2 = document.getElementById('fz_ae_1').value.replace(',','.');
	num2 = parseFloat(num2);

	num3 = document.getElementById('fz_h_1').value.replace(',','.');
	num3 = parseFloat(num3);

	num4 = num3*Math.sqrt(num2/num1);	
	out_fz_3.value=num4.toFixed(2);
	
}