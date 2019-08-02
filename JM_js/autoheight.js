function autoheight(cname, col){
var max = 0;
var tempMax = 0;
if(col == undefined){
$(cname).each(function(){
tempMax = $(this).height();
if (tempMax > max){
max = tempMax;
}
});
$(cname).height(max);
}else{
var ctr, ctr2;
var maxcname = $(cname).length;
for(ctr=0;ctr < maxcname;ctr++){
var minval = ctr*col;
var maxval = (ctr*col)+(col*1);
for(ctr2=parseInt(minval);ctr2 < parseInt(maxval);ctr2++){
$(cname).slice(minval, maxval).each(function(){
tempMax = $(this).height();
if (tempMax > max){
max = tempMax;
}
});
}
$(cname).slice(minval, maxval).height(max);
max=0;
tempMax=0;
}
}
};