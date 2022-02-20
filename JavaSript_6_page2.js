/////////////Функция резания
/*
function userSubmit1(coord_X,coord_Z,canvas1,otvod_Z,otvod_X,num_str) {

//var cut_path=new fabric.Path('M 324 300 L 300 300 L 300 297.95 L 324 297.95 M 324 340 L 300 340 L 300 342.05 L 324 342.05');

 Mirror_otvod_X=otvod_X*2+320;
 Mirror_coord_X=coord_X*2+320;
 
  otvod_Z=otvod_Z*4+320;
  otvod_X=-otvod_X*2+320;
  coord_Z=coord_Z*4+320;
  coord_X=-coord_X*2+320;

  var D1=Gen_D1*2;
  var D2=Gen_D2*2;
  var D3=Gen_D3*2;
  var D4=Gen_D4*2;
  var L1=Gen_L1*4;
  var D5=Gen_D5*4;

  var minH_L=Math.max(coord_X,otvod_X);
  var maxH=Math.min(320-D1,320-D2);

  var Mirror_maxH=(320+D1,320+D2);

  var maxW=Math.max(coord_Z,otvod_Z);
  var minW=Math.min(coord_Z,otvod_Z);

  var cut_path=new fabric.Path('M 0 0 L 0 0 L 0 0 L 0 0 M 0 0 L 0 0 L 0 0 L 0 0');

  cut_path.path[0][1]=otvod_Z;
  cut_path.path[0][2]=otvod_X;

  cut_path.path[1][1]=coord_Z-0.05;
  cut_path.path[1][2]=coord_X;

  cut_path.path[2][1]=coord_Z;
  cut_path.path[2][2]=maxH-0.05;

  cut_path.path[3][1]=otvod_Z;
  cut_path.path[3][2]=maxH-0.05;

///////////////отражение  

  cut_path.path[4][1]=otvod_Z;
  cut_path.path[4][2]=Mirror_otvod_X;

  cut_path.path[5][1]=coord_Z-0.05;
  cut_path.path[5][2]=Mirror_coord_X;

  cut_path.path[6][1]=coord_Z;
  cut_path.path[6][2]=Mirror_maxH+0.05;

  cut_path.path[7][1]=otvod_Z;
  cut_path.path[7][2]=Mirror_maxH+0.05;

  cut_path.height=Math.min(D1,D2)*2+0.1;
  cut_path.width=maxW-minW;

  cut_path.top=maxH-0.55;
  cut_path.left=Math.min(coord_Z,otvod_Z)-0.5;

  cut_path.pathOffset.x=(cut_path.left+cut_path.width/2)+0.5;
  cut_path.pathOffset.y=320;
  
  //cut_path.set({fill: 'rgb(150,150,150)'});

  cut_path.set({fill: 'rgb(230,230,230)'});

  return cut_path;

}
*/
