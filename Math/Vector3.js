Vector3 = function(x,y,z){
	this.x = x||0;
	this.y = y||0;
	this.z = z||0;
};
Vector3.prototype.Add = function(v) {
	// body...
	this.x+=v.x;
	this.y+=v.y;
	this.z+=v.z;
};

Vector3.prototype.Sub = function(v){
	this.x -= v.x;
	this.y -= v.y;
	this.z -= v.z;
}