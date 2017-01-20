include("./Math/Vector3.js");
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
function draw()
{
var imgData=ctx.createImageData(1,1);
for (var i=0;i<imgData.data.length;i+=4)
  {
  imgData.data[i+0]=0;
  imgData.data[i+1]=255;
  imgData.data[i+2]=0;
  imgData.data[i+3]=255;
  }
ctx.putImageData(imgData,10,10);
}
FullScreen(ctx);
draw();