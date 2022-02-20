function Clear_Graph(){

	canvas.clear();


	for(var k=0;k<groupCut.length;k++)
	{
		canvas1.remove(groupCut[k]);
	}

	group2=[];
	begin_clear=-1;

	var line1 = new fabric.Line([320,-3500,320,3500]);
	line1.set({
		stroke: 'grey',
		strokeWidth:strokeWidth_sub,
	});
	var line2 = new fabric.Line([-3500,320,3500,320],{
		stroke: 'grey',
		strokeWidth:strokeWidth_sub, 
	});
	canvas.add(line1);
	canvas.add(line2);

	old_D1=0;
	old_D2=0;
	old_D3=0;
	old_D4=0;
	old_L1=0;
  	group=[];
	groupCut=[];

}

function Clear_HalfGraph(){

	canvas.clear();
	begin_clear=getline();

	var line1 = new fabric.Line([320,-3500,320,3500]);
	line1.set({
		stroke: 'grey',
		strokeWidth:strokeWidth_sub,
	});
	var line2 = new fabric.Line([-3500,320,3500,320],{
		stroke: 'grey',
		strokeWidth:strokeWidth_sub, 
	});
	canvas.add(line1);
	canvas.add(line2);

}

