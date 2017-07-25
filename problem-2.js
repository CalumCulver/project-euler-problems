var j = 1;
var l = 0;
for (var i=1; i<4000000; i=k) {
  var k = i + j;
  var j = i;
  if (k%2===0) {
    var l = l + k;
  } else {
  }
}
console.log(l);
