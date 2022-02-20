/////////////проверка на ошибки

function CheckAlarm() {

 document.getElementById('AlarmWindow').value="";

  var dig_kyrsor=getline();

  var G_old="";
  var coord_R="";
  var coord_U="";
  var coord_W="";
  var feed_f ="";
  var M_old="";
  var rev_S="";
  var tool_num="";
  
  var	UI = new Array();
  var str=new Array();
  var sub_group=new Array();

  var k=0;
  var h=0;
  var i=0;
  var num1=0;

  var num_str=-1;
  var comentsOn=9999;

  UI=document.getElementById('userInput').value+"\n";
 

  var G02_on=false;
  var G03_on=false;
  var G01_on=false;
  var G00_on=false;
  var feed_first=true;
  var feed_on=false;
  var spindell_on=false;
  var spindell_on_first=true;
  var rev_S_on=false;
  var rev_S_on_first=true;
  var SOG_on=false;
  var SOG_on_first=true;
  var tool_num_on=false;
  var tool_num_first=true;
  var tool_num_old="00";
  var korect_rad=false;
  var end_progm=false;

        for(i=0;i<=UI.length;i++)
        {

        str[k]=UI[i];

        if(str[k]=="\n")
        {

          num1=num1+1;
          num_str=num_str+1;

/////////////////////////////////////////////////////////нахождение начало коментариев

if(str.indexOf('(')!=-1)
{
  comentsOn=str.indexOf('(');
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

///////////////////////////////////////////////////////нахождение координат по U 

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


//////////////////////////////////////////////////////нахождение G-кода 

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

    G01_on=false;
    G02_on=false;
    G03_on=false;
    G00_on=true;
  }
  else if (G_old=="01"||G_old=="1")
  {
    G01_on=true;
    G02_on=false;
    G03_on=false;
    G00_on=false;
  }
  else if (G_old=="02"||G_old=="2"||G_old=="3"||G_old=="03")
  
  {
    G01_on=false;
    G00_on=false;

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

  else if (G_old=="42"||G_old=="41")
   {
    korect_rad=true;
   }
  else if (G_old=="40")
   {
    korect_rad=false;
   }

  G_old="";
  indexSearch=j;

}
}

////////////////////////////////////////////////////////////нахождение подачи F  

if(str.indexOf('F')!=-1) 
{
     var  temp_feed_f ="";
     var j=str.indexOf('F');

     for(;;)
     {
      j+=1;

      if(str[j]!='\n'&&j<comentsOn){

        temp_feed_f=feed_f+str[j];

        if (str[j+1].charCodeAt()>57||str[j+1].charCodeAt()<45)
        {


          if (isNaN(str[j])==false||str[j]=='.')
          {
            feed_on=true;
            feed_f=temp_feed_f;
            feed_f=Number.parseFloat(feed_f);
          }
          break;
        }

      }
      else{break;}
    }
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
            tool_num_on=true;
            tool_num=temp_tool_num;
            tool_num=tool_num.slice(0,2);

            //tool_num=Number.parseFloat(tool_num);
          }
          break;
        }
      }
      else{break;}
     }
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

        temp_rev_S=rev_S+str[j];

        if (str[j+1].charCodeAt()>57||str[j+1].charCodeAt()<45)
        {


          if (isNaN(str[j])==false||str[j]=='.')
          {
            rev_S_on=true;
            rev_S=temp_rev_S;
            rev_S=Number.parseFloat(rev_S);
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

  var NumberSymbol=str.filter(item=>item==="M").length;
  var indexSearch=0;

  for(var v=0;v<NumberSymbol;v++){

    var j=str.indexOf('M',indexSearch);

    for(;;)
    {
      j+=1;

      if(str[j]!='\n'&&j<comentsOn){

        M_old=M_old+str[j];

        if (str[j+1].charCodeAt()>57||str[j+1].charCodeAt()<45)
        {
          break;
        }
      }
      else{break;}

    }

    if (M_old=="3"||M_old=="03"||M_old=="4"||M_old=="04")
     {
     spindell_on=true;
     }

    if (M_old=="7"||M_old=="07"||M_old=="8"||M_old=="08")
     {
      SOG_on=true;
     }
    if(M_old=="30"||M_old=="02"||M_old=="2")
     {
      end_progm=true;
     }
 
  M_old="";
  indexSearch=j;

}

}

///////////////////////////////////////////////////////////////нахождение конец коментариев

if(str.indexOf(')')!=-1)
{
  comentsOn=9999;
}

/////////////////////////////////////////////////////////////

if(G01_on==true)
{
  if (tool_num==false&&tool_num_first==true) 
  {
    tool_num_first=false
    document.getElementById('AlarmWindow').value+=" - Нет вызова инструмента - (T) \n";
  }
  if(spindell_on==false&&spindell_on_first==true)
  {
    spindell_on_first=false;
    document.getElementById('AlarmWindow').value+=" - Нет включения шпинделя или токарного патрона - (M3/M4) - T"+tool_num+" -\n";
  }
  if(rev_S_on==false&&rev_S_on_first==true)
  {
    rev_S_on_first=false;
    document.getElementById('AlarmWindow').value+=" - Не заданно количество оборотов - (S) - T"+tool_num+" -\n";
  }
  if(SOG_on==false&&SOG_on_first==true)
  {
    SOG_on_first=false;
    document.getElementById('AlarmWindow').value+=" - Нет включения СОЖ - (M7/M8) - T"+tool_num+" -\n";
  }
  if(feed_on==false&&feed_first==true)
  {
    feed_first=false;
     document.getElementById('AlarmWindow').value+=" - Подача равна нулю - (F) - T"+tool_num+" -\n";
  }
}

else if (G00_on==true) 
{
  if (tool_num==false&&tool_num_first==true)
  {
    tool_num_first=false
    document.getElementById('AlarmWindow').value+=" - Нет вызова инструмента - (T) \n";
  }
}

if(tool_num!=tool_num_old||end_progm==true)
{
  if(korect_rad==true)
  {
    korect_rad=false;
    document.getElementById('AlarmWindow').value+=" - Нет выключения коррекции - (G40) - " + tool_num_old +" -\n";
  }

  G02_on=false;
  G03_on=false;
  G01_on=false;
  G00_on=false;
  feed_first=true;
  feed_on=false;
  spindell_on=false;
  spindell_on_first=true;
  rev_S_on=false;
  rev_S_on_first=true;
  SOG_on=false;
  SOG_on_first=true;
  tool_num_on=false;
  tool_num_first=true;
  tool_num_old=tool_num;

}

if(end_progm==true)
{

}

k=0;
str=[];
}

else {
 k=k+1;
}
}

if(end_progm==false)
{
  document.getElementById('AlarmWindow').value+=" - Нет M-функции 'Конец программы' - (M30/M02) - \n";
}

}

function ClearAlarm() {

 document.getElementById('AlarmWindow').value="";
 }