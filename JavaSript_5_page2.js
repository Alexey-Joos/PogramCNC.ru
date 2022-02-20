/////////////Создать заготовку

function CreateStock() {

 var Alarm_on=false;

 document.getElementById('AlarmWindow').value="";

 var nextdigit=path_main.length;

 var D1= document.getElementById('D_1').value.replace(',','.');
 var D2= document.getElementById('D_2').value.replace(',','.');
 var D3= document.getElementById('D_3').value.replace(',','.');
 var D4= document.getElementById('D_4').value.replace(',','.');
 var L1= document.getElementById('L_1').value.replace(',','.');
 var D5= document.getElementById('D_5').value.replace(',','.');

 D1=Number.parseFloat(D1);
 D2=Number.parseFloat(D2);
 D3=Number.parseFloat(D3);
 D4=Number.parseFloat(D4);
 L1=Number.parseFloat(L1);
 D5=Number.parseFloat(D5);

 Gen_D1=D1;
 Gen_D2=D2;
 Gen_D3=D3;
 Gen_D4=D4;
 Gen_L1=L1;
 Gen_D5=D5;

 if(isNaN(L1)==true||L1==0)
 {
  Alarm_on=true;
  document.getElementById('AlarmWindow').value+=" - (Заготовка) Не установлена длина - L - \n";
}

if(isNaN(D1)==true&&isNaN(D2)==true||D1==0&&isNaN(D2)==true||isNaN(D1)==true&&D2==0||D1==0&&D2==0)
{
 Alarm_on=true;
 document.getElementById('AlarmWindow').value+=" - (Заготовка) Не установлен диаметр - D1/D2 - \n";
}

if(D1<D3||D2<D4)
{
 Alarm_on=true;
 document.getElementById('AlarmWindow').value+=" - (Заготовка) Внешний диаметр меньше внутреннего - \n";
}

if(Alarm_on==false)
{

  if(D1=='')
  {
    D1=0;
  }

  if(D2=='')
  {
    D2=0;
  }

  if(D3=='')
  {
    D3=0;
  }

  if(D4=='')
  {
    D4=0;
  }

  if(D5=='')
  {
    D5=0;
  }

  D1=D1*2;
  D2=D2*2;
  D3=D3*2;
  D4=D4*2;
  L1=L1*4;
  D5=D5*4;

var beginZ=320+D5;
var maxH=Math.max(D1,D2);
var minH=Math.min(D3,D4);


//var path=new fabric.Path('M 320 309 L 295 309 L 295 315 L 320 315 L 320 309 z');

var path=new fabric.Path('M 0 0 L 0 0 L 0 0 L 0 0 L 0 0 z');

path.path[0][1]=beginZ;
path.path[0][2]=320-D1;

path.path[1][1]=beginZ-L1;
path.path[1][2]=320-D2;

path.path[2][1]=beginZ-L1;
path.path[2][2]=320-D4;

path.path[3][1]=beginZ;
path.path[3][2]=320-D3;

path.path[4][1]=beginZ;
path.path[4][2]=320-D1;

path.height=maxH-minH;
path.width=L1;

path.top=Math.min(320-D1,320-D2,320-D3,320-D4)-0.5;
path.left=320-L1-0.5+D5;

path.pathOffset.x=(path.left+L1/2)+0.5;
path.pathOffset.y=(path.top+path.height/2)+0.5;


var pathMirror=new fabric.Path('M 0 0 L 0 0 L 0 0 L 0 0 L 0 0 z');

pathMirror.path[0][1]=beginZ;
pathMirror.path[0][2]=320+D1;

pathMirror.path[1][1]=beginZ-L1;
pathMirror.path[1][2]=320+D2;

pathMirror.path[2][1]=beginZ-L1;
pathMirror.path[2][2]=320+D4;

pathMirror.path[3][1]=beginZ;
pathMirror.path[3][2]=320+D3;

pathMirror.path[4][1]=beginZ;
pathMirror.path[4][2]=320+D1;

pathMirror.height=maxH-minH;
pathMirror.width=L1;

pathMirror.top=Math.min(320+D1,320+D2,320+D3,320+D4)-0.5;
pathMirror.left=320-L1-0.5+D5;

pathMirror.pathOffset.x=(pathMirror.left+L1/2)+0.5;
pathMirror.pathOffset.y=(pathMirror.top+path.height/2)+0.5;


var pathCenter=new fabric.Path('M 0 0 L 0 0 L 0 0 L 0 0 L 0 0 z');

pathCenter.path[0][1]=beginZ;
pathCenter.path[0][2]=320-D1;

pathCenter.path[1][1]=beginZ-L1;
pathCenter.path[1][2]=320-D2;

pathCenter.path[2][1]=beginZ-L1;
pathCenter.path[2][2]=320+D2;

pathCenter.path[3][1]=beginZ;
pathCenter.path[3][2]=320+D1;

pathCenter.path[4][1]=beginZ;
pathCenter.path[4][2]=320-D1;

pathCenter.height=maxH*2;
pathCenter.width=L1;

pathCenter.top=Math.min(320-D1,320-D2)-0.5;
pathCenter.left=320-L1-0.5+D5;

pathCenter.pathOffset.x=(pathCenter.left+L1/2)+0.5;
pathCenter.pathOffset.y=(pathCenter.top+pathCenter.height/2)+0.5;


path.set({fill: 'rgb(255,169,100)'});
pathMirror.set({fill: 'rgb(255,169,100)'});
pathCenter.set({fill: 'rgba(255,169,100,0.3)'});


if(old_D1!=D1||old_D2!=D2||old_D3!=D3||old_D4!=D4||old_L1!=L1)
{
  path_main.push(path);
  path_main.push(pathMirror);
  path_main.push(pathCenter);

  for(var s=nextdigit;s<path_main.length;s++)
  {
    canvas1.add(path_main[s]);
  } 

}

old_D1=D1;
old_D2=D2;
old_D3=D3;
old_D4=D4;
old_L1=L1;
CreatedStock=true;
}

}

//////////////////////////Удалить заготовку

function DeleteStock() 
{
  /*
  for(var s=0;s<path_main.length;s++)
  {
    canvas1.remove(path_main[s]);
  }
  */

  canvas1.clear();

  document.getElementById('AlarmWindow').value="";
  old_D1=0;
  old_D2=0;
  old_D3=0;
  old_D4=0;
  old_L1=0;
  path_main=[];

    for(var k=0;k<groupCut.length;k++)
  {
    canvas1.remove(groupCut[k]);
  }

}