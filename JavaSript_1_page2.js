var canvas = new fabric.Canvas('c1');
var canvas1 = new fabric.Canvas('c2');
var ctx=c1.getContext("2d");
var ctx1=c2.getContext("2d");
var begin_clear=-1;
var radius_circle=2;
var strokeWidth_main=1.1;
var strokeWidth_sub=1;
var group1=new Array;
var group2=new Array;
//var groupCut=new Array;
var temp_str=new Array;
var max_min=0;
var path_main=new Array;
var old_D1=0;
var old_D2=0;
var old_D3=0;
var old_D4=0;
var old_L1=0;
var SpeedCut_on=false;
var limit_S="";
var feed_f ="";
var G01_on=false;
var SpeedCut_rev="";
var CreatedStock=false;
var Gen_D1="";
var Gen_D2="";
var Gen_D3="";
var Gen_D4="";
var Gen_L1="";
var Gen_D5="";

document.getElementById('X_output').value="0.000";
document.getElementById('Z_output').value="0.000";
document.getElementById('S_output').value=0;
document.getElementById('T_output').value=0;
document.getElementById('F_output').value=0;

//var CreatedStock=true;




/*
var G00=false;
var G01=false;
var G02_G03=false;
var circle_on=false;
var valueIdZ=-1;
var valueIdX=-1;
var circle_1;
var circle_2;
var circle_3;
var sdvig_X=0;
var sdvig_Z=0;
var sdvigOld=320;
var G01_on_first=true;
var feed_on_first=true;
var feed_on=false;
var G01_on=false;
var G01_on_first=true;
var G02_on=false;
var G03_on=false;
var G00_on=false;
//var circle;
//var x_mouse=0;
//var y_mouse=0;
//var x_mouse_on=0;
//var y_mouse_on=0;
//var view_x=0;
//var view_y=0;
//var groupX=new Array;
//var groupZ=new Array;
//var sub_group1=new Array;
*/

function userSubmit() {

  canvas.clear();
  canvas.add(line1);
  canvas.add(line2);

  var otvod_X=document.getElementById('X_otvod').value;
  var otvod_Z=document.getElementById('Z_otvod').value;
  otvod_X=Number.parseFloat(otvod_X);
  otvod_Z=Number.parseFloat(otvod_Z);
  var dig_kyrsor=getline();
  var G_old="";
  var coord_R="";
  var coord_U="";
  var coord_W="";
  var Fun_M="";
  var tool_num="";
  var rev_S="";
  var feed_f_MM="";
  var	UI = new Array();
  var str=new Array();
  var sub_group=new Array();
  var coord_X=otvod_X;
  var coord_X_OLD=otvod_X;
  var coord_Z=otvod_Z;
  var coord_Z_OLD=otvod_Z;
  var group=group1;
  group.length=dig_kyrsor;
  temp_str.length=dig_kyrsor;
  var k=0;
  var h=0;
  var i=0;
  var num1=0;
  line3=null;
  var line6=undefined;
  var num_str=-1;
  var comentsOn=9999;
  var color_line='black';
  UI=document.getElementById('userInput').value+"\n";
  var circle_interpol=false;
  var G02_on=false;
  var G03_on=false;




  //var G01_on=false;


        //groupX=[];
        //groupZ=[];
        //circle_on=false;
        //var feed_on=false;
   
        //var G01_on_first=true;
        //var feed_on_first=true;
        //var G00_on=false;
        //var number_line=0;
        //groupX.push(otvod_X);
        //groupZ.push(otvod_Z);
        //var group=new Array();

        if(begin_clear>dig_kyrsor)
        {
          begin_clear=dig_kyrsor;
        }


        for(i=0;i<=UI.length;i++)
        {
         if(num1>=dig_kyrsor)
         {
          break;
        }


        str[k]=UI[i];

        if(str[k]=="\n")
        {
          var G92_on=false;

          
          num1=num1+1;
          num_str=num_str+1;

          //var temp_str_1=str.join('');

          if(temp_str[num_str]==str.join(''))
          {

           if(group1[num_str]!=0)
           {

            if(group1[num_str].length>1)
            {
              for(var v =0;v<group1[num_str].length;v++)
              {

                if(num_str>begin_clear){

                  canvas.add(group1[num_str][v]);
                }

              }
              coord_X=(320-group1[num_str][group1[num_str].length-1].y2)/2;
              coord_Z=(group1[num_str][group1[num_str].length-1].x2-320)/4;
              color_line=group1[num_str][0].stroke;
            }
            else{

             if(num_str>begin_clear){
               canvas.add(group1[num_str]);
             }

             color_line=group1[num_str].stroke;
             coord_X=(320-group1[num_str].y2)/2;
             coord_Z=(group1[num_str].x2-320)/4;

           }
           group[num_str]=group1[num_str];

           otvod_Z=coord_Z;
           otvod_X=coord_X;
           coord_X_OLD=coord_X;
           coord_Z_OLD=coord_Z;
         }
       }

       else {

        temp_str[num_str]=str.join('');

     /*   var  temp_coord_X="";
        var  temp_coord_Z="";
        var  temp_coord_R="";
        var  temp_feed_f ="";
        var  temp_coord_U="";
        var  temp_coord_W="";*/

/////////////////////////////////////////////////////////нахождение начало коментариев

if(str.indexOf('(')!=-1)
{
  comentsOn=str.indexOf('(');
}

////////////////////////////////////////////////////////////нахождение T инструмента

if(str.indexOf('T')!=-1) 
{
     var  temp_tool_num ="";

     var j=str.indexOf('T');

     for(;;)
     {
      j+=1;

      if(str[j]!='\n'&&j<comentsOn)
      {

        temp_tool_num=temp_tool_num+str[j];

        if (str[j+1].charCodeAt()>57||str[j+1].charCodeAt()<45)
        {
          if (isNaN(str[j])==false||str[j]=='.')
          {
            //tool_num_on=true;
            tool_num=temp_tool_num;
            document.getElementById('T_output').value=tool_num;
            //tool_num=tool_num.slice(0,2);

            //tool_num=Number.parseFloat(tool_num);
          }
          break;
        }
      }
      else{break;}
     }
}

//////////////////////////////////////////////////////нахождение координат по Х

if(str.indexOf('X')!=-1)
{
  var  temp_coord_X=""
  var j=str.indexOf('X');

  for(;;)
  {
    j+=1;

    if(str[j]!='\n'&&j<comentsOn){

      temp_coord_X=temp_coord_X+str[j];

      if (str[j+1].charCodeAt()>57||str[j+1].charCodeAt()<45)
      {


        if (isNaN(str[j])==false||str[j]=='.')
        {
          coord_X=temp_coord_X;
          coord_X=Number.parseFloat(coord_X);


          document.getElementById('X_output').value=coord_X.toFixed(3);

          if(SpeedCut_on==true)
          {
            rev_S=(SpeedCut_rev*1000)/(3.141*coord_X);

           if(rev_S>limit_S)
            {
              document.getElementById('S_output').value=limit_S;
            }
            else
            {
              document.getElementById('S_output').value=rev_S.toFixed(0);
            }
          }

          if(G01_on==true||G02_on==true||G03_on==true)
          {
            var time_S=document.getElementById('S_output').value;
            feed_f_MM=time_S*feed_f;
            document.getElementById('F_output').value=feed_f_MM.toFixed(0);
          }
          
        }
        break;
      }
    }
    else{break;}
  }
}

///////////////////////////////////////////////////////нахождение координат по Z   

if(str.indexOf('Z')!=-1)  
{
 var  temp_coord_Z=""
 var j=str.indexOf('Z');

 for(;;)
 {
  j+=1;

  if(str[j]!='\n'&&j<comentsOn){

    temp_coord_Z=temp_coord_Z+str[j];

    if (str[j+1].charCodeAt()>57||str[j+1].charCodeAt()<45)
    {


      if (isNaN(str[j])==false||str[j]=='.')
      {
        coord_Z=temp_coord_Z;
        coord_Z=Number.parseFloat(coord_Z);
        document.getElementById('Z_output').value=coord_Z.toFixed(3);

      }
      break;
    }

  }
  else{break;}
}
}

////////////////////////////////////////////////////////нахождение координат по R 

if(str.indexOf('R')!=-1)  
{
  var  temp_coord_R="";
  var j=str.indexOf('R');

  for(;;)
  {
    j+=1;

    if(str[j]!='\n'&&j<comentsOn){

      temp_coord_R=temp_coord_R+str[j];

      if (str[j+1].charCodeAt()>57||str[j+1].charCodeAt()<45)
      {


        if (isNaN(str[j])==false||str[j]=='.')
        {
          coord_R=temp_coord_R;
          coord_R=Number.parseFloat(coord_R);

        }
        break;
      }

    }
    else{break;}
  }
}

///////////////////////////////////////////////////////////////нахождение координат по U 

if(str.indexOf('U')!=-1)  
{
  var  temp_coord_U="";
  var j=str.indexOf('U');

  for(;;)
  {
    j+=1;

    if(str[j]!='\n'&&j<comentsOn){

      temp_coord_U=temp_coord_U+str[j];

      if (str[j+1].charCodeAt()>57||str[j+1].charCodeAt()<45)
      {


        if (isNaN(str[j])==false||str[j]=='.')
        {
          coord_U=temp_coord_U;
          coord_U=Number.parseFloat(coord_U);

        }
        break;
      }

    }
    else{break;}
  }
}

///////////////////////////////////////////////////////нахождение координат по W

if(str.indexOf('W')!=-1)   
{
  var  temp_coord_W="";
  var j=str.indexOf('W');

  for(;;)
  {
    j+=1;

    if(str[j]!='\n'&&j<comentsOn){

      temp_coord_W=temp_coord_W+str[j];

      if (str[j+1].charCodeAt()>57||str[j+1].charCodeAt()<45)
      {


        if (isNaN(str[j])==false||str[j]=='.')
        {
          coord_W=temp_coord_W;
          coord_W=Number.parseFloat(coord_W);

        }
        break;
      }

    }
    else{break;}
  }
}


/////////////////////////////////////////////////////////////////нахождение G-кода 

if(str.indexOf('G')!=-1)  
{

  var NumberSymbol=str.filter(item=>item==="G").length;
  var indexSearch=0;

  for(var v=0;v<NumberSymbol;v++){

    var j=str.indexOf('G',indexSearch);

    for(;;)
    {
      j+=1;

      if(str[j]!='\n'&&j<comentsOn){

        G_old=G_old+str[j];

        if (str[j+1].charCodeAt()>57||str[j+1].charCodeAt()<45)
        {
          break;
        }
      }
      else{break;}

    }

    if (G_old=="00"||G_old=="0")
    {
      color_line='red';
      circle_interpol=false;
      G02_on=false;
      G03_on=false;
      G01_on=false;
    document.getElementById('F_output').value="MAX";


    }
    else if (G_old=="01"||G_old=="1")
    {
      G01_on=true;
      G02_on=false;
      G03_on=false;
      circle_interpol=false;
      color_line='green';
    }

    else if (G_old=="02"||G_old=="2"||G_old=="3"||G_old=="03")
    {
     color_line='green';
     circle_interpol=true;
      G01_on=false;

     if(G_old=="02"||G_old=="2")
     {
      G02_on=true;
      G03_on=false;

    }
    else if(G_old=="3"||G_old=="03")
    {
      G03_on=true;
      G02_on=false;
    }

  }
  else if(G_old=="28")
  {
    if(coord_U==0)
    {
      coord_X=document.getElementById('X_otvod').value;
    }

    if(coord_W==0)
    {
      coord_Z=document.getElementById('Z_otvod').value;
    }
  }
  else if(G_old=="83")
  {

  }
  else if(G_old=="96")
  {
    SpeedCut_on=true;
  }

  else if(G_old=="97")
  {
    SpeedCut_on=false;
  }
  else if(G_old=="92"||G_old=="G50")
  {

    G92_on=true;
  }

  G_old="";
  indexSearch=j;

}
}

////////////////////////////////////////////////////////////нахождение подачи F  

if(str.indexOf('F')!=-1) 
{
     //feed_on=true;
     var  temp_feed_f ="";
     var j=str.indexOf('F');

     for(;;)
     {
      j+=1;

      if(str[j]!='\n'&&j<comentsOn){

        temp_feed_f=temp_feed_f+str[j];

        if (str[j+1].charCodeAt()>57||str[j+1].charCodeAt()<45)
        {

          if (isNaN(str[j])==false||str[j]=='.')
          {
            feed_f=temp_feed_f;
            feed_f=Number.parseFloat(feed_f);

          }
          break;
        }

      }
      else{break;}
    }

    var time_S=document.getElementById('S_output').value;
    feed_f_MM=time_S*feed_f;
    document.getElementById('F_output').value=feed_f_MM.toFixed(0);

  }

  ////////////////////////////////////////////////////////////нахождение S оборотов


  if(str.indexOf('S')!=-1) 
{
     var  temp_rev_S ="";
     var j=str.indexOf('S');

     for(;;)
     {
      j+=1;

      if(str[j]!='\n'&&j<comentsOn){

        temp_rev_S=temp_rev_S+str[j];

        if (str[j+1].charCodeAt()>57||str[j+1].charCodeAt()<45)
        {

          if (isNaN(str[j])==false||str[j]=='.')
          {
            
            rev_S=temp_rev_S;
           // document.getElementById('S_output').value=rev_S;

            if(G92_on==true)
            {
              limit_S=rev_S;
            }
             //rev_S=Number.parseFloat(rev_S);
          }
          break;
        }

      }
      else{break;}
    }
  }

////////////////////////////////////////////////////////////нахождение функции M

if(str.indexOf('M')!=-1) 
{
  var  temp_Fun_M="";
  var j=str.indexOf('M');

  for(;;)
  {
    j+=1;

    if(str[j]!='\n'&&j<comentsOn){

      temp_Fun_M=temp_Fun_M+str[j];

      if (str[j+1].charCodeAt()>57||str[j+1].charCodeAt()<45)
      {


        if (isNaN(str[j])==false||str[j]=='.')
        {
          Fun_M=temp_Fun_M;
          Fun_M=Number.parseFloat(Fun_M);

        }


        break;
      }

    }
    else{break;}
  }

  if(Fun_M==3||Fun_M==4)
  {
    if(SpeedCut_on==true)
    {
      SpeedCut_rev=rev_S;
      var time_X=document.getElementById('X_otvod').value;
      rev_S=(SpeedCut_rev*1000)/(3.141*time_X);
      document.getElementById('S_output').value=rev_S.toFixed(0);
    }
    else if(SpeedCut_on==false)
    {
      document.getElementById('S_output').value=rev_S;
    }

  }
  else if(Fun_M==5)
  {
     document.getElementById('S_output').value=0;

  }
  else if(Fun_M==2||Fun_M==30)
  {
    document.getElementById('X_output').value="0.000";
    document.getElementById('Z_output').value="0.000";
    document.getElementById('S_output').value=0;
    document.getElementById('T_output').value=0;
    document.getElementById('F_output').value=0;
  }
}



///////////////////////////////////////////////////////////////нахождение конец коментариев

if(str.indexOf(')')!=-1)
{
  comentsOn=9999;
}

/////////////////////////////////////////////////////////////

var val1=isNaN(coord_X);
var val2=isNaN(coord_Z);

///////////////////////////////////////////////////прорисовка объектов

if(val1==false&&val2==false){

 if(coord_X_OLD!=coord_X||coord_Z_OLD!=coord_Z)
 {

          if(circle_interpol==true)//прорисовка круговой интерполяции
          {
           line3=simulate_circle_interpol(coord_X,coord_Z,canvas,otvod_Z,otvod_X,color_line,coord_R,sub_group,G02_on,G03_on);
         }
         else 
         {

             if(otvod_X!=coord_X&&otvod_Z!=coord_Z)// прорисовка линейной интерполяции по двум координатам
             {
              line3=simulate_xz(coord_X,coord_Z,canvas,otvod_Z,otvod_X,color_line,sub_group);
            }

            else{
              line3=simulate(coord_X,coord_Z,canvas,otvod_Z,otvod_X,color_line);// проррисовка линейной интерполяции по одной коррдинате
            }
            
          }

          /*  if (CreatedStock==true&&G01_on==true) 
         {
           var cutPath=userSubmit1(coord_X,coord_Z,canvas1,otvod_Z,otvod_X,num_str);
           groupCut[num_str]=cutPath;
         }
         else
         {

          groupCut[num_str]=0;

         }*/




///////////////////////////////////////////////Добавление в группы объектов

if (line3!=line6)
{

 if(circle_interpol==true)
 {

  if(sub_group.length==1)
  {
   group[num_str]=sub_group[0];
 }
 else
 {
   group[num_str]=sub_group;
 }

 sub_group=[];
}
else 
{

  if(otvod_X!=coord_X&&otvod_Z!=coord_Z)
  {

    if(sub_group.length==1)
    {
     group[num_str]=sub_group[0];
   }
   else
   {
     group[num_str]=sub_group;
   }

   sub_group=[];
 }

 else{

   group[num_str]=line3;

 }

}




////////////////////////////////////////////////////////Добавление объектов в канвас

if(group[num_str]!=0&&num_str>begin_clear)
{

 if(group[num_str].length>1)
 {
  for(var v =0;v<group[num_str].length;v++)
  {
    canvas.add(group[num_str][v]);

  }
}
else{

  canvas.add(group[num_str]);
}

/*if (CreatedStock==true&&G01_on==true) 
{
  canvas1.add(groupCut[num_str]);
}*/

}

}

line6=line3;
otvod_Z=coord_Z;
otvod_X=coord_X;
coord_X_OLD=coord_X;
coord_Z_OLD=coord_Z;
}
else
{
  group[num_str]=0;
  //groupCut[num_str]=0;

} 

}
}

k=0;
str=[];
}

else {
 k=k+1;
}
}

group1=group;
group2=group1;



}



// проррисовка линейной интерполяции по одной коррдинате
function simulate(coord_X,coord_Z,ctx,otvod_Z,otvod_X,color_line){

  var line4 = new fabric.Line([
    otvod_Z*4+320,
    -otvod_X*2+320,
    coord_Z*4+320,
    -coord_X*2+320],{ 
      stroke: color_line,
      strokeWidth:strokeWidth_main,
    });

  return line4;
}




//прорисовка круговой интерполяции
function simulate_circle_interpol(coord_X,coord_Z,canvas,otvod_Z,otvod_X,color_line,coord_R,sub_group,G02_on,G03_on){

 var X_1=coord_X*2;
 var X_2=otvod_X*2;
 var Z_1=coord_Z*4;
 var Z_2=otvod_Z*4;
 var r=coord_R*4;
 var X_01;
 var Z_01;
 var temp;
 var unknow_z_old=Z_2;
 var unknow_x_old=X_2;
 var pi=parseFloat(Math.PI.toFixed(6));


/*var X_1=coord_X/2;
  var X_2=otvod_X/2;
  var Z_1=coord_Z;
  var Z_2=otvod_Z;
  var r=coord_R;
  var X_01;
  var Z_01;
  var temp;
  var unknow_z_old=0;
  var unknow_x_old=0;
  var pi=parseFloat(Math.PI.toFixed(6));*/

  var d= parseFloat((Math.sqrt(Math.pow((X_1-X_2),2)+Math.pow((Z_1-Z_2),2))).toFixed(6));
  var h= parseFloat((Math.sqrt(Math.pow(r,2)-Math.pow(d/2,2))).toFixed(6));


//нахождение центра круговой интерполяции по G02
if (G02_on==true) {

  if(r>0)
  {

    X_01=parseFloat((X_1+(X_2-X_1)/2+h*(Z_2-Z_1)/d).toFixed(6));
    Z_01=parseFloat((Z_1+(Z_2-Z_1)/2-(h*(X_2-X_1)/d)).toFixed(6));
    var minys =(-1);


    if(X_1>X_2)
    {
     ygol=ygol*(1);
   }
 }

 else if(r<0)
 {
  X_01=parseFloat((X_1+(X_2-X_1)/2-h*(Z_2-Z_1)/d).toFixed(6));
  Z_01=parseFloat((Z_1+(Z_2-Z_1)/2+(h*(X_2-X_1)/d)).toFixed(6));
  var minys =(-1);
}
}
//нахождение центра круговой интерполяции по G03
if (G03_on==true) {

  if(r>0)
  {
   X_01=parseFloat((X_1+(X_2-X_1)/2-h*(Z_2-Z_1)/d).toFixed(6));
   Z_01=parseFloat((Z_1+(Z_2-Z_1)/2+h*(X_2-X_1)/d).toFixed(6));
   var minys =(1);
 }
 else if (r<0)
 {
   X_01=parseFloat((X_1+(X_2-X_1)/2+h*(Z_2-Z_1)/d).toFixed(6));
   Z_01=parseFloat((Z_1+(Z_2-Z_1)/2-h*(X_2-X_1)/d).toFixed(6));
   var minys =(1);
 }

}
var ygol=parseFloat(((Math.acos(parseFloat((Z_2-Z_01)/r).toFixed(6))*180)/pi).toFixed(6));//нахождение угла на который надо довернуть

if(ygol==NaN)
{
  ygol=0;
}

if(X_01<X_2){
  ygol=ygol*(-1);
}

//нахождение угла круговой интерполяции

var vektor_X1=parseFloat((X_1-X_01).toFixed(6));
var vektor_Z1=parseFloat((Z_1-Z_01).toFixed(6));

var vektor_X2=parseFloat((X_2-X_01).toFixed(6));
var vektor_Z2=parseFloat((Z_2-Z_01).toFixed(6));

var cos_ygol=parseFloat(((vektor_X1*vektor_X2+vektor_Z1*vektor_Z2)/(r*r)).toFixed(6));
var gradus_ygol=parseFloat((Math.acos(cos_ygol)*180/pi).toFixed(6));

if(r<0)
{
  gradus_ygol=360-gradus_ygol;
  ygol=ygol*(-1);
}

var step= parseFloat(((gradus_ygol)/Math.round(gradus_ygol)*2).toFixed(6));// шаг апроксимации
z_2=parseFloat(gradus_ygol.toFixed(4));

for(var z=0;z<gradus_ygol;)
{
  z_1=parseFloat(z.toFixed(4));
  
  if(z_1+step>z_2)
  {
    var  unknow_x=X_1;
    var  unknow_z=Z_1;
    z=z+step;
  }
  else {

    z=z+step;
// координаты в абсолютах точек окружности вокруг центра 
var unknow_z=parseFloat((r*Math.cos(((z*minys)/180*pi)-(ygol/180*pi))+Z_01).toFixed(6));
var unknow_x=parseFloat((r*Math.sin(((z*minys)/180*pi)-(ygol/180*pi))+X_01).toFixed(6));
}

 //прорисовка линий по точкам вокуруг центра круговой интерполяции
 var line7 = new fabric.Line([
  unknow_z_old+320,
  -unknow_x_old+320,
  unknow_z+320,
  -unknow_x+320],{ 
    stroke: color_line,
    strokeWidth:strokeWidth_main,
  });

 sub_group.push(line7);

 unknow_z_old=unknow_z;
 unknow_x_old=unknow_x;

 if(z>361)
 {
  break;
}
}

return sub_group;

}

//получение номера строки на котором находится курсор

function getline(){

  var userInput = $("#userInput")[0];
  var num_Kursor=userInput.value.substr(0,userInput.selectionStart).split("\n").length;
  return num_Kursor;
}




// прорисовка линейной интерполяции по двум координатам
function simulate_xz(coord_X,coord_Z,ctx,otvod_Z,otvod_X,color_line,sub_group){


  var X_1=coord_X*2;
  var X_2=otvod_X*2;
  var Z_1=coord_Z*4;
  var Z_2=otvod_Z*4;
  var unknow_z_old=otvod_Z*4;
  var unknow_x_old=otvod_X*2;


  var rr_otr=Math.sqrt(Math.pow((X_1-X_2),2)+Math.pow((Z_1-Z_2),2));

  var temp = Math.round(rr_otr);
  if(temp>100){

    temp=temp/100;

  }
  else if(temp>10){

    temp=temp/10;

  }

  var step=rr_otr/(Math.round(temp));
  var otrezok=rr_otr;

  for(var n=0;n<(Math.round(temp));n++)
  {

    otrezok=otrezok-step; 
    var k=otrezok/rr_otr;
    var unknow_z=Z_1+(Z_2-Z_1)*k;
    var unknow_x=X_1+(X_2-X_1)*k;

    var line7 = new fabric.Line([
      unknow_z_old+320,
      -unknow_x_old+320,
      unknow_z+320,
      -unknow_x+320],{ 
        stroke: color_line,
        strokeWidth:strokeWidth_main,
      });

    sub_group.push(line7);


    unknow_x_old=unknow_x;
    unknow_z_old=unknow_z;
  }


  return sub_group;
}
