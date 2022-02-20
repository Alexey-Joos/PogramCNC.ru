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

function addOnWheel(elem, handler) {
  if (elem.addEventListener) {
    if ('onwheel' in document) {
          // IE9+, FF17+
          elem.addEventListener("wheel", handler);
        } else if ('onmousewheel' in document) {
          // устаревший вариант события
          elem.addEventListener("mousewheel", handler);
        } else {
          // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
          elem.addEventListener("MozMousePixelScroll", handler);
        }
      } else { // IE8-
        c1.attachEvent("onmousewheel", handler);
      }
    }

    var scale = 1;

    addOnWheel(c1, function(e) {

      var brow=browser();
      var endlimitMin=0;
      var endlimitMax=0;

      if(brow=='Firefox')
      {
        endlimitMin=-217;
        endlimitMax=70;
      }
      else if(brow=='Chrome')
      {
        endlimitMin=-7200;
        endlimitMax=2300;

      }



      var delta = e.deltaY || e.detail || e.wheelDelta;

      
      if (delta < 0&&max_min>endlimitMin) {
       
       max_min=max_min+delta;
       canvas.zoomToPoint({x:e.offsetX,y:e.offsetY},canvas.getZoom()*1.1);
       canvas.clear();


       strokeWidth_sub=strokeWidth_sub/1.1;
       strokeWidth_main=strokeWidth_main/1.1;
       radius_circle= radius_circle/1.1;

       line1.set({
        strokeWidth:strokeWidth_sub,});
       line2.set({
        strokeWidth:strokeWidth_sub,});

       canvas.add(line1);
       canvas.add(line2);

     /* for(var s=0;s<path_main.length;s++)
{
  canvas1.add(path_main[s]);
} */

if(group2.length!=0){

  for(var p=0;p<group2.length;p++)
  {
   if(group2[p]!=0)
   {
     if(group2[p].length>1)
     {
      for(var v =0;v<group2[p].length;v++)
      {
        group2[p][v].set({
          strokeWidth:strokeWidth_main,
          radius:radius_circle,
        });
      }
    }
    else{

      group2[p].set({
        strokeWidth:strokeWidth_main,
        radius:radius_circle,
      });
    }
  }
}

for(var p=0;p<group2.length;p++)
{

  if(group2[p]!=0&&p>begin_clear)
  {
   if(group2[p].length>1)
   {
    for(var v =0;v<group2[p].length;v++)
    {
      
     canvas.add(group2[p][v]);

   }
 }
 else{
  canvas.add(group2[p]);
}
}
}
}
}

else if (delta > 0&&max_min<endlimitMax) {

  max_min=max_min+delta;

  canvas.zoomToPoint({x:320,y:320},canvas.getZoom()/1.1);
  canvas.clear();

  
  strokeWidth_sub=strokeWidth_sub*1.1;
  strokeWidth_main=strokeWidth_main*1.1;
  radius_circle= radius_circle*1.1;

  line1.set({
    strokeWidth:strokeWidth_sub,});
  line2.set({
    strokeWidth:strokeWidth_sub,});

  canvas.add(line1);
  canvas.add(line2);

/*  for(var s=0;s<path_main.length;s++)
{

  canvas1.add(path_main[s]);
} */

if(group2.length!=0){

  for(var p=0;p<group2.length;p++)
  {
    if(group2[p]!=0)
    {

     if(group2[p].length>1)
     {
      for(var v =0;v<group2[p].length;v++)
      {
        
        group2[p][v].set({
          strokeWidth:strokeWidth_main,
          radius:radius_circle,
        });

      }
    }
    else{

      group2[p].set({
        strokeWidth:strokeWidth_main,
        radius:radius_circle,
      });
    }

  }
}

for(var p=0;p<group1.length;p++)
{
 if(group2[p]!=0&&p>begin_clear)
 {

   if(group2[p].length>1)
   {
    for(var v =0;v<group2[p].length;v++)
    {
      
     canvas.add(group2[p][v]);

   }
 }
 else{

  canvas.add(group2[p]);
}

}
}
}
}

    // отменим прокрутку*/
      e.preventDefault();
    }); 

    function browser()
    {
      var ua=navigator.userAgent;

      if(ua.search(/Firefox/)>0)
        return 'Firefox';

      if(ua.search(/Opera/)>0)
        return 'Opera';

      if(ua.search(/Chrome/)>0)
        return 'Chrome';

      if(ua.search(/Safari/)>0)
        return 'Safari';

    }

    function addOnWheel(elem, handler) {
      if (elem.addEventListener) {
        if ('onwheel' in document) {
          // IE9+, FF17+
          elem.addEventListener("wheel", handler);
        } else if ('onmousewheel' in document) {
          // устаревший вариант события
          elem.addEventListener("mousewheel", handler);
        } else {
          // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
          elem.addEventListener("MozMousePixelScroll", handler);
        }
      } else { // IE8-
        c1.attachEvent("onmousewheel", handler);
      }
    }

    var scale = 1;

    addOnWheel(c1, function(e) {

      var brow=browser();
      var endlimitMin=0;
      var endlimitMax=0;

      if(brow=='Firefox')
      {
        endlimitMin=-217;
        endlimitMax=70;
      }
      else if(brow=='Chrome')
      {
        endlimitMin=-7200;
        endlimitMax=2300;

      }

      var delta = e.deltaY || e.detail || e.wheelDelta;

      
      if (delta < 0&&max_min>endlimitMin) {

       canvas1.zoomToPoint({x:e.offsetX,y:e.offsetY},canvas1.getZoom()*1.1);
       canvas1.clear();
 

       for(var s=0;s<path_main.length;s++)
       {
        canvas1.add(path_main[s]);
      } 

      for(var s=0;s<groupCut.length;s++)
      {
        if(groupCut[s]!=0)
        {
       canvas1.add(groupCut[s]);
        }
      }
    }


    else if (delta > 0&&max_min<endlimitMax) {


      canvas1.zoomToPoint({x:320,y:320},canvas1.getZoom()/1.1);
      canvas1.clear();


      for(var s=0;s<path_main.length;s++)
      {
        canvas1.add(path_main[s]);
      } 

      for(var s=0;s<groupCut.length;s++)
      { 

       if(groupCut[s]!=0)
        {
       canvas1.add(groupCut[s]);
        }
      }
    }
      // отменим прокрутку*/
      e.preventDefault();
    }); 