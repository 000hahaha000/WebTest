function include(path){ 
    var a=document.createElement("script");
    a.type = "text/javascript"; 
    a.src=path; 
    var head=document.getElementsByTagName("head")[0];
    head.appendChild(a);
    }

function FullScreen(canvas)
{
	canvas.canvas.width = window.innerWidth;
	canvas.canvas.height = window.innerHeight;
}