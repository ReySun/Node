const PI=3.14;
var size = function(r){
  return PI*r*r;
}
var perimeter=function(r){
  return 2*PI*r;
}
var color="red";
exports.size=size;
exports.per=perimeter;
exports.color=color;