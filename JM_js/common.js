$(document).ready(function(){
$('.button img').hover(function(){
var fn = $(this).attr("src");
var newfn = fn.replace(".","_hover.");
$(this).attr("src", newfn);
}, function(){
var fn = $(this).attr("src");
var newfn = fn.replace("_hover.",".");
$(this).attr("src", newfn);
});

var $sideNav= $('.sideNav');
$sideNav.css('right', -($sideNav.width()-58));
$('.sideNav li a').on('mouseenter mouseleave', function (event) {
var $this = $(this);
var selectedWidth = $this.outerWidth();
$this.toggleClass("active");
if($this.hasClass('active')){
$this.css('left', -(selectedWidth - 78));
}else{
$this.css('left', '0');
}
});

var $anchor = document.getElementById('topNav'),
$anc01 = document.getElementById('anc01'),
$anc02 = document.getElementById('anc02'),
$anc03 = document.getElementById('anc03');

//add more to here when element is actual done;
var ancList = [$anc01, $anc02, $anc03];
$(window).scroll(function(){
if(!elementInViewport($anchor) && $(window).scrollTop() > $anchor.offsetTop){
$sideNav.css('display', 'inline-block');
//applies active state when content is on view
sideNavIsActive(ancList);
}else{
$sideNav.css('display', 'none');
}
})

//applies smooth scrolling to anchor links
$(document).on('click', 'a[href^="#"]', function (event) {
event.preventDefault();

$('html, body').animate({
scrollTop: $($.attr(this, 'href')).offset().top
}, 500);
});

var thumb_txt = ".thumbSlider .contentArea";
var thumb_title = ".thumbSlider .contentArea p:first-child";


var related_title =".relatedProduct .titleBlock";
var related_img =".relatedProduct .img";

/** Autoheight **/
$(window).on('load', function(){
autoheight(thumb_txt, 3);
autoheight(thumb_title, 3);
autoheight(related_title, 4);
autoheight(related_img, 4);
});


});

function sideNavIsActive (ancList){
var prevActive;
$.each(ancList, function(index, value){
if(elementInViewport(value) && !prevActive){
prevActive = true;
$("a[href$="+value.id+"]").css('background', '#ffff66')
}else{
prevActive = false;
$("a[href$="+value.id+"]").css('background', '#fff')
}
});

}

function elementInViewport(el) {

var top = el.offsetTop;
var left = el.offsetLeft;
var width = el.offsetWidth;
var height = el.offsetHeight;

while(el.offsetParent) {
el = el.offsetParent;
top += el.offsetTop;
left += el.offsetLeft;
}

return (
top < (window.pageYOffset + window.innerHeight) &&
left < (window.pageXOffset + window.innerWidth) &&
(top + height) > window.pageYOffset &&
(left + width) > window.pageXOffset
);
}